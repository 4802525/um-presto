import { useEffect, useState } from 'react';
import { EntityViewer } from '../../app/features/entityViewer/EntityViewer';
import { SfConnection } from '../../foundations/sfConnections';
import { EntityDefinition } from '../../generated';
import { CellBase, Matrix } from 'react-spreadsheet';

const ENTITY_VIEW_SYMBOLE = Symbol('EntityView');
const EntityView = () => {
  const [sfConnection, setSfConnection] = useState<SfConnection | undefined>(undefined);
  const [objectInformations, setObjectInfomations] = useState<Matrix<CellBase>>([]);
  const [fieldInformationsByObject, setFieldInformationsByObject] = useState<{
    [key: string]: Matrix<CellBase>;
  }>({});

  useEffect(() => {
    const sfConn = new SfConnection();
    const args = new URLSearchParams(location.search.slice(1));
    const sfHost = args.get('host');
    if (!sfHost) {
      return;
    }

    sfConn.getSession(sfHost).then(() => {
      setSfConnection(sfConn);
    });
  }, [ENTITY_VIEW_SYMBOLE]);

  useEffect(() => {
    if (!sfConnection) {
      return;
    }

    EntityDefinition.retrieve((f) => ({
      select: [
        ...f.select('id', 'qualifiedApiName', 'label'),
        f.subQuery('fields', (subF) => ({
          select: subF.select('id', 'qualifiedApiName', 'label', 'dataType'),
        })),
      ],
      where: [
        // 不要なオブジェクトを除去
        [{ field: f.select('qualifiedApiName'), val: '%Share', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%Feed', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%ChangeEvent', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%History', op: 'LIKE', not: true }],
      ],
      orderBy: [{ field: f.select('label') }],
    })).then((entities) => {
      setObjectInfomations(
        entities.map((entity) => [
          { value: entity.label, readOnly: true },
          { value: entity.qualifiedApiName, readOnly: true },
        ])
      );

      const fieldInfosBuilder = new Map<string, Matrix<CellBase>>();
      for (const entity of entities) {
        if (!entity.qualifiedApiName) {
          continue;
        }

        fieldInfosBuilder.set(
          entity.qualifiedApiName,
          entity.fields?.map((field) => [
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType, readOnly: true },
          ]) ?? []
        );
      }
      setFieldInformationsByObject(Object.fromEntries(fieldInfosBuilder));
    });
  }, [sfConnection]);

  if (!sfConnection) {
    return <div>domainが有効ではありません．</div>;
  }

  return (
    <div className="h-screen w-screen">
      <EntityViewer
        objectInformations={objectInformations}
        fieldInformationsByObject={fieldInformationsByObject}
      />
    </div>
  );
};

export default EntityView;
