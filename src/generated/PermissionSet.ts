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

export type PermissionSetFields = Partial<FieldProps<PermissionSet>>;

/**
 * Generated class for PermissionSet
 */
export class PermissionSet extends RestObject {
  @sField({
    apiName: 'Id',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.ID,
    salesforceLabel: '権限セット ID',
    externalId: false,
  })
  public readonly id?: string | null;
  @sField({
    apiName: 'Name',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '権限セット名',
    externalId: false,
  })
  public name?: string | null;
  @sField({
    apiName: 'Label',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '権限セットラベル',
    externalId: false,
  })
  public label?: string | null;
  @sField({
    apiName: 'LicenseId',
    createable: true,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'License ID',
    externalId: false,
  })
  public licenseId?: string | null;
  @sField({
    apiName: 'ProfileId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'プロファイル ID',
    externalId: false,
  })
  public readonly profileId?: string | null;
  @sField({
    apiName: 'IsOwnedByProfile',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '所有者プロファイル',
    externalId: false,
  })
  public readonly isOwnedByProfile?: boolean | null;
  @sField({
    apiName: 'IsCustom',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタム',
    externalId: false,
  })
  public readonly isCustom?: boolean | null;
  @sField({
    apiName: 'PermissionsEmailSingle',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メールの送信',
    externalId: false,
  })
  public permissionsEmailSingle?: boolean | null;
  @sField({
    apiName: 'PermissionsEmailMass',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '一括メール送信',
    externalId: false,
  })
  public permissionsEmailMass?: boolean | null;
  @sField({
    apiName: 'PermissionsEditTask',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ToDo の編集',
    externalId: false,
  })
  public permissionsEditTask?: boolean | null;
  @sField({
    apiName: 'PermissionsEditEvent',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '行動の編集',
    externalId: false,
  })
  public permissionsEditEvent?: boolean | null;
  @sField({
    apiName: 'PermissionsExportReport',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートのエクスポート',
    externalId: false,
  })
  public permissionsExportReport?: boolean | null;
  @sField({
    apiName: 'PermissionsImportPersonal',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '個人データのインポート',
    externalId: false,
  })
  public permissionsImportPersonal?: boolean | null;
  @sField({
    apiName: 'PermissionsDataExport',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ウィークリーデータのエクスポート',
    externalId: false,
  })
  public permissionsDataExport?: boolean | null;
  @sField({
    apiName: 'PermissionsManageUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーの管理',
    externalId: false,
  })
  public permissionsManageUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsEditPublicFilters',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開リストビューの管理',
    externalId: false,
  })
  public permissionsEditPublicFilters?: boolean | null;
  @sField({
    apiName: 'PermissionsEditPublicTemplates',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Classic の公開メールテンプレートを管理',
    externalId: false,
  })
  public permissionsEditPublicTemplates?: boolean | null;
  @sField({
    apiName: 'PermissionsModifyAllData',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのデータの編集',
    externalId: false,
  })
  public permissionsModifyAllData?: boolean | null;
  @sField({
    apiName: 'PermissionsEditBillingInfo',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '請求情報の管理',
    externalId: false,
  })
  public permissionsEditBillingInfo?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCases',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ケースの管理',
    externalId: false,
  })
  public permissionsManageCases?: boolean | null;
  @sField({
    apiName: 'PermissionsMassInlineEdit',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リストからの一括編集',
    externalId: false,
  })
  public permissionsMassInlineEdit?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSolutions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開ソリューションの管理',
    externalId: false,
  })
  public permissionsManageSolutions?: boolean | null;
  @sField({
    apiName: 'PermissionsCustomizeApplication',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'アプリケーションのカスタマイズ',
    externalId: false,
  })
  public permissionsCustomizeApplication?: boolean | null;
  @sField({
    apiName: 'PermissionsEditReadonlyFields',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '参照のみ項目の編集',
    externalId: false,
  })
  public permissionsEditReadonlyFields?: boolean | null;
  @sField({
    apiName: 'PermissionsRunReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポート実行',
    externalId: false,
  })
  public permissionsRunReports?: boolean | null;
  @sField({
    apiName: 'PermissionsViewSetup',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '設定・定義を参照する',
    externalId: false,
  })
  public permissionsViewSetup?: boolean | null;
  @sField({
    apiName: 'PermissionsTransferAnyEntity',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '所有権の移行',
    externalId: false,
  })
  public permissionsTransferAnyEntity?: boolean | null;
  @sField({
    apiName: 'PermissionsNewReportBuilder',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートビルダー',
    externalId: false,
  })
  public permissionsNewReportBuilder?: boolean | null;
  @sField({
    apiName: 'PermissionsActivateContract',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '契約の有効化',
    externalId: false,
  })
  public permissionsActivateContract?: boolean | null;
  @sField({
    apiName: 'PermissionsActivateOrder',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '注文の有効化',
    externalId: false,
  })
  public permissionsActivateOrder?: boolean | null;
  @sField({
    apiName: 'PermissionsImportLeads',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リードのインポート',
    externalId: false,
  })
  public permissionsImportLeads?: boolean | null;
  @sField({
    apiName: 'PermissionsManageLeads',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リードの管理',
    externalId: false,
  })
  public permissionsManageLeads?: boolean | null;
  @sField({
    apiName: 'PermissionsTransferAnyLead',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リード所有者の移行',
    externalId: false,
  })
  public permissionsTransferAnyLead?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllData',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのデータの参照',
    externalId: false,
  })
  public permissionsViewAllData?: boolean | null;
  @sField({
    apiName: 'PermissionsEditPublicDocuments',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開ドキュメントの管理',
    externalId: false,
  })
  public permissionsEditPublicDocuments?: boolean | null;
  @sField({
    apiName: 'PermissionsViewEncryptedData',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '暗号化されたデータの参照',
    externalId: false,
  })
  public permissionsViewEncryptedData?: boolean | null;
  @sField({
    apiName: 'PermissionsEditBrandTemplates',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レターヘッドの管理',
    externalId: false,
  })
  public permissionsEditBrandTemplates?: boolean | null;
  @sField({
    apiName: 'PermissionsEditHtmlTemplates',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'HTML テンプレートの編集',
    externalId: false,
  })
  public permissionsEditHtmlTemplates?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterInternalUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter 内部ユーザー',
    externalId: false,
  })
  public permissionsChatterInternalUser?: boolean | null;
  @sField({
    apiName: 'PermissionsManageTranslation',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '翻訳の管理',
    externalId: false,
  })
  public permissionsManageTranslation?: boolean | null;
  @sField({
    apiName: 'PermissionsDeleteActivatedContract',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '有効契約の削除',
    externalId: false,
  })
  public permissionsDeleteActivatedContract?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterInviteExternalUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter に顧客を招待する',
    externalId: false,
  })
  public permissionsChatterInviteExternalUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsSendSitRequests',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '登録情報照会要求の送信',
    externalId: false,
  })
  public permissionsSendSitRequests?: boolean | null;
  @sField({
    apiName: 'PermissionsApiUserOnly',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API 限定ユーザー',
    externalId: false,
  })
  public permissionsApiUserOnly?: boolean | null;
  @sField({
    apiName: 'PermissionsManageRemoteAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '接続アプリケーションを管理する',
    externalId: false,
  })
  public permissionsManageRemoteAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsCanUseNewDashboardBuilder',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ドラッグアンドドロップ ダッシュボードビルダー',
    externalId: false,
  })
  public permissionsCanUseNewDashboardBuilder?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCategories',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カテゴリの管理',
    externalId: false,
  })
  public permissionsManageCategories?: boolean | null;
  @sField({
    apiName: 'PermissionsConvertLeads',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リードの取引の開始',
    externalId: false,
  })
  public permissionsConvertLeads?: boolean | null;
  @sField({
    apiName: 'PermissionsPasswordNeverExpires',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'パスワード無期限',
    externalId: false,
  })
  public permissionsPasswordNeverExpires?: boolean | null;
  @sField({
    apiName: 'PermissionsUseTeamReassignWizards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'チーム再割り当てウィザードの使用',
    externalId: false,
  })
  public permissionsUseTeamReassignWizards?: boolean | null;
  @sField({
    apiName: 'PermissionsEditActivatedOrders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '有効化された注文の編集',
    externalId: false,
  })
  public permissionsEditActivatedOrders?: boolean | null;
  @sField({
    apiName: 'PermissionsInstallPackaging',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'AppExchange パッケージのダウンロード',
    externalId: false,
  })
  public permissionsInstallPackaging?: boolean | null;
  @sField({
    apiName: 'PermissionsPublishPackaging',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'AppExchange パッケージのアップロード',
    externalId: false,
  })
  public permissionsPublishPackaging?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterOwnGroups',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '新規 Chatter グループの作成および所有',
    externalId: false,
  })
  public permissionsChatterOwnGroups?: boolean | null;
  @sField({
    apiName: 'PermissionsEditOppLineItemUnitPrice',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '商談商品の販売価格の編集',
    externalId: false,
  })
  public permissionsEditOppLineItemUnitPrice?: boolean | null;
  @sField({
    apiName: 'PermissionsCreatePackaging',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'AppExchange パッケージの作成',
    externalId: false,
  })
  public permissionsCreatePackaging?: boolean | null;
  @sField({
    apiName: 'PermissionsBulkApiHardDelete',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Bulk API の物理削除',
    externalId: false,
  })
  public permissionsBulkApiHardDelete?: boolean | null;
  @sField({
    apiName: 'PermissionsInboundMigrationToolsUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '変更セットのリリース',
    externalId: false,
  })
  public permissionsInboundMigrationToolsUser?: boolean | null;
  @sField({
    apiName: 'PermissionsSolutionImport',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ソリューションのインポート',
    externalId: false,
  })
  public permissionsSolutionImport?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCallCenters',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コールセンターの管理',
    externalId: false,
  })
  public permissionsManageCallCenters?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSynonyms',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'シノニムの管理',
    externalId: false,
  })
  public permissionsManageSynonyms?: boolean | null;
  @sField({
    apiName: 'PermissionsOutboundMigrationToolsUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '変更セットの作成とアップロード',
    externalId: false,
  })
  public permissionsOutboundMigrationToolsUser?: boolean | null;
  @sField({
    apiName: 'PermissionsViewContent',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ポータルのコンテンツの参照',
    externalId: false,
  })
  public permissionsViewContent?: boolean | null;
  @sField({
    apiName: 'PermissionsManageEmailClientConfig',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メールクライアント設定の管理',
    externalId: false,
  })
  public permissionsManageEmailClientConfig?: boolean | null;
  @sField({
    apiName: 'PermissionsEnableNotifications',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'アウトバウンドメッセージの送信',
    externalId: false,
  })
  public permissionsEnableNotifications?: boolean | null;
  @sField({
    apiName: 'PermissionsManageDataIntegrations',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'データインテグレーションの管理',
    externalId: false,
  })
  public permissionsManageDataIntegrations?: boolean | null;
  @sField({
    apiName: 'PermissionsDistributeFromPersWksp',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コンテンツ配信の作成',
    externalId: false,
  })
  public permissionsDistributeFromPersWksp?: boolean | null;
  @sField({
    apiName: 'PermissionsViewDataCategories',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '[設定] でデータカテゴリを表示',
    externalId: false,
  })
  public permissionsViewDataCategories?: boolean | null;
  @sField({
    apiName: 'PermissionsManageDataCategories',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'データカテゴリの管理',
    externalId: false,
  })
  public permissionsManageDataCategories?: boolean | null;
  @sField({
    apiName: 'PermissionsAuthorApex',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Apex 開発',
    externalId: false,
  })
  public permissionsAuthorApex?: boolean | null;
  @sField({
    apiName: 'PermissionsManageMobile',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'モバイル設定を管理する',
    externalId: false,
  })
  public permissionsManageMobile?: boolean | null;
  @sField({
    apiName: 'PermissionsApiEnabled',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API の有効化',
    externalId: false,
  })
  public permissionsApiEnabled?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCustomReportTypes',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタムレポートタイプの管理',
    externalId: false,
  })
  public permissionsManageCustomReportTypes?: boolean | null;
  @sField({
    apiName: 'PermissionsEditCaseComments',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ケースコメントの編集',
    externalId: false,
  })
  public permissionsEditCaseComments?: boolean | null;
  @sField({
    apiName: 'PermissionsTransferAnyCase',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ケース所有者の移行',
    externalId: false,
  })
  public permissionsTransferAnyCase?: boolean | null;
  @sField({
    apiName: 'PermissionsContentAdministrator',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce CRM Content の管理',
    externalId: false,
  })
  public permissionsContentAdministrator?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateWorkspaces',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ライブラリの作成',
    externalId: false,
  })
  public permissionsCreateWorkspaces?: boolean | null;
  @sField({
    apiName: 'PermissionsManageContentPermissions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コンテンツ権限の管理',
    externalId: false,
  })
  public permissionsManageContentPermissions?: boolean | null;
  @sField({
    apiName: 'PermissionsManageContentProperties',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コンテンツプロパティの管理',
    externalId: false,
  })
  public permissionsManageContentProperties?: boolean | null;
  @sField({
    apiName: 'PermissionsManageContentTypes',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ファイルのレコードタイプおよびレイアウトの管理',
    externalId: false,
  })
  public permissionsManageContentTypes?: boolean | null;
  @sField({
    apiName: 'PermissionsScheduleJob',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードのスケジュール',
    externalId: false,
  })
  public permissionsScheduleJob?: boolean | null;
  @sField({
    apiName: 'PermissionsManageExchangeConfig',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning Sync を管理',
    externalId: false,
  })
  public permissionsManageExchangeConfig?: boolean | null;
  @sField({
    apiName: 'PermissionsManageAnalyticSnapshots',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポート作成スナップショットを管理',
    externalId: false,
  })
  public permissionsManageAnalyticSnapshots?: boolean | null;
  @sField({
    apiName: 'PermissionsScheduleReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートのスケジュール',
    externalId: false,
  })
  public permissionsScheduleReports?: boolean | null;
  @sField({
    apiName: 'PermissionsManageBusinessHourHolidays',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '営業時間の休日の管理',
    externalId: false,
  })
  public permissionsManageBusinessHourHolidays?: boolean | null;
  @sField({
    apiName: 'PermissionsManageEntitlements',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エンタイトルメントの管理',
    externalId: false,
  })
  public permissionsManageEntitlements?: boolean | null;
  @sField({
    apiName: 'PermissionsManageDynamicDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '動的ダッシュボードの管理',
    externalId: false,
  })
  public permissionsManageDynamicDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsCustomSidebarOnAllPages',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのページにカスタムサイドバーを表示',
    externalId: false,
  })
  public permissionsCustomSidebarOnAllPages?: boolean | null;
  @sField({
    apiName: 'PermissionsManageInteraction',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フローの管理',
    externalId: false,
  })
  public permissionsManageInteraction?: boolean | null;
  @sField({
    apiName: 'PermissionsViewMyTeamsDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '私のチームのダッシュボードの参照',
    externalId: false,
  })
  public permissionsViewMyTeamsDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsModerateChatter',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter のモデレート',
    externalId: false,
  })
  public permissionsModerateChatter?: boolean | null;
  @sField({
    apiName: 'PermissionsResetPasswords',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーパスワードのリセットおよびユーザーのロック解除',
    externalId: false,
  })
  public permissionsResetPasswords?: boolean | null;
  @sField({
    apiName: 'PermissionsFlowUFLRequired',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フローユーザー機能ライセンスが必要',
    externalId: false,
  })
  public permissionsFlowUflRequired?: boolean | null;
  @sField({
    apiName: 'PermissionsCanInsertFeedSystemFields',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter フィードにシステム項目値を挿入',
    externalId: false,
  })
  public permissionsCanInsertFeedSystemFields?: boolean | null;
  @sField({
    apiName: 'PermissionsActivitiesAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '活動にアクセス',
    externalId: false,
  })
  public permissionsActivitiesAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsEmailTemplateManagement',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メールテンプレートの管理',
    externalId: false,
  })
  public permissionsEmailTemplateManagement?: boolean | null;
  @sField({
    apiName: 'PermissionsEmailAdministration',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メール管理',
    externalId: false,
  })
  public permissionsEmailAdministration?: boolean | null;
  @sField({
    apiName: 'PermissionsManageChatterMessages',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter メッセージとダイレクトメッセージを管理',
    externalId: false,
  })
  public permissionsManageChatterMessages?: boolean | null;
  @sField({
    apiName: 'PermissionsAllowEmailIC',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メールベースの ID 検証オプション',
    externalId: false,
  })
  public permissionsAllowEmailIc?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterFileLink',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開リンクの作成',
    externalId: false,
  })
  public permissionsChatterFileLink?: boolean | null;
  @sField({
    apiName: 'PermissionsForceTwoFactor',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーインターフェースログインの多要素認証',
    externalId: false,
  })
  public permissionsForceTwoFactor?: boolean | null;
  @sField({
    apiName: 'PermissionsViewEventLogFiles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'イベントログファイルを参照',
    externalId: false,
  })
  public permissionsViewEventLogFiles?: boolean | null;
  @sField({
    apiName: 'PermissionsManageNetworks',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エクスペリエンスを作成および設定',
    externalId: false,
  })
  public permissionsManageNetworks?: boolean | null;
  @sField({
    apiName: 'PermissionsManageAuthProviders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '認証プロバイダーの管理',
    externalId: false,
  })
  public permissionsManageAuthProviders?: boolean | null;
  @sField({
    apiName: 'PermissionsRunFlow',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フローを実行',
    externalId: false,
  })
  public permissionsRunFlow?: boolean | null;
  @sField({
    apiName: 'PermissionsViewGlobalHeader',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'グローバルヘッダーを参照',
    externalId: false,
  })
  public permissionsViewGlobalHeader?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateCustomizeDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードの作成とカスタマイズ',
    externalId: false,
  })
  public permissionsCreateCustomizeDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateDashboardFolders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードフォルダーを作成',
    externalId: false,
  })
  public permissionsCreateDashboardFolders?: boolean | null;
  @sField({
    apiName: 'PermissionsViewPublicDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開フォルダーのダッシュボードを参照',
    externalId: false,
  })
  public permissionsViewPublicDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsManageDashbdsInPubFolders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開フォルダーのダッシュボードを管理',
    externalId: false,
  })
  public permissionsManageDashbdsInPubFolders?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateCustomizeReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートの作成とカスタマイズ',
    externalId: false,
  })
  public permissionsCreateCustomizeReports?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateReportFolders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートフォルダーを作成',
    externalId: false,
  })
  public permissionsCreateReportFolders?: boolean | null;
  @sField({
    apiName: 'PermissionsViewPublicReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開フォルダーのレポートを参照',
    externalId: false,
  })
  public permissionsViewPublicReports?: boolean | null;
  @sField({
    apiName: 'PermissionsManageReportsInPubFolders',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開フォルダーのレポートを管理',
    externalId: false,
  })
  public permissionsManageReportsInPubFolders?: boolean | null;
  @sField({
    apiName: 'PermissionsEditMyDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '私のダッシュボードを編集',
    externalId: false,
  })
  public permissionsEditMyDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsEditMyReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '私のレポートを編集',
    externalId: false,
  })
  public permissionsEditMyReports?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのユーザーの参照',
    externalId: false,
  })
  public permissionsViewAllUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsConnectOrgToEnvironmentHub',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '環境ハブに組織を接続',
    externalId: false,
  })
  public permissionsConnectOrgToEnvironmentHub?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateCustomizeFilters',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リストビューを作成およびカスタマイズ',
    externalId: false,
  })
  public permissionsCreateCustomizeFilters?: boolean | null;
  @sField({
    apiName: 'PermissionsContentHubUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Files Connect (クラウド)',
    externalId: false,
  })
  public permissionsContentHubUser?: boolean | null;
  @sField({
    apiName: 'PermissionsModerateNetworkFeeds',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトのフィードをモデレート',
    externalId: false,
  })
  public permissionsModerateNetworkFeeds?: boolean | null;
  @sField({
    apiName: 'PermissionsModerateNetworkFiles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトのファイルをモデレート',
    externalId: false,
  })
  public permissionsModerateNetworkFiles?: boolean | null;
  @sField({
    apiName: 'PermissionsGovernNetworks',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エクスペリエンスを管理する',
    externalId: false,
  })
  public permissionsGovernNetworks?: boolean | null;
  @sField({
    apiName: 'PermissionsSalesConsole',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'セールスコンソール',
    externalId: false,
  })
  public permissionsSalesConsole?: boolean | null;
  @sField({
    apiName: 'PermissionsTwoFactorApi',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API ログインの多要素認証',
    externalId: false,
  })
  public permissionsTwoFactorApi?: boolean | null;
  @sField({
    apiName: 'PermissionsDeleteTopics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トピックを削除',
    externalId: false,
  })
  public permissionsDeleteTopics?: boolean | null;
  @sField({
    apiName: 'PermissionsEditTopics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トピックを編集',
    externalId: false,
  })
  public permissionsEditTopics?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateTopics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トピックを作成',
    externalId: false,
  })
  public permissionsCreateTopics?: boolean | null;
  @sField({
    apiName: 'PermissionsAssignTopics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トピックを割り当てる',
    externalId: false,
  })
  public permissionsAssignTopics?: boolean | null;
  @sField({
    apiName: 'PermissionsIdentityEnabled',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Identity 機能を使用',
    externalId: false,
  })
  public permissionsIdentityEnabled?: boolean | null;
  @sField({
    apiName: 'PermissionsIdentityConnect',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Identity Connect を使用',
    externalId: false,
  })
  public permissionsIdentityConnect?: boolean | null;
  @sField({
    apiName: 'PermissionsContentWorkspaces',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ライブラリへのアクセス',
    externalId: false,
  })
  public permissionsContentWorkspaces?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateWorkBadgeDefinition',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタムバッジ定義を作成',
    externalId: false,
  })
  public permissionsCreateWorkBadgeDefinition?: boolean | null;
  @sField({
    apiName: 'PermissionsCustomMobileAppsAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタムモバイルアプリケーションにアクセス',
    externalId: false,
  })
  public permissionsCustomMobileAppsAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsViewHelpLink',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ヘルプリンクを参照',
    externalId: false,
  })
  public permissionsViewHelpLink?: boolean | null;
  @sField({
    apiName: 'PermissionsManageProfilesPermissionsets',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'プロファイルおよび権限セットを管理',
    externalId: false,
  })
  public permissionsManageProfilesPermissionsets?: boolean | null;
  @sField({
    apiName: 'PermissionsAssignPermissionSets',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '権限セットの割り当て',
    externalId: false,
  })
  public permissionsAssignPermissionSets?: boolean | null;
  @sField({
    apiName: 'PermissionsManageRoles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ロールを管理',
    externalId: false,
  })
  public permissionsManageRoles?: boolean | null;
  @sField({
    apiName: 'PermissionsManageIpAddresses',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'IP アドレスを管理',
    externalId: false,
  })
  public permissionsManageIpAddresses?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSharing',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '共有を管理',
    externalId: false,
  })
  public permissionsManageSharing?: boolean | null;
  @sField({
    apiName: 'PermissionsManageInternalUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '内部ユーザーを管理',
    externalId: false,
  })
  public permissionsManageInternalUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsManagePasswordPolicies',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'パスワードポリシーを管理',
    externalId: false,
  })
  public permissionsManagePasswordPolicies?: boolean | null;
  @sField({
    apiName: 'PermissionsManageLoginAccessPolicies',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ログインアクセスポリシーを管理',
    externalId: false,
  })
  public permissionsManageLoginAccessPolicies?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCustomPermissions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタム権限を管理',
    externalId: false,
  })
  public permissionsManageCustomPermissions?: boolean | null;
  @sField({
    apiName: 'PermissionsCanVerifyComment',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Chatter の質問への回答の確認',
    externalId: false,
  })
  public permissionsCanVerifyComment?: boolean | null;
  @sField({
    apiName: 'PermissionsManageUnlistedGroups',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '「リストに記載しない」グループを管理',
    externalId: false,
  })
  public permissionsManageUnlistedGroups?: boolean | null;
  @sField({
    apiName: 'PermissionsStdAutomaticActivityCapture',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Einstein 活動キャプチャの標準を使用',
    externalId: false,
  })
  public permissionsStdAutomaticActivityCapture?: boolean | null;
  @sField({
    apiName: 'PermissionsShareFilesWithNetworks',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトのユーザーとのファイルの共有',
    externalId: false,
  })
  public permissionsShareFilesWithNetworks?: boolean | null;
  @sField({
    apiName: 'PermissionsManageTwoFactor',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'API で多要素認証を管理',
    externalId: false,
  })
  public permissionsManageTwoFactor?: boolean | null;
  @sField({
    apiName: 'PermissionsLightningExperienceUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning Experience ユーザー',
    externalId: false,
  })
  public permissionsLightningExperienceUser?: boolean | null;
  @sField({
    apiName: 'PermissionsConfigCustomRecs',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタムおすすめの設定',
    externalId: false,
  })
  public permissionsConfigCustomRecs?: boolean | null;
  @sField({
    apiName: 'PermissionsSubmitMacrosAllowed',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーが元に戻せないマクロを管理',
    externalId: false,
  })
  public permissionsSubmitMacrosAllowed?: boolean | null;
  @sField({
    apiName: 'PermissionsBulkMacrosAllowed',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '複数のレコードに対してマクロを実行',
    externalId: false,
  })
  public permissionsBulkMacrosAllowed?: boolean | null;
  @sField({
    apiName: 'PermissionsModerateNetworkMessages',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトの Chatter メッセージをモデレート',
    externalId: false,
  })
  public permissionsModerateNetworkMessages?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSessionPermissionSets',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'セッション権限セットの有効化を管理',
    externalId: false,
  })
  public permissionsManageSessionPermissionSets?: boolean | null;
  @sField({
    apiName: 'PermissionsSendAnnouncementEmails',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'お知らせメールを送信',
    externalId: false,
  })
  public permissionsSendAnnouncementEmails?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterEditOwnPost',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '自分の投稿を編集',
    externalId: false,
  })
  public permissionsChatterEditOwnPost?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterEditOwnRecordPost',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '自分の所有レコードへの投稿を編集',
    externalId: false,
  })
  public permissionsChatterEditOwnRecordPost?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSandboxes',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Sandbox を管理',
    externalId: false,
  })
  public permissionsManageSandboxes?: boolean | null;
  @sField({
    apiName: 'PermissionsAutomaticActivityCapture',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Einstein 活動キャプチャを使用',
    externalId: false,
  })
  public permissionsAutomaticActivityCapture?: boolean | null;
  @sField({
    apiName: 'PermissionsImportCustomObjects',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタムオブジェクトのインポート',
    externalId: false,
  })
  public permissionsImportCustomObjects?: boolean | null;
  @sField({
    apiName: 'PermissionsDelegatedTwoFactor',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーインターフェースで多要素認証を管理',
    externalId: false,
  })
  public permissionsDelegatedTwoFactor?: boolean | null;
  @sField({
    apiName: 'PermissionsChatterComposeUiCodesnippet',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'UI からのコードスニペットの挿入を許可',
    externalId: false,
  })
  public permissionsChatterComposeUiCodesnippet?: boolean | null;
  @sField({
    apiName: 'PermissionsSelectFilesFromSalesforce',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce からファイルを選択',
    externalId: false,
  })
  public permissionsSelectFilesFromSalesforce?: boolean | null;
  @sField({
    apiName: 'PermissionsModerateNetworkUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトのユーザーをモデレート',
    externalId: false,
  })
  public permissionsModerateNetworkUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsMergeTopics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'トピックのマージ',
    externalId: false,
  })
  public permissionsMergeTopics?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeToLightningReports',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートを登録',
    externalId: false,
  })
  public permissionsSubscribeToLightningReports?: boolean | null;
  @sField({
    apiName: 'PermissionsManagePvtRptsAndDashbds',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべての非公開レポートおよびダッシュボードを管理',
    externalId: false,
  })
  public permissionsManagePvtRptsAndDashbds?: boolean | null;
  @sField({
    apiName: 'PermissionsAllowLightningLogin',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning Login ユーザー',
    externalId: false,
  })
  public permissionsAllowLightningLogin?: boolean | null;
  @sField({
    apiName: 'PermissionsCampaignInfluence2',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'キャンペーンインフルエンス',
    externalId: false,
  })
  public permissionsCampaignInfluence2?: boolean | null;
  @sField({
    apiName: 'PermissionsViewDataAssessment',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'データ評価の参照アクセス権',
    externalId: false,
  })
  public permissionsViewDataAssessment?: boolean | null;
  @sField({
    apiName: 'PermissionsRemoveDirectMessageMembers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダイレクトメッセージから人を削除',
    externalId: false,
  })
  public permissionsRemoveDirectMessageMembers?: boolean | null;
  @sField({
    apiName: 'PermissionsCanApproveFeedPost',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フィード投稿とコメントを承認可能',
    externalId: false,
  })
  public permissionsCanApproveFeedPost?: boolean | null;
  @sField({
    apiName: 'PermissionsAddDirectMessageMembers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダイレクトメッセージに人を追加',
    externalId: false,
  })
  public permissionsAddDirectMessageMembers?: boolean | null;
  @sField({
    apiName: 'PermissionsAllowViewEditConvertedLeads',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '取引開始済みのリードを表示および編集',
    externalId: false,
  })
  public permissionsAllowViewEditConvertedLeads?: boolean | null;
  @sField({
    apiName: 'PermissionsShowCompanyNameAsUserBadge',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'サイトロールとして会社名を表示',
    externalId: false,
  })
  public permissionsShowCompanyNameAsUserBadge?: boolean | null;
  @sField({
    apiName: 'PermissionsAccessCMC',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エクスペリエンス管理にアクセス',
    externalId: false,
  })
  public permissionsAccessCmc?: boolean | null;
  @sField({
    apiName: 'PermissionsViewHealthCheck',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '状態チェックを表示',
    externalId: false,
  })
  public permissionsViewHealthCheck?: boolean | null;
  @sField({
    apiName: 'PermissionsManageHealthCheck',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '状態チェックを管理',
    externalId: false,
  })
  public permissionsManageHealthCheck?: boolean | null;
  @sField({
    apiName: 'PermissionsPackaging2',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '第二世代パッケージの作成と更新',
    externalId: false,
  })
  public permissionsPackaging2?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCertificates',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '証明書を管理',
    externalId: false,
  })
  public permissionsManageCertificates?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateReportInLightning',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートビルダー (Lightning Experience)',
    externalId: false,
  })
  public permissionsCreateReportInLightning?: boolean | null;
  @sField({
    apiName: 'PermissionsPreventClassicExperience',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce Classic に切り替えるオプションを非表示',
    externalId: false,
  })
  public permissionsPreventClassicExperience?: boolean | null;
  @sField({
    apiName: 'PermissionsHideReadByList',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '[表示先] リストを非表示',
    externalId: false,
  })
  public permissionsHideReadByList?: boolean | null;
  @sField({
    apiName: 'PermissionsListEmailSend',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リストメールの送信を許可',
    externalId: false,
  })
  public permissionsListEmailSend?: boolean | null;
  @sField({
    apiName: 'PermissionsFeedPinning',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'フィードでの投稿の固定',
    externalId: false,
  })
  public permissionsFeedPinning?: boolean | null;
  @sField({
    apiName: 'PermissionsChangeDashboardColors',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードの色を変更',
    externalId: false,
  })
  public permissionsChangeDashboardColors?: boolean | null;
  @sField({
    apiName: 'PermissionsManageRecommendationStrategies',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Next Best Action 戦略を管理',
    externalId: false,
  })
  public permissionsManageRecommendationStrategies?: boolean | null;
  @sField({
    apiName: 'PermissionsManagePropositions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Next Best Action Recommendations を管理',
    externalId: false,
  })
  public permissionsManagePropositions?: boolean | null;
  @sField({
    apiName: 'PermissionsCloseConversations',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '会話スレッドを閉じる',
    externalId: false,
  })
  public permissionsCloseConversations?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeReportRolesGrps',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートの登録: グループおよびロールへの送信',
    externalId: false,
  })
  public permissionsSubscribeReportRolesGrps?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeDashboardRolesGrps',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードの登録: グループおよびロールへの送信',
    externalId: false,
  })
  public permissionsSubscribeDashboardRolesGrps?: boolean | null;
  @sField({
    apiName: 'PermissionsUseWebLink',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタマイズしたアクションへのアクセスを許可',
    externalId: false,
  })
  public permissionsUseWebLink?: boolean | null;
  @sField({
    apiName: 'PermissionsHasUnlimitedNBAExecutions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーの Next Best Action 戦略実行数の制限なし',
    externalId: false,
  })
  public permissionsHasUnlimitedNbaExecutions?: boolean | null;
  @sField({
    apiName: 'PermissionsViewOnlyEmbeddedAppUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '参照のみライセンス付きのテンプレートとアプリケーションにアクセス',
    externalId: false,
  })
  public permissionsViewOnlyEmbeddedAppUser?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllActivities',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべての活動を表示',
    externalId: false,
  })
  public permissionsViewAllActivities?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeReportToOtherUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートを登録: 受信者を追加',
    externalId: false,
  })
  public permissionsSubscribeReportToOtherUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsLightningConsoleAllowedForUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning コンソールユーザー',
    externalId: false,
  })
  public permissionsLightningConsoleAllowedForUser?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeReportsRunAsUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'レポートを登録: 実行ユーザーを設定',
    externalId: false,
  })
  public permissionsSubscribeReportsRunAsUser?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeToLightningDashboards',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードへの登録',
    externalId: false,
  })
  public permissionsSubscribeToLightningDashboards?: boolean | null;
  @sField({
    apiName: 'PermissionsSubscribeDashboardToOtherUsers',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ダッシュボードの登録: 受信者を追加',
    externalId: false,
  })
  public permissionsSubscribeDashboardToOtherUsers?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateLtngTempInPub',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '公開 Lightning メールテンプレートを管理',
    externalId: false,
  })
  public permissionsCreateLtngTempInPub?: boolean | null;
  @sField({
    apiName: 'PermissionsTransactionalEmailSend',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '営業以外のメールを送信',
    externalId: false,
  })
  public permissionsTransactionalEmailSend?: boolean | null;
  @sField({
    apiName: 'PermissionsViewPrivateStaticResources',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '非公開の静的リソースを表示',
    externalId: false,
  })
  public permissionsViewPrivateStaticResources?: boolean | null;
  @sField({
    apiName: 'PermissionsViewCustomerSentiment',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '顧客インサイトを表示',
    externalId: false,
  })
  public permissionsViewCustomerSentiment?: boolean | null;
  @sField({
    apiName: 'PermissionsCreateLtngTempFolder',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning メールテンプレートのフォルダーを作成',
    externalId: false,
  })
  public permissionsCreateLtngTempFolder?: boolean | null;
  @sField({
    apiName: 'PermissionsApexRestServices',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Apex REST サービス',
    externalId: false,
  })
  public permissionsApexRestServices?: boolean | null;
  @sField({
    apiName: 'PermissionsEnableCommunityAppLauncher',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud サイトでアプリケーションランチャーを表示',
    externalId: false,
  })
  public permissionsEnableCommunityAppLauncher?: boolean | null;
  @sField({
    apiName: 'PermissionsGiveRecognitionBadge',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エクスペリエンスビルダーサイトのレコグニションバッジの付与',
    externalId: false,
  })
  public permissionsGiveRecognitionBadge?: boolean | null;
  @sField({
    apiName: 'PermissionsAllowObjectDetection',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーが予測で Object Detection を使用することを許可します (廃止)。',
    externalId: false,
  })
  public permissionsAllowObjectDetection?: boolean | null;
  @sField({
    apiName: 'PermissionsSalesforceIQInternal',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'クラウドインテグレーションユーザーに SalesforceIQ 内部操作の実行を許可',
    externalId: false,
  })
  public permissionsSalesforceIqInternal?: boolean | null;
  @sField({
    apiName: 'PermissionsUseMySearch',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Einstein Search',
    externalId: false,
  })
  public permissionsUseMySearch?: boolean | null;
  @sField({
    apiName: 'PermissionsLtngPromoReserved01UserPerm',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce Classic にとどまる',
    externalId: false,
  })
  public permissionsLtngPromoReserved01UserPerm?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSubscriptions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'CRM Analytics サブスクリプションの管理',
    externalId: false,
  })
  public permissionsManageSubscriptions?: boolean | null;
  @sField({
    apiName: 'PermissionsAllowObjectDetectionTraining',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel:
      'ユーザーが Object Detection のモデルをトレーニングおよび生成することを許可します (廃止)。',
    externalId: false,
  })
  public permissionsAllowObjectDetectionTraining?: boolean | null;
  @sField({
    apiName: 'PermissionsManageSurveys',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'アンケートを管理',
    externalId: false,
  })
  public permissionsManageSurveys?: boolean | null;
  @sField({
    apiName: 'PermissionsUseAssistantDialog',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すぐにアクション可能な結果',
    externalId: false,
  })
  public permissionsUseAssistantDialog?: boolean | null;
  @sField({
    apiName: 'PermissionsUseQuerySuggestions',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '自然言語検索',
    externalId: false,
  })
  public permissionsUseQuerySuggestions?: boolean | null;
  @sField({
    apiName: 'PermissionsViewRoles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ロールおよびロール階層を表示',
    externalId: false,
  })
  public permissionsViewRoles?: boolean | null;
  @sField({
    apiName: 'PermissionsLMOutboundMessagingUserPerm',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'エージェントが開始するアウトバウントメッセージング',
    externalId: false,
  })
  public permissionsLmOutboundMessagingUserPerm?: boolean | null;
  @sField({
    apiName: 'PermissionsModifyDataClassification',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'データ分類を変更',
    externalId: false,
  })
  public permissionsModifyDataClassification?: boolean | null;
  @sField({
    apiName: 'PermissionsPrivacyDataAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'プライバシーデータへのユーザーのアクセスを許可',
    externalId: false,
  })
  public permissionsPrivacyDataAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsQueryAllFiles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのファイルをクエリ',
    externalId: false,
  })
  public permissionsQueryAllFiles?: boolean | null;
  @sField({
    apiName: 'PermissionsModifyMetadata',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メタデータ API 関数を使用したメタデータの変更',
    externalId: false,
  })
  public permissionsModifyMetadata?: boolean | null;
  @sField({
    apiName: 'PermissionsManageCMS',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'CMS ワークスペースおよびチャネルを作成',
    externalId: false,
  })
  public permissionsManageCms?: boolean | null;
  @sField({
    apiName: 'PermissionsSandboxTestingInCommunityApp',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Experience Cloud 向け Mobile Publisher で Sandbox をテスト',
    externalId: false,
  })
  public permissionsSandboxTestingInCommunityApp?: boolean | null;
  @sField({
    apiName: 'PermissionsCanEditPrompts',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'プロンプトを管理',
    externalId: false,
  })
  public permissionsCanEditPrompts?: boolean | null;
  @sField({
    apiName: 'PermissionsViewUserPII',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '非表示の項目データを参照',
    externalId: false,
  })
  public permissionsViewUserPii?: boolean | null;
  @sField({
    apiName: 'PermissionsManageHubConnections',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Customer 360 Data Manager への組織の接続',
    externalId: false,
  })
  public permissionsManageHubConnections?: boolean | null;
  @sField({
    apiName: 'PermissionsB2BMarketingAnalyticsUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'B2B Marketing Analytics アプリケーションを作成',
    externalId: false,
  })
  public permissionsB2BMarketingAnalyticsUser?: boolean | null;
  @sField({
    apiName: 'PermissionsTraceXdsQueries',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '外部データソースのアクセス追跡',
    externalId: false,
  })
  public permissionsTraceXdsQueries?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllCustomSettings',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのカスタム設定を表示',
    externalId: false,
  })
  public permissionsViewAllCustomSettings?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllForeignKeyNames',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべての参照レコード名の参照',
    externalId: false,
  })
  public permissionsViewAllForeignKeyNames?: boolean | null;
  @sField({
    apiName: 'PermissionsHeadlessCMSAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce CMS インテグレーションを有効化',
    externalId: false,
  })
  public permissionsHeadlessCmsAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsLMEndMessagingSessionUserPerm',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メッセージングセッションを終了',
    externalId: false,
  })
  public permissionsLmEndMessagingSessionUserPerm?: boolean | null;
  @sField({
    apiName: 'PermissionsConsentApiUpdate',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'REST API を使用して同意設定を更新',
    externalId: false,
  })
  public permissionsConsentApiUpdate?: boolean | null;
  @sField({
    apiName: 'PermissionsAccessContentBuilder',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ドラッグアンドドロップコンテンツビルダーにアクセス',
    externalId: false,
  })
  public permissionsAccessContentBuilder?: boolean | null;
  @sField({
    apiName: 'PermissionsAccountSwitcherUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '取引先スイッチャーユーザー',
    externalId: false,
  })
  public permissionsAccountSwitcherUser?: boolean | null;
  @sField({
    apiName: 'PermissionsManageC360AConnections',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '組織を Data Cloud に接続',
    externalId: false,
  })
  public permissionsManageC360AConnections?: boolean | null;
  @sField({
    apiName: 'PermissionsManageReleaseUpdates',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'リリース更新を管理',
    externalId: false,
  })
  public permissionsManageReleaseUpdates?: boolean | null;
  @sField({
    apiName: 'PermissionsViewAllProfiles',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'すべてのプロファイルを表示',
    externalId: false,
  })
  public permissionsViewAllProfiles?: boolean | null;
  @sField({
    apiName: 'PermissionsSkipIdentityConfirmation',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ログイン時にデバイスの有効化をスキップ',
    externalId: false,
  })
  public permissionsSkipIdentityConfirmation?: boolean | null;
  @sField({
    apiName: 'PermissionsSendCustomNotifications',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'カスタム通知を送信',
    externalId: false,
  })
  public permissionsSendCustomNotifications?: boolean | null;
  @sField({
    apiName: 'PermissionsPackaging2Delete',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '第二世代パッケージの削除',
    externalId: false,
  })
  public permissionsPackaging2Delete?: boolean | null;
  @sField({
    apiName: 'PermissionsViewRestrictionAndScopingRules',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '制限および範囲設定ルールを表示',
    externalId: false,
  })
  public permissionsViewRestrictionAndScopingRules?: boolean | null;
  @sField({
    apiName: 'PermissionsManageTrustMeasures',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '信頼対策を管理',
    externalId: false,
  })
  public permissionsManageTrustMeasures?: boolean | null;
  @sField({
    apiName: 'PermissionsViewTrustMeasures',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '信頼対策を表示',
    externalId: false,
  })
  public permissionsViewTrustMeasures?: boolean | null;
  @sField({
    apiName: 'PermissionsIsotopeCToCUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce Anywhere インテグレーションアクセス',
    externalId: false,
  })
  public permissionsIsotopeCToCUser?: boolean | null;
  @sField({
    apiName: 'PermissionsIsotopeAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'モバイルでの Salesforce Anywhere',
    externalId: false,
  })
  public permissionsIsotopeAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsIsotopeLEX',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Lightning Experience での Salesforce Anywhere',
    externalId: false,
  })
  public permissionsIsotopeLex?: boolean | null;
  @sField({
    apiName: 'PermissionsQuipMetricsAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Quip 評価指標',
    externalId: false,
  })
  public permissionsQuipMetricsAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsQuipUserEngagementMetrics',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Quip ユーザーエンゲージメント評価指標',
    externalId: false,
  })
  public permissionsQuipUserEngagementMetrics?: boolean | null;
  @sField({
    apiName: 'PermissionsManageExternalConnections',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ユーザーにプライベート接続の変更を許可',
    externalId: false,
  })
  public permissionsManageExternalConnections?: boolean | null;
  @sField({
    apiName: 'PermissionsNativeWebviewScrolling',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'Salesforce モバイルアプリケーション: Web ビューでのネイティブスクロール',
    externalId: false,
  })
  public permissionsNativeWebviewScrolling?: boolean | null;
  @sField({
    apiName: 'PermissionsViewDeveloperName',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'DeveloperName を表示',
    externalId: false,
  })
  public permissionsViewDeveloperName?: boolean | null;
  @sField({
    apiName: 'PermissionsBypassMFAForUiLogins',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '除外ユーザーの多要素認証を放棄',
    externalId: false,
  })
  public permissionsBypassMfaForUiLogins?: boolean | null;
  @sField({
    apiName: 'PermissionsClientSecretRotation',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'コンシューマーキーと秘密のローテーションを許可',
    externalId: false,
  })
  public permissionsClientSecretRotation?: boolean | null;
  @sField({
    apiName: 'PermissionsMultiStepSchedulingUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '複数ステップのスケジュール機能を管理します',
    externalId: false,
  })
  public permissionsMultiStepSchedulingUser?: boolean | null;
  @sField({
    apiName: 'PermissionsAccessToServiceProcess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'サービスプロセスユーザー',
    externalId: false,
  })
  public permissionsAccessToServiceProcess?: boolean | null;
  @sField({
    apiName: 'PermissionsMicrobatching',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'マイクロバッチを使用してレコードを作成',
    externalId: false,
  })
  public permissionsMicrobatching?: boolean | null;
  @sField({
    apiName: 'PermissionsManageOrchInstsAndWorkItems',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'オーケストレーション実行と作業項目を管理',
    externalId: false,
  })
  public permissionsManageOrchInstsAndWorkItems?: boolean | null;
  @sField({
    apiName: 'PermissionsCMSECEAuthoringAccess',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'イネーブルメントコンテンツを移行',
    externalId: false,
  })
  public permissionsCmseceAuthoringAccess?: boolean | null;
  @sField({
    apiName: 'PermissionsCanUpdateEmailMessage',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'メールメッセージを更新',
    externalId: false,
  })
  public permissionsCanUpdateEmailMessage?: boolean | null;
  @sField({
    apiName: 'PermissionsEnableIPFSUpload',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ブロックチェーンデータのアップロードを許可',
    externalId: false,
  })
  public permissionsEnableIpfsUpload?: boolean | null;
  @sField({
    apiName: 'PermissionsEnableBCTransactionPolling',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'ブロックチェーントランザクションポーリング API を有効化',
    externalId: false,
  })
  public permissionsEnableBcTransactionPolling?: boolean | null;
  @sField({
    apiName: 'PermissionsAccessToComplaintMgmt',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: '周知の告発情報管理ユーザー',
    externalId: false,
  })
  public permissionsAccessToComplaintMgmt?: boolean | null;
  @sField({
    apiName: 'PermissionsFSCArcGraphCommunityUser',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'パートナーユーザーの Actionable Relationship Center にアクセス',
    externalId: false,
  })
  public permissionsFscArcGraphCommunityUser?: boolean | null;
  @sField({
    apiName: 'Description',
    createable: true,
    updateable: true,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.STRING,
    salesforceLabel: '説明',
    externalId: false,
  })
  public description?: string | null;
  @sField({
    apiName: 'CreatedDate',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.DATETIME,
    salesforceLabel: '作成日',
    externalId: false,
  })
  public readonly createdDate?: Date | null;
  @sField({
    apiName: 'CreatedById',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: '作成者 ID',
    externalId: false,
  })
  public readonly createdById?: string | null;
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
    salesforceLabel: '最終更新者 ID',
    externalId: false,
  })
  public readonly lastModifiedById?: string | null;
  @sField({
    apiName: 'SystemModstamp',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.DATETIME,
    salesforceLabel: 'System Modstamp',
    externalId: false,
  })
  public readonly systemModstamp?: Date | null;
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
    apiName: 'HasActivationRequired',
    createable: true,
    updateable: true,
    required: true,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.BOOLEAN,
    salesforceLabel: 'セッションの有効化が必要',
    externalId: false,
  })
  public hasActivationRequired?: boolean | null;
  @sField({
    apiName: 'PermissionSetGroupId',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.REFERENCE,
    salesforceLabel: 'PermissionSetGroup ID',
    externalId: false,
  })
  public readonly permissionSetGroupId?: string | null;
  @sField({
    apiName: 'Type',
    createable: false,
    updateable: false,
    required: false,
    reference: undefined,
    childRelationship: false,
    salesforceType: SalesforceFieldType.PICKLIST,
    salesforceLabel: '権限セット種別',
    externalId: false,
  })
  public readonly type?: string | null;

  constructor(fields?: PermissionSetFields, restInstance?: Rest) {
    super('PermissionSet', restInstance);
    this.id = void 0;
    this.name = void 0;
    this.label = void 0;
    this.licenseId = void 0;
    this.profileId = void 0;
    this.isOwnedByProfile = void 0;
    this.isCustom = void 0;
    this.permissionsEmailSingle = void 0;
    this.permissionsEmailMass = void 0;
    this.permissionsEditTask = void 0;
    this.permissionsEditEvent = void 0;
    this.permissionsExportReport = void 0;
    this.permissionsImportPersonal = void 0;
    this.permissionsDataExport = void 0;
    this.permissionsManageUsers = void 0;
    this.permissionsEditPublicFilters = void 0;
    this.permissionsEditPublicTemplates = void 0;
    this.permissionsModifyAllData = void 0;
    this.permissionsEditBillingInfo = void 0;
    this.permissionsManageCases = void 0;
    this.permissionsMassInlineEdit = void 0;
    this.permissionsManageSolutions = void 0;
    this.permissionsCustomizeApplication = void 0;
    this.permissionsEditReadonlyFields = void 0;
    this.permissionsRunReports = void 0;
    this.permissionsViewSetup = void 0;
    this.permissionsTransferAnyEntity = void 0;
    this.permissionsNewReportBuilder = void 0;
    this.permissionsActivateContract = void 0;
    this.permissionsActivateOrder = void 0;
    this.permissionsImportLeads = void 0;
    this.permissionsManageLeads = void 0;
    this.permissionsTransferAnyLead = void 0;
    this.permissionsViewAllData = void 0;
    this.permissionsEditPublicDocuments = void 0;
    this.permissionsViewEncryptedData = void 0;
    this.permissionsEditBrandTemplates = void 0;
    this.permissionsEditHtmlTemplates = void 0;
    this.permissionsChatterInternalUser = void 0;
    this.permissionsManageTranslation = void 0;
    this.permissionsDeleteActivatedContract = void 0;
    this.permissionsChatterInviteExternalUsers = void 0;
    this.permissionsSendSitRequests = void 0;
    this.permissionsApiUserOnly = void 0;
    this.permissionsManageRemoteAccess = void 0;
    this.permissionsCanUseNewDashboardBuilder = void 0;
    this.permissionsManageCategories = void 0;
    this.permissionsConvertLeads = void 0;
    this.permissionsPasswordNeverExpires = void 0;
    this.permissionsUseTeamReassignWizards = void 0;
    this.permissionsEditActivatedOrders = void 0;
    this.permissionsInstallPackaging = void 0;
    this.permissionsPublishPackaging = void 0;
    this.permissionsChatterOwnGroups = void 0;
    this.permissionsEditOppLineItemUnitPrice = void 0;
    this.permissionsCreatePackaging = void 0;
    this.permissionsBulkApiHardDelete = void 0;
    this.permissionsInboundMigrationToolsUser = void 0;
    this.permissionsSolutionImport = void 0;
    this.permissionsManageCallCenters = void 0;
    this.permissionsManageSynonyms = void 0;
    this.permissionsOutboundMigrationToolsUser = void 0;
    this.permissionsViewContent = void 0;
    this.permissionsManageEmailClientConfig = void 0;
    this.permissionsEnableNotifications = void 0;
    this.permissionsManageDataIntegrations = void 0;
    this.permissionsDistributeFromPersWksp = void 0;
    this.permissionsViewDataCategories = void 0;
    this.permissionsManageDataCategories = void 0;
    this.permissionsAuthorApex = void 0;
    this.permissionsManageMobile = void 0;
    this.permissionsApiEnabled = void 0;
    this.permissionsManageCustomReportTypes = void 0;
    this.permissionsEditCaseComments = void 0;
    this.permissionsTransferAnyCase = void 0;
    this.permissionsContentAdministrator = void 0;
    this.permissionsCreateWorkspaces = void 0;
    this.permissionsManageContentPermissions = void 0;
    this.permissionsManageContentProperties = void 0;
    this.permissionsManageContentTypes = void 0;
    this.permissionsScheduleJob = void 0;
    this.permissionsManageExchangeConfig = void 0;
    this.permissionsManageAnalyticSnapshots = void 0;
    this.permissionsScheduleReports = void 0;
    this.permissionsManageBusinessHourHolidays = void 0;
    this.permissionsManageEntitlements = void 0;
    this.permissionsManageDynamicDashboards = void 0;
    this.permissionsCustomSidebarOnAllPages = void 0;
    this.permissionsManageInteraction = void 0;
    this.permissionsViewMyTeamsDashboards = void 0;
    this.permissionsModerateChatter = void 0;
    this.permissionsResetPasswords = void 0;
    this.permissionsFlowUflRequired = void 0;
    this.permissionsCanInsertFeedSystemFields = void 0;
    this.permissionsActivitiesAccess = void 0;
    this.permissionsEmailTemplateManagement = void 0;
    this.permissionsEmailAdministration = void 0;
    this.permissionsManageChatterMessages = void 0;
    this.permissionsAllowEmailIc = void 0;
    this.permissionsChatterFileLink = void 0;
    this.permissionsForceTwoFactor = void 0;
    this.permissionsViewEventLogFiles = void 0;
    this.permissionsManageNetworks = void 0;
    this.permissionsManageAuthProviders = void 0;
    this.permissionsRunFlow = void 0;
    this.permissionsViewGlobalHeader = void 0;
    this.permissionsCreateCustomizeDashboards = void 0;
    this.permissionsCreateDashboardFolders = void 0;
    this.permissionsViewPublicDashboards = void 0;
    this.permissionsManageDashbdsInPubFolders = void 0;
    this.permissionsCreateCustomizeReports = void 0;
    this.permissionsCreateReportFolders = void 0;
    this.permissionsViewPublicReports = void 0;
    this.permissionsManageReportsInPubFolders = void 0;
    this.permissionsEditMyDashboards = void 0;
    this.permissionsEditMyReports = void 0;
    this.permissionsViewAllUsers = void 0;
    this.permissionsConnectOrgToEnvironmentHub = void 0;
    this.permissionsCreateCustomizeFilters = void 0;
    this.permissionsContentHubUser = void 0;
    this.permissionsModerateNetworkFeeds = void 0;
    this.permissionsModerateNetworkFiles = void 0;
    this.permissionsGovernNetworks = void 0;
    this.permissionsSalesConsole = void 0;
    this.permissionsTwoFactorApi = void 0;
    this.permissionsDeleteTopics = void 0;
    this.permissionsEditTopics = void 0;
    this.permissionsCreateTopics = void 0;
    this.permissionsAssignTopics = void 0;
    this.permissionsIdentityEnabled = void 0;
    this.permissionsIdentityConnect = void 0;
    this.permissionsContentWorkspaces = void 0;
    this.permissionsCreateWorkBadgeDefinition = void 0;
    this.permissionsCustomMobileAppsAccess = void 0;
    this.permissionsViewHelpLink = void 0;
    this.permissionsManageProfilesPermissionsets = void 0;
    this.permissionsAssignPermissionSets = void 0;
    this.permissionsManageRoles = void 0;
    this.permissionsManageIpAddresses = void 0;
    this.permissionsManageSharing = void 0;
    this.permissionsManageInternalUsers = void 0;
    this.permissionsManagePasswordPolicies = void 0;
    this.permissionsManageLoginAccessPolicies = void 0;
    this.permissionsManageCustomPermissions = void 0;
    this.permissionsCanVerifyComment = void 0;
    this.permissionsManageUnlistedGroups = void 0;
    this.permissionsStdAutomaticActivityCapture = void 0;
    this.permissionsShareFilesWithNetworks = void 0;
    this.permissionsManageTwoFactor = void 0;
    this.permissionsLightningExperienceUser = void 0;
    this.permissionsConfigCustomRecs = void 0;
    this.permissionsSubmitMacrosAllowed = void 0;
    this.permissionsBulkMacrosAllowed = void 0;
    this.permissionsModerateNetworkMessages = void 0;
    this.permissionsManageSessionPermissionSets = void 0;
    this.permissionsSendAnnouncementEmails = void 0;
    this.permissionsChatterEditOwnPost = void 0;
    this.permissionsChatterEditOwnRecordPost = void 0;
    this.permissionsManageSandboxes = void 0;
    this.permissionsAutomaticActivityCapture = void 0;
    this.permissionsImportCustomObjects = void 0;
    this.permissionsDelegatedTwoFactor = void 0;
    this.permissionsChatterComposeUiCodesnippet = void 0;
    this.permissionsSelectFilesFromSalesforce = void 0;
    this.permissionsModerateNetworkUsers = void 0;
    this.permissionsMergeTopics = void 0;
    this.permissionsSubscribeToLightningReports = void 0;
    this.permissionsManagePvtRptsAndDashbds = void 0;
    this.permissionsAllowLightningLogin = void 0;
    this.permissionsCampaignInfluence2 = void 0;
    this.permissionsViewDataAssessment = void 0;
    this.permissionsRemoveDirectMessageMembers = void 0;
    this.permissionsCanApproveFeedPost = void 0;
    this.permissionsAddDirectMessageMembers = void 0;
    this.permissionsAllowViewEditConvertedLeads = void 0;
    this.permissionsShowCompanyNameAsUserBadge = void 0;
    this.permissionsAccessCmc = void 0;
    this.permissionsViewHealthCheck = void 0;
    this.permissionsManageHealthCheck = void 0;
    this.permissionsPackaging2 = void 0;
    this.permissionsManageCertificates = void 0;
    this.permissionsCreateReportInLightning = void 0;
    this.permissionsPreventClassicExperience = void 0;
    this.permissionsHideReadByList = void 0;
    this.permissionsListEmailSend = void 0;
    this.permissionsFeedPinning = void 0;
    this.permissionsChangeDashboardColors = void 0;
    this.permissionsManageRecommendationStrategies = void 0;
    this.permissionsManagePropositions = void 0;
    this.permissionsCloseConversations = void 0;
    this.permissionsSubscribeReportRolesGrps = void 0;
    this.permissionsSubscribeDashboardRolesGrps = void 0;
    this.permissionsUseWebLink = void 0;
    this.permissionsHasUnlimitedNbaExecutions = void 0;
    this.permissionsViewOnlyEmbeddedAppUser = void 0;
    this.permissionsViewAllActivities = void 0;
    this.permissionsSubscribeReportToOtherUsers = void 0;
    this.permissionsLightningConsoleAllowedForUser = void 0;
    this.permissionsSubscribeReportsRunAsUser = void 0;
    this.permissionsSubscribeToLightningDashboards = void 0;
    this.permissionsSubscribeDashboardToOtherUsers = void 0;
    this.permissionsCreateLtngTempInPub = void 0;
    this.permissionsTransactionalEmailSend = void 0;
    this.permissionsViewPrivateStaticResources = void 0;
    this.permissionsViewCustomerSentiment = void 0;
    this.permissionsCreateLtngTempFolder = void 0;
    this.permissionsApexRestServices = void 0;
    this.permissionsEnableCommunityAppLauncher = void 0;
    this.permissionsGiveRecognitionBadge = void 0;
    this.permissionsAllowObjectDetection = void 0;
    this.permissionsSalesforceIqInternal = void 0;
    this.permissionsUseMySearch = void 0;
    this.permissionsLtngPromoReserved01UserPerm = void 0;
    this.permissionsManageSubscriptions = void 0;
    this.permissionsAllowObjectDetectionTraining = void 0;
    this.permissionsManageSurveys = void 0;
    this.permissionsUseAssistantDialog = void 0;
    this.permissionsUseQuerySuggestions = void 0;
    this.permissionsViewRoles = void 0;
    this.permissionsLmOutboundMessagingUserPerm = void 0;
    this.permissionsModifyDataClassification = void 0;
    this.permissionsPrivacyDataAccess = void 0;
    this.permissionsQueryAllFiles = void 0;
    this.permissionsModifyMetadata = void 0;
    this.permissionsManageCms = void 0;
    this.permissionsSandboxTestingInCommunityApp = void 0;
    this.permissionsCanEditPrompts = void 0;
    this.permissionsViewUserPii = void 0;
    this.permissionsManageHubConnections = void 0;
    this.permissionsB2BMarketingAnalyticsUser = void 0;
    this.permissionsTraceXdsQueries = void 0;
    this.permissionsViewAllCustomSettings = void 0;
    this.permissionsViewAllForeignKeyNames = void 0;
    this.permissionsHeadlessCmsAccess = void 0;
    this.permissionsLmEndMessagingSessionUserPerm = void 0;
    this.permissionsConsentApiUpdate = void 0;
    this.permissionsAccessContentBuilder = void 0;
    this.permissionsAccountSwitcherUser = void 0;
    this.permissionsManageC360AConnections = void 0;
    this.permissionsManageReleaseUpdates = void 0;
    this.permissionsViewAllProfiles = void 0;
    this.permissionsSkipIdentityConfirmation = void 0;
    this.permissionsSendCustomNotifications = void 0;
    this.permissionsPackaging2Delete = void 0;
    this.permissionsViewRestrictionAndScopingRules = void 0;
    this.permissionsManageTrustMeasures = void 0;
    this.permissionsViewTrustMeasures = void 0;
    this.permissionsIsotopeCToCUser = void 0;
    this.permissionsIsotopeAccess = void 0;
    this.permissionsIsotopeLex = void 0;
    this.permissionsQuipMetricsAccess = void 0;
    this.permissionsQuipUserEngagementMetrics = void 0;
    this.permissionsManageExternalConnections = void 0;
    this.permissionsNativeWebviewScrolling = void 0;
    this.permissionsViewDeveloperName = void 0;
    this.permissionsBypassMfaForUiLogins = void 0;
    this.permissionsClientSecretRotation = void 0;
    this.permissionsMultiStepSchedulingUser = void 0;
    this.permissionsAccessToServiceProcess = void 0;
    this.permissionsMicrobatching = void 0;
    this.permissionsManageOrchInstsAndWorkItems = void 0;
    this.permissionsCmseceAuthoringAccess = void 0;
    this.permissionsCanUpdateEmailMessage = void 0;
    this.permissionsEnableIpfsUpload = void 0;
    this.permissionsEnableBcTransactionPolling = void 0;
    this.permissionsAccessToComplaintMgmt = void 0;
    this.permissionsFscArcGraphCommunityUser = void 0;
    this.description = void 0;
    this.createdDate = void 0;
    this.createdById = void 0;
    this.lastModifiedDate = void 0;
    this.lastModifiedById = void 0;
    this.systemModstamp = void 0;
    this.namespacePrefix = void 0;
    this.hasActivationRequired = void 0;
    this.permissionSetGroupId = void 0;
    this.type = void 0;
    this.__UUID = PermissionSet.__UUID;
    this.initObject(fields);
    return new Proxy(this, this.safeUpdateProxyHandler);
  }

  public static API_NAME: 'PermissionSet' = 'PermissionSet';
  public readonly _TYPE_: 'PermissionSet' = 'PermissionSet';
  public static __UUID = Symbol();
  private static _fields: { [P in keyof FieldProps<PermissionSet>]: SFieldProperties };

  public static get FIELDS() {
    return (this._fields = this._fields
      ? this._fields
      : PermissionSet.getPropertiesMeta<FieldProps<PermissionSet>, PermissionSet>(PermissionSet));
  }

  public static async retrieve(
    qryParam: ((fields: FieldResolver<PermissionSet>) => SOQLQueryParams) | string,
    opts?: QueryOpts
  ): Promise<PermissionSet[]> {
    const qry = typeof qryParam === 'function' ? buildQuery(PermissionSet, qryParam) : qryParam;
    return await RestObject.query<PermissionSet>(PermissionSet, qry, opts);
  }

  public static fromSFObject(sob: SObject): PermissionSet {
    return new PermissionSet().mapFromQuery(sob);
  }
}
