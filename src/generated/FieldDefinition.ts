import {
  Rest,
  RestObject,
  QueryOpts,
  SObject,
  sField,
  SalesforceFieldType,
  SFLocation,
  SFieldProperties,
  FieldResolver,
  SOQLQueryParams,
  buildQuery,
  FieldProps,
  PicklistConst,
  CalendarDate,
} from 'ts-force';
import './';

export type FieldDefinitionFields = Partial<FieldProps<FieldDefinition>>;

/**
 * Generated class for FieldDefinition
 */
export class FieldDefinition extends RestObject {
  @sField({
    apiName: 'Id',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.ID,
    salesforceLabel: '項目定義 ID',
    externalId: false,
  })
  public readonly id?: string | null;
  @sField({
    apiName: 'DurableId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'デュラブル ID',
    externalId: false,
  })
  public readonly durableId?: string | null;
  @sField({
    apiName: 'QualifiedApiName',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '修飾された API 参照名',
    externalId: false,
  })
  public readonly qualifiedApiName?: string | null;
  @sField({
    apiName: 'EntityDefinitionId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'エンティティ定義 ID',
    externalId: false,
  })
  public readonly entityDefinitionId?: string | null;
  @sField({
    apiName: 'NamespacePrefix',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '名前空間プレフィックス',
    externalId: false,
  })
  public readonly namespacePrefix?: string | null;
  @sField({
    apiName: 'DeveloperName',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'API 参照名',
    externalId: false,
  })
  public readonly developerName?: string | null;
  @sField({
    apiName: 'MasterLabel',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'マスター表示ラベル',
    externalId: false,
  })
  public readonly masterLabel?: string | null;
  @sField({
    apiName: 'Label',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '表示ラベル',
    externalId: false,
  })
  public readonly label?: string | null;
  @sField({
    apiName: 'Length',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.INT,
    salesforceLabel: '長さ',
    externalId: false,
  })
  public readonly length?: number | null;
  @sField({
    apiName: 'DataType',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'データ型',
    externalId: false,
  })
  public readonly dataType?: string | null;
  @sField({
    apiName: 'ServiceDataTypeId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'データ型 ID',
    externalId: false,
  })
  public readonly serviceDataTypeId?: string | null;
  @sField({
    apiName: 'ValueTypeId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'データ型 ID',
    externalId: false,
  })
  public readonly valueTypeId?: string | null;
  @sField({
    apiName: 'ExtraTypeInfo',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '追加のデータ型情報',
    externalId: false,
  })
  public readonly extraTypeInfo?: string | null;
  @sField({
    apiName: 'IsCalculated',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は計算済み?',
    externalId: false,
  })
  public readonly isCalculated?: boolean | null;
  @sField({
    apiName: 'IsHighScaleNumber',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はハイスケールの数値?',
    externalId: false,
  })
  public readonly isHighScaleNumber?: boolean | null;
  @sField({
    apiName: 'IsHtmlFormatted',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は HTML 形式?',
    externalId: false,
  })
  public readonly isHtmlFormatted?: boolean | null;
  @sField({
    apiName: 'IsNameField',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は名前項目?',
    externalId: false,
  })
  public readonly isNameField?: boolean | null;
  @sField({
    apiName: 'IsNillable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は null 値を許容?',
    externalId: false,
  })
  public readonly isNillable?: boolean | null;
  @sField({
    apiName: 'IsWorkflowFilterable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ワークフローは絞り込み可能?',
    externalId: false,
  })
  public readonly isWorkflowFilterable?: boolean | null;
  @sField({
    apiName: 'IsCompactLayoutable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コンパクトレイアウトは有効?',
    externalId: false,
  })
  public readonly isCompactLayoutable?: boolean | null;
  @sField({
    apiName: 'Precision',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.INT,
    salesforceLabel: '精度',
    externalId: false,
  })
  public readonly precision?: number | null;
  @sField({
    apiName: 'Scale',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.INT,
    salesforceLabel: 'スケール',
    externalId: false,
  })
  public readonly scale?: number | null;
  @sField({
    apiName: 'IsFieldHistoryTracked',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目履歴を追跡中?',
    externalId: false,
  })
  public readonly isFieldHistoryTracked?: boolean | null;
  @sField({
    apiName: 'IsIndexed',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はインデックス付き?',
    externalId: false,
  })
  public readonly isIndexed?: boolean | null;
  @sField({
    apiName: 'IsApiFilterable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は絞り込み可能?',
    externalId: false,
  })
  public readonly isApiFilterable?: boolean | null;
  @sField({
    apiName: 'IsApiSortable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は並び替え可能?',
    externalId: false,
  })
  public readonly isApiSortable?: boolean | null;
  @sField({
    apiName: 'IsListFilterable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はリストで絞り込み可能?',
    externalId: false,
  })
  public readonly isListFilterable?: boolean | null;
  @sField({
    apiName: 'IsListSortable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はリストで並び替え可能?',
    externalId: false,
  })
  public readonly isListSortable?: boolean | null;
  @sField({
    apiName: 'IsApiGroupable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はグループ化可能?',
    externalId: false,
  })
  public readonly isApiGroupable?: boolean | null;
  @sField({
    apiName: 'IsListVisible',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目はリストの表示対象?',
    externalId: false,
  })
  public readonly isListVisible?: boolean | null;
  @sField({
    apiName: 'ControllingFieldDefinitionId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '項目定義 ID',
    externalId: false,
  })
  public readonly controllingFieldDefinitionId?: string | null;
  @sField({
    apiName: 'LastModifiedDate',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.DATETIME,
    salesforceLabel: '最終更新日',
    externalId: false,
  })
  public readonly lastModifiedDate?: Date | null;
  @sField({
    apiName: 'LastModifiedById',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'ユーザー ID',
    externalId: false,
  })
  public readonly lastModifiedById?: string | null;
  @sField({
    apiName: 'PublisherId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'パブリッシャー ID',
    externalId: false,
  })
  public readonly publisherId?: string | null;
  @sField({
    apiName: 'RunningUserFieldAccessId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'ユーザー項目アクセス ID',
    externalId: false,
  })
  public readonly runningUserFieldAccessId?: string | null;
  @sField({
    apiName: 'RelationshipName',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'リレーション名',
    externalId: false,
  })
  public readonly relationshipName?: string | null;
  @sField({
    apiName: 'ReferenceTo',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    // TODO:SalesforceFieldType.COMPLEXVALUEを使用する場合にTSCにてエラーとなる
    salesforceType: SalesforceFieldType.ID,
    salesforceLabel: 'リレーションで参照されるエンティティ',
    externalId: false,
  })
  public readonly referenceTo?: string | null;
  @sField({
    apiName: 'ReferenceTargetField',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '外部キーが参照するエンティティの対象項目',
    externalId: false,
  })
  public readonly referenceTargetField?: string | null;
  @sField({
    apiName: 'IsCompound',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目は複合項目?',
    externalId: false,
  })
  public readonly isCompound?: boolean | null;
  @sField({
    apiName: 'IsSearchPrefilterable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '項目検索は事前絞り込み可能?',
    externalId: false,
  })
  public readonly isSearchPrefilterable?: boolean | null;
  @sField({
    apiName: 'IsPolymorphicForeignKey',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ForeignKey はポリモーフィック?',
    externalId: false,
  })
  public readonly isPolymorphicForeignKey?: boolean | null;
  @sField({
    apiName: 'BusinessOwnerId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'ビジネス所有者 ID',
    externalId: false,
  })
  public readonly businessOwnerId?: string | null;
  @sField({
    apiName: 'BusinessStatus',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.PICKLIST,
    salesforceLabel: '項目の利用状況',
    externalId: false,
  })
  public readonly businessStatus?: string | null;
  @sField({
    apiName: 'SecurityClassification',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.PICKLIST,
    salesforceLabel: 'データ機密度',
    externalId: false,
  })
  public readonly securityClassification?: string | null;
  @sField({
    apiName: 'ComplianceGroup',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.MULTIPICKLIST,
    salesforceLabel: 'コンプライアンス分類',
    externalId: false,
  })
  public readonly complianceGroup?: string[] | null;
  @sField({
    apiName: 'Description',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.TEXTAREA,
    salesforceLabel: '説明',
    externalId: false,
  })
  public readonly description?: string | null;

  constructor(fields?: FieldDefinitionFields, restInstance?: Rest) {
    super('FieldDefinition', restInstance);
    this.id = void 0;
    this.durableId = void 0;
    this.qualifiedApiName = void 0;
    this.entityDefinitionId = void 0;
    this.namespacePrefix = void 0;
    this.developerName = void 0;
    this.masterLabel = void 0;
    this.label = void 0;
    this.length = void 0;
    this.dataType = void 0;
    this.serviceDataTypeId = void 0;
    this.valueTypeId = void 0;
    this.extraTypeInfo = void 0;
    this.isCalculated = void 0;
    this.isHighScaleNumber = void 0;
    this.isHtmlFormatted = void 0;
    this.isNameField = void 0;
    this.isNillable = void 0;
    this.isWorkflowFilterable = void 0;
    this.isCompactLayoutable = void 0;
    this.precision = void 0;
    this.scale = void 0;
    this.isFieldHistoryTracked = void 0;
    this.isIndexed = void 0;
    this.isApiFilterable = void 0;
    this.isApiSortable = void 0;
    this.isListFilterable = void 0;
    this.isListSortable = void 0;
    this.isApiGroupable = void 0;
    this.isListVisible = void 0;
    this.controllingFieldDefinitionId = void 0;
    this.lastModifiedDate = void 0;
    this.lastModifiedById = void 0;
    this.publisherId = void 0;
    this.runningUserFieldAccessId = void 0;
    this.relationshipName = void 0;
    this.referenceTo = void 0;
    this.referenceTargetField = void 0;
    this.isCompound = void 0;
    this.isSearchPrefilterable = void 0;
    this.isPolymorphicForeignKey = void 0;
    this.businessOwnerId = void 0;
    this.businessStatus = void 0;
    this.securityClassification = void 0;
    this.complianceGroup = void 0;
    this.description = void 0;
    this.__UUID = FieldDefinition.__UUID;
    this.initObject(fields);
    return new Proxy(this, this.safeUpdateProxyHandler);
  }

  public static API_NAME: 'FieldDefinition' = 'FieldDefinition';
  public readonly _TYPE_: 'FieldDefinition' = 'FieldDefinition';
  public static __UUID = Symbol();
  private static _fields: { [P in keyof FieldProps<FieldDefinition>]: SFieldProperties };

  public static get FIELDS() {
    return (this._fields = this._fields
      ? this._fields
      : FieldDefinition.getPropertiesMeta<FieldProps<FieldDefinition>, FieldDefinition>(
          FieldDefinition
        ));
  }

  public static async retrieve(
    qryParam: ((fields: FieldResolver<FieldDefinition>) => SOQLQueryParams) | string,
    opts?: QueryOpts
  ): Promise<FieldDefinition[]> {
    const qry = typeof qryParam === 'function' ? buildQuery(FieldDefinition, qryParam) : qryParam;
    return await RestObject.query<FieldDefinition>(FieldDefinition, qry, opts);
  }

  public static fromSFObject(sob: SObject): FieldDefinition {
    return new FieldDefinition().mapFromQuery(sob);
  }
}
