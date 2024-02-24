import { renderToStaticMarkup } from 'react-dom/server';
import { SfConnection } from '../foundations/sfConnections';
import { EntityDefinition } from '../generated';
import { Layout } from '../types/Layout';
import { Rest } from 'ts-force';
import { FC, useEffect, useState } from 'react';

const createLi = (durableId: string, id: string, title: string, url: string) => {
  const element = document.createElement('li', { is: 'aura:html' });
  element.setAttribute('role', 'presentation');
  element.setAttribute('id', id);
  element.setAttribute(
    'class',
    'addedListOfPresto slds-dropdown__item uiMenuItem onesetupSetupMenuItem'
  );
  element.setAttribute('data-aura-class', 'uiMenuItem onesetupSetupMenuItem');

  element.innerHTML = renderToStaticMarkup(
    <a
      role="menuItem"
      data-id={id}
      title={title}
      href={`/lightning/setup/ObjectManager/${durableId}/${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="slds-grid">
        <div className="slds-col slds-size_10-of-12">
          <span className="slds-truncate">
            <span className="slds-align-middle">{title}</span>
          </span>
        </div>

        <div className="slds-p-right_small slds-p-left_xx-small slds-no-flex slds-col slds-size_2-of-12"></div>
      </div>
    </a>
  );
  return element;
};

const Content: FC = () => {
  const url = location.href;
  chrome.runtime.sendMessage({ message: 'getCurrentUrl' }, (currentUrl) => {
    chrome.runtime.sendMessage({ message: 'getSfHost', url: currentUrl ?? url }, (sfHost) => {
      const sfConn = new SfConnection();
      sfConn.getSession(sfHost).then(async () => {
        const setupGearUl = document.querySelector('div.setupGear ul');
        if (!setupGearUl) {
          return;
        }

        const entities = await EntityDefinition.retrieve((f) => ({
          select: [
            ...f.select(
              'id',
              'qualifiedApiName',
              'label',
              'detailUrl',
              'durableId',
              'isCustomSetting'
            ),
          ],
        }));

        const queryResponse = await new Rest().toolingQuery<Layout>(
          'SELECT Id, Name, EntityDefinitionId FROM Layout'
        );
        const layouts = queryResponse.records;

        const observer = new MutationObserver((mutations) => {
          const editObjectLi = setupGearUl.querySelector('li#edit-object');
          if (!editObjectLi) {
            // オブジェクト編集が含まれない場合は，クリアする
            setupGearUl.querySelectorAll('li.addedListOfPresto')?.forEach((li) => li.remove());
            return;
          }
          // 追加済みの場合は追加しない
          const fieldLi = setupGearUl.querySelector('li#fieldsAndRelationships');
          if (fieldLi) {
            return;
          }

          for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
              continue;
            }

            const uri = mutation.target.baseURI;
            const objectName = uri.split('/lightning/')?.[1].split('/')?.[1];
            const entity = entities.find((entity) => entity.qualifiedApiName === objectName);
            if (!entity || !entity.durableId) {
              continue;
            }

            const addedNodes: Node[] = [];
            for (const node of mutation.addedNodes) {
              addedNodes.push(node);
            }

            const hasAddedObjectEdit = addedNodes.some((node) =>
              node.textContent?.includes('オブジェクトを編集')
            );

            if (hasAddedObjectEdit) {
              mutation.target.appendChild(
                createLi(
                  entity.durableId,
                  'fieldsAndRelationships',
                  '項目とリレーション',
                  'FieldsAndRelationships/view'
                )
              );
              mutation.target.appendChild(
                createLi(
                  entity.durableId,
                  'viewPageAssignments',
                  'ページレイアウト割当',
                  'PageLayouts/viewPageAssignments'
                )
              );
              mutation.target.appendChild(
                createLi(
                  entity.durableId,
                  'buttonsLinksActionsNew',
                  '新規ボタン割当',
                  'ButtonsLinksActions/New/editStandardAction'
                )
              );
              mutation.target.appendChild(
                createLi(
                  entity.durableId,
                  'buttonsLinksActionsEdit',
                  '編集ボタン割当',
                  'ButtonsLinksActions/Edit/editStandardAction'
                )
              );

              const objectLayouts = layouts.filter(
                (layout) => layout.EntityDefinitionId === entity.durableId
              );

              for (const layout of objectLayouts) {
                mutation.target.appendChild(
                  createLi(
                    entity.durableId,
                    `layoutPage${layout.Id}`,
                    layout.Name,
                    `PageLayouts/${layout.Id}/view`
                  )
                );
              }
            }
          }
        });

        observer.observe(setupGearUl, { childList: true });
      });
    });
  });
  return <></>;
};

export default Content;
