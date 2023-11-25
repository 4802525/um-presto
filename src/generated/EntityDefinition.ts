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
import { FieldDefinition } from './';

export type EntityDefinitionFields = Partial<FieldProps<EntityDefinition>>;

/**
 * Generated class for EntityDefinition
 */
export class EntityDefinition extends RestObject {
  @sField({
    apiName: 'Fields',
    createable: false,
    updateable: false,
    required: false,
    reference: () => {
      return FieldDefinition;
    },
    childRelationship: true,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'Fields',
    externalId: false,
  })
  public fields?: FieldDefinition[];
  @sField({
    apiName: 'Id',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.ID,
    salesforceLabel: 'エンティティ定義 ID',
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
    apiName: 'PluralLabel',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '表示ラベル(複数形)',
    externalId: false,
  })
  public readonly pluralLabel?: string | null;
  @sField({
    apiName: 'DefaultCompactLayoutId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'コンパクトレイアウト ID',
    externalId: false,
  })
  public readonly defaultCompactLayoutId?: string | null;
  @sField({
    apiName: 'IsCustomizable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタマイズ可能?',
    externalId: false,
  })
  public readonly isCustomizable?: boolean | null;
  @sField({
    apiName: 'IsApexTriggerable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Apex トリガー可能?',
    externalId: false,
  })
  public readonly isApexTriggerable?: boolean | null;
  @sField({
    apiName: 'IsWorkflowEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ワークフローは有効?',
    externalId: false,
  })
  public readonly isWorkflowEnabled?: boolean | null;
  @sField({
    apiName: 'IsProcessEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '承認プロセスは有効?',
    externalId: false,
  })
  public readonly isProcessEnabled?: boolean | null;
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
    apiName: 'KeyPrefix',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'キープレフィックス',
    externalId: false,
  })
  public readonly keyPrefix?: string | null;
  @sField({
    apiName: 'IsCustomSetting',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタム設定?',
    externalId: false,
  })
  public readonly isCustomSetting?: boolean | null;
  @sField({
    apiName: 'IsDeprecatedAndHidden',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '非推奨および非表示?',
    externalId: false,
  })
  public readonly isDeprecatedAndHidden?: boolean | null;
  @sField({
    apiName: 'IsReplicateable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '複製可能?',
    externalId: false,
  })
  public readonly isReplicateable?: boolean | null;
  @sField({
    apiName: 'IsRetrieveable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '取得可能?',
    externalId: false,
  })
  public readonly isRetrieveable?: boolean | null;
  @sField({
    apiName: 'IsSearchLayoutable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '検索レイアウト可能?',
    externalId: false,
  })
  public readonly isSearchLayoutable?: boolean | null;
  @sField({
    apiName: 'IsSearchable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '検索可能?',
    externalId: false,
  })
  public readonly isSearchable?: boolean | null;
  @sField({
    apiName: 'IsTriggerable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トリガー可能?',
    externalId: false,
  })
  public readonly isTriggerable?: boolean | null;
  @sField({
    apiName: 'IsIdEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ID は有効?',
    externalId: false,
  })
  public readonly isIdEnabled?: boolean | null;
  @sField({
    apiName: 'IsEverCreatable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API で作成可能?',
    externalId: false,
  })
  public readonly isEverCreatable?: boolean | null;
  @sField({
    apiName: 'IsEverUpdatable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API で更新可能?',
    externalId: false,
  })
  public readonly isEverUpdatable?: boolean | null;
  @sField({
    apiName: 'IsEverDeletable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API で削除可能?',
    externalId: false,
  })
  public readonly isEverDeletable?: boolean | null;
  @sField({
    apiName: 'IsFeedEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フィードが有効?',
    externalId: false,
  })
  public readonly isFeedEnabled?: boolean | null;
  @sField({
    apiName: 'IsQueryable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'クエリ可能',
    externalId: false,
  })
  public readonly isQueryable?: boolean | null;
  @sField({
    apiName: 'IsMruEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'MRU リスト機能はこのオブジェクトで有効?',
    externalId: false,
  })
  public readonly isMruEnabled?: boolean | null;
  @sField({
    apiName: 'DetailUrl',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.URL,
    salesforceLabel: '詳細 URL',
    externalId: false,
  })
  public readonly detailUrl?: string | null;
  @sField({
    apiName: 'EditUrl',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.URL,
    salesforceLabel: 'URL の編集',
    externalId: false,
  })
  public readonly editUrl?: string | null;
  @sField({
    apiName: 'NewUrl',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.URL,
    salesforceLabel: '新規 URL',
    externalId: false,
  })
  public readonly newUrl?: string | null;
  @sField({
    apiName: 'EditDefinitionUrl',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.URL,
    salesforceLabel: '定義 URL を編集',
    externalId: false,
  })
  public readonly editDefinitionUrl?: string | null;
  @sField({
    apiName: 'HelpSettingPageName',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'ヘルプ設定ページ名',
    externalId: false,
  })
  public readonly helpSettingPageName?: string | null;
  @sField({
    apiName: 'HelpSettingPageUrl',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.URL,
    salesforceLabel: 'ヘルプ設定ページ URL',
    externalId: false,
  })
  public readonly helpSettingPageUrl?: string | null;
  @sField({
    apiName: 'RunningUserEntityAccessId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'ユーザーエンティティアクセス ID',
    externalId: false,
  })
  public readonly runningUserEntityAccessId?: string | null;
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
    apiName: 'IsLayoutable',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レイアウトは有効?',
    externalId: false,
  })
  public readonly isLayoutable?: boolean | null;
  @sField({
    apiName: 'RecordTypesSupported',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.COMPLEXVALUE,
    salesforceLabel: 'サポートされているレコードタイプ',
    externalId: false,
  })
  public readonly recordTypesSupported?: string | null;
  @sField({
    apiName: 'InternalSharingModel',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.PICKLIST,
    salesforceLabel: '内部共有モデル',
    externalId: false,
  })
  public readonly internalSharingModel?: string | null;
  @sField({
    apiName: 'ExternalSharingModel',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.PICKLIST,
    salesforceLabel: '外部共有モデル',
    externalId: false,
  })
  public readonly externalSharingModel?: string | null;
  @sField({
    apiName: 'HasSubtypes',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'サブ種別あり?',
    externalId: false,
  })
  public readonly hasSubtypes?: boolean | null;
  @sField({
    apiName: 'IsSubtype',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'サブタイプですか?',
    externalId: false,
  })
  public readonly isSubtype?: boolean | null;
  @sField({
    apiName: 'IsAutoActivityCaptureEnabled',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Einstein 活動キャプチャは有効?',
    externalId: false,
  })
  public readonly isAutoActivityCaptureEnabled?: boolean | null;
  @sField({
    apiName: 'IsInterface',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'インターフェースかどうか',
    externalId: false,
  })
  public readonly isInterface?: boolean | null;
  @sField({
    apiName: 'ImplementsInterfaces',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '実装されたインターフェース',
    externalId: false,
  })
  public readonly implementsInterfaces?: string | null;
  @sField({
    apiName: 'ImplementedBy',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '実装者',
    externalId: false,
  })
  public readonly implementedBy?: string | null;
  @sField({
    apiName: 'ExtendsInterfaces',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '拡張されたインターフェース',
    externalId: false,
  })
  public readonly extendsInterfaces?: string | null;
  @sField({
    apiName: 'ExtendedBy',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '拡張者',
    externalId: false,
  })
  public readonly extendedBy?: string | null;
  @sField({
    apiName: 'DefaultImplementation',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: 'デフォルトの実装',
    externalId: false,
  })
  public readonly defaultImplementation?: string | null;

  constructor(fields?: EntityDefinitionFields, restInstance?: Rest) {
    super('EntityDefinition', restInstance);
    this.fields = void 0;
    this.id = void 0;
    this.durableId = void 0;
    this.lastModifiedDate = void 0;
    this.lastModifiedById = void 0;
    this.qualifiedApiName = void 0;
    this.namespacePrefix = void 0;
    this.developerName = void 0;
    this.masterLabel = void 0;
    this.label = void 0;
    this.pluralLabel = void 0;
    this.defaultCompactLayoutId = void 0;
    this.isCustomizable = void 0;
    this.isApexTriggerable = void 0;
    this.isWorkflowEnabled = void 0;
    this.isProcessEnabled = void 0;
    this.isCompactLayoutable = void 0;
    this.keyPrefix = void 0;
    this.isCustomSetting = void 0;
    this.isDeprecatedAndHidden = void 0;
    this.isReplicateable = void 0;
    this.isRetrieveable = void 0;
    this.isSearchLayoutable = void 0;
    this.isSearchable = void 0;
    this.isTriggerable = void 0;
    this.isIdEnabled = void 0;
    this.isEverCreatable = void 0;
    this.isEverUpdatable = void 0;
    this.isEverDeletable = void 0;
    this.isFeedEnabled = void 0;
    this.isQueryable = void 0;
    this.isMruEnabled = void 0;
    this.detailUrl = void 0;
    this.editUrl = void 0;
    this.newUrl = void 0;
    this.editDefinitionUrl = void 0;
    this.helpSettingPageName = void 0;
    this.helpSettingPageUrl = void 0;
    this.runningUserEntityAccessId = void 0;
    this.publisherId = void 0;
    this.isLayoutable = void 0;
    this.recordTypesSupported = void 0;
    this.internalSharingModel = void 0;
    this.externalSharingModel = void 0;
    this.hasSubtypes = void 0;
    this.isSubtype = void 0;
    this.isAutoActivityCaptureEnabled = void 0;
    this.isInterface = void 0;
    this.implementsInterfaces = void 0;
    this.implementedBy = void 0;
    this.extendsInterfaces = void 0;
    this.extendedBy = void 0;
    this.defaultImplementation = void 0;
    this.__UUID = EntityDefinition.__UUID;
    this.initObject(fields);
    return new Proxy(this, this.safeUpdateProxyHandler);
  }

  public static API_NAME: 'EntityDefinition' = 'EntityDefinition';
  public readonly _TYPE_: 'EntityDefinition' = 'EntityDefinition';
  public static __UUID = Symbol();
  private static _fields: { [P in keyof FieldProps<EntityDefinition>]: SFieldProperties };

  public static get FIELDS() {
    return (this._fields = this._fields
      ? this._fields
      : EntityDefinition.getPropertiesMeta<FieldProps<EntityDefinition>, EntityDefinition>(
          EntityDefinition
        ));
  }

  public static async retrieve(
    qryParam: ((fields: FieldResolver<EntityDefinition>) => SOQLQueryParams) | string,
    opts?: QueryOpts
  ): Promise<EntityDefinition[]> {
    const qry = typeof qryParam === 'function' ? buildQuery(EntityDefinition, qryParam) : qryParam;
    return await RestObject.query<EntityDefinition>(EntityDefinition, qry, opts);
  }

  public static fromSFObject(sob: SObject): EntityDefinition {
    return new EntityDefinition().mapFromQuery(sob);
  }
}
