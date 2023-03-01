/**
 * A simple type represenation for https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type "application-json"
 */
export type ConfigurationContent = { [x: string]: any } | [{ [x: string]: any }];

/**
 * A simple type representation for https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-type
 */
export type ConfigurationProfileType = 'AWS.Freeform' | 'AWS.AppConfig.FeatureFlags';

/**
 * A simple type representation for https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-replicateto
 */
export type DeploymentStrategyReplication = 'NONE' | 'SSM_DOCUMENT';