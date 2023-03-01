import { CfnApplication, CfnConfigurationProfile, CfnDeployment, CfnDeploymentStrategy, CfnEnvironment, CfnHostedConfigurationVersion } from 'aws-cdk-lib/aws-appconfig';
import { Construct } from 'constructs';
import { ConfigurationContent } from './appconfig-types';
import { getApplication, getAppConfigDeploymentStrategy, getAppConfigEnvironment, getAppConfigHostedConfigurationProfile, getAppConfigHostedConfigurationVersion, getAppConfigDeployment } from './utils';

/**
 * Props for {@link SimpleAppConfig} construct.
 */
export interface SimpleAppConfigProps {
  /**
     * The name of the app config application. (Ex: MyApplication)
     */
  readonly applicationName: string;

  /**
     * The name of the environment for deployment. (Ex: Production)
     */
  readonly applicationEnvironment: string;

  /**
     * The name for the configuration profile within the application.
     */
  readonly configurationProfileName: string;

  /**
     * The content within the configuration profile.
     */
  readonly configurationContent: ConfigurationContent;
}

/**
 * Custom construct to quickly setup app config resouce based on the passed in {@link SimpleAppConfigProps}.
 * This construct does the following:
 * 1. Setup `applicationName/applicationEnvironment/configurationProfileName`.
 * 2. Add/update configurationContent.
 * 3. Apply the add/update immediately.
 */
export class SimpleAppConfig extends Construct {

  public readonly application: CfnApplication;
  public readonly immediateDeploymentStrategy: CfnDeploymentStrategy;
  public readonly environment: CfnEnvironment;
  public readonly configurationProfile: CfnConfigurationProfile;
  public readonly hostedConfigurationVersion: CfnHostedConfigurationVersion;
  public readonly deployment: CfnDeployment;

  constructor(
    scope: Construct,
    id: string,
    private readonly props: SimpleAppConfigProps,
  ) {
    super(scope, id);

    // Create a new application
    this.application = getApplication(
      this,
      'Application',
      this.props.applicationName,
    );


    // setup a deploy strategy to immediately apply config.
    this.immediateDeploymentStrategy = getAppConfigDeploymentStrategy(
      this,
      'ImmediateDeployStrategy',
      'ImmediateDeployment',
    );

    // setup an app config env
    this.environment = getAppConfigEnvironment(
      this,
      'Environment',
      this.application,
      this.props.applicationEnvironment,
    );

    // setup config profile
    this.configurationProfile = getAppConfigHostedConfigurationProfile(
      this,
      'ConfigurationProfile',
      this.application,
      this.props.configurationProfileName,
      'AWS.Freeform',
    );

    // Update AppConfig
    this.hostedConfigurationVersion = getAppConfigHostedConfigurationVersion(
      this,
      'HostedConfigurationVersion',
      this.application,
      this.configurationProfile,
      this.props.configurationContent,
    );


    // Perform deployment.
    this.deployment = getAppConfigDeployment(
      this,
      'Deployment',
      this.application,
      this.configurationProfile,
      this.hostedConfigurationVersion,
      this.immediateDeploymentStrategy,
      this.environment,
    );
  }
}