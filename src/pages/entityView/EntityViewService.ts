import { CellBase, Matrix } from 'react-spreadsheet';
import { EntityDefinition, PermissionSet } from '../../generated';
import { Rest } from 'ts-force';
import { Layout } from '../../types/Layout';

const UM_NAME_SPACES = ['snps_um', 'um_gantt'];
const UM_USED_STANDARD_OBJECTS = ['Account'];
const UM_USED_STANDARD_FIELDS = ['Id', 'Name'];

// offsetの上限は2000
const MAX_OFFSET = 2000;
export default class EntityViewService {
  static buildViewerColumns(entityDefinitions: EntityDefinition[], onlyUm: boolean) {
    const entityDefs = entityDefinitions.filter(
      (entity) =>
        !onlyUm ||
        UM_NAME_SPACES.some((umNameSpace) => entity?.qualifiedApiName?.includes(umNameSpace)) ||
        UM_USED_STANDARD_OBJECTS.includes(entity?.qualifiedApiName ?? '')
    );
    const objectInfos: Matrix<CellBase> = entityDefs.map((entity) => [
      { value: entity.label, readOnly: true },
      { value: entity.qualifiedApiName, readOnly: true },
    ]);

    const fieldInfosBuilder = new Map<string, Matrix<CellBase>>();
    for (const entity of entityDefs) {
      if (!entity.qualifiedApiName) {
        continue;
      }

      fieldInfosBuilder.set(
        entity.qualifiedApiName,
        entity.fields
          ?.filter(
            (field) =>
              !onlyUm ||
              UM_NAME_SPACES.some((umNameSpace) =>
                field?.qualifiedApiName?.includes(umNameSpace)
              ) ||
              UM_USED_STANDARD_FIELDS.includes(field?.qualifiedApiName ?? '')
          )
          .map((field) => [
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType?.slice(0, 80), readOnly: true },
            { value: field.masterLabel, readOnly: true },
          ]) ?? []
      );
    }

    const fieldInfos: Matrix<CellBase> = entityDefs.flatMap((entity) => {
      return (
        entity.fields
          ?.filter(
            (field) =>
              !onlyUm ||
              UM_NAME_SPACES.some((umNameSpace) =>
                field?.qualifiedApiName?.includes(umNameSpace)
              ) ||
              UM_USED_STANDARD_FIELDS.includes(field?.qualifiedApiName ?? '')
          )
          .map((field) => [
            { value: entity.label, readOnly: true },
            { value: entity.qualifiedApiName, readOnly: true },
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType?.slice(0, 80), readOnly: true },
            { value: field.masterLabel, readOnly: true },
          ]) ?? []
      );
    });

    return {
      objectInformations: objectInfos,
      fieldInformationsByObject: Object.fromEntries(fieldInfosBuilder),
      fieldInformations: fieldInfos,
    };
  }

  static async retrieveEntityDefinitions() {
    const limit = 500;
    let entities: EntityDefinition[] = [];
    let offset = 0;
    // 件数上限を回避するため，500件ずつ取得する
    while (offset <= MAX_OFFSET) {
      const records = await EntityDefinition.retrieve((f) => ({
        select: [
          ...f.select(
            'id',
            'qualifiedApiName',
            'label',
            'detailUrl',
            'durableId',
            'isCustomSetting'
          ),
          f.subQuery('fields', (subF) => ({
            select: subF.select('id', 'qualifiedApiName', 'label', 'dataType', 'masterLabel'),
          })),
        ],
        where: [
          // カスタマイズ可能なオブジェクトのみ取得
          [{ field: f.select('isCustomizable'), val: true, op: '=' }],
        ],
        orderBy: [{ field: f.select('qualifiedApiName') }],
        offset: 0,
        limit: 500,
      }));
      entities = entities.concat(records);
      if (records.length !== limit) {
        break;
      }
      offset += limit;
    }

    return entities;
  }

  static async retrieveLayouts() {
    const queryResponse = await new Rest().toolingQuery<Layout>(
      'SELECT Id, Name, EntityDefinitionId FROM Layout'
    );

    return queryResponse.records;
  }

  static async retrievePermissionSets() {
    return PermissionSet.retrieve((f) => ({
      select: f.select('id', 'label', 'namespacePrefix'),
      // 廃止されたものは除外
      where: [[{ field: f.select('label'), val: '%廃止%', op: 'LIKE', not: true }]],
      orderBy: [{ field: f.select('label') }],
    }));
  }

  static isUmPermissionSet(permissionSet: PermissionSet) {
    return UM_NAME_SPACES.some((namespace) => permissionSet?.namespacePrefix === namespace);
  }
}
