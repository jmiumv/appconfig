import { CfnApplication, CfnConfigurationProfile, CfnDeployment, CfnDeploymentStrategy, CfnEnvironment, CfnHostedConfigurationVersion } from 'aws-cdk-lib/aws-appconfig';
import { Construct } from 'constructs';

/**
 * A simple type represenation for https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type "application-json"
 */
export type ConfigurationContent = { [x: string]: any };

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
    this.application = new CfnApplication(
      this,
      'Application',
      {
        name: this.props.applicationName,
      },
    );

    // setup a deploy strategy to immediately apply config.
    this.immediateDeploymentStrategy = new CfnDeploymentStrategy(
      this,
      'DeployStrategy',
      {
        name: 'ImmediateDeployment',
        deploymentDurationInMinutes: 0,
        growthFactor: 100,
        replicateTo: 'NONE',
        finalBakeTimeInMinutes: 0,
      },
    );

    // setup an app config env
    this.environment = new CfnEnvironment(
      this,
      'Environment',
      {
        applicationId: this.application.ref,
        // can be anything that makes sense for your use case.
        name: this.props.applicationEnvironment,
      },
    );

    // setup config profile
    this.configurationProfile = new CfnConfigurationProfile(
      this,
      'ConfigurationProfile',
      {
        name: this.props.configurationProfileName,
        applicationId: this.application.ref,
        // we want AppConfig to manage the configuration profile, unless we need from SSM or S3.
        locationUri: 'hosted',
        // This can also be "AWS.AppConfig.FeatureFlags"
        type: 'AWS.Freeform',
      },
    );

    // Update AppConfig
    this.hostedConfigurationVersion = new CfnHostedConfigurationVersion(
      this,
      'HostedConfigurationVersion',
      {
        applicationId: this.application.ref,
        configurationProfileId: this.configurationProfile.ref,
        content: JSON.stringify(this.props.configurationContent),
        // https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type
        contentType: 'application/json',
      },
    );

    // Perform deployment.
    this.deployment = new CfnDeployment(this, 'Deployment', {
      applicationId: this.application.ref,
      configurationProfileId: this.configurationProfile.ref,
      configurationVersion: this.hostedConfigurationVersion.ref,
      deploymentStrategyId: this.immediateDeploymentStrategy.ref,
      environmentId: this.environment.ref,
    });
  }
}