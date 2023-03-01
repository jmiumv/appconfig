import { App, assertions, Stack } from 'aws-cdk-lib';
import { SimpleAppConfig } from '../src';

/**
 * Test configuration content.
 */
const TEST_CONFIGURATION = {
  StringKey: 'StringValue',
  BooleanKey: true,
  NumberKey: 123,
  CompositeKey: {
    StringKey: 'StringValue',
    BooleanKey: false,
    NumberKey: 456,
  },
  ArrayKey: [
    {
      StringKey: 'StringValue1',
      BooleanKey: true,
      NumberKey: 123,
    },
    {
      StringKey: 'StringValue2',
      BooleanKey: false,
      NumberKey: 456,
    },
  ],
};

const TEST_APP_NAME = 'MyTestApp';
const TEST_ENV_NAME = 'MyTestEnvironment';
const TEST_CONFIG_PROFILE_NAME = 'MyConfigurationProfile';

describe('simple-appconfig', () => {
  it('creates expected resources', () => {
    const app = new App();
    const stack = new Stack(app, 'MyTestStack');
    new SimpleAppConfig(stack, 'SimpleAppConfig', {
      applicationName: TEST_APP_NAME,
      applicationEnvironment: TEST_ENV_NAME,
      configurationProfileName: TEST_CONFIG_PROFILE_NAME,
      configurationContent: TEST_CONFIGURATION,
    });

    const template = assertions.Template.fromStack(stack);
    expect(template).toMatchSnapshot();

    template.hasResourceProperties('AWS::AppConfig::Application', {
      Name: TEST_APP_NAME,
    });
    template.resourceCountIs('AWS::AppConfig::Application', 1);

    template.hasResourceProperties('AWS::AppConfig::ConfigurationProfile', {
      ApplicationId: { Ref: 'SimpleAppConfigApplication04939DED' },
      LocationUri: 'hosted',
      Name: TEST_CONFIG_PROFILE_NAME,
      Type: 'AWS.Freeform',
    });
    template.resourceCountIs('AWS::AppConfig::ConfigurationProfile', 1);


    template.hasResourceProperties('AWS::AppConfig::DeploymentStrategy', {
      DeploymentDurationInMinutes: 0,
      FinalBakeTimeInMinutes: 0,
      GrowthFactor: 100,
      Name: 'ImmediateDeployment',
      ReplicateTo: 'NONE',
    });
    template.resourceCountIs('AWS::AppConfig::DeploymentStrategy', 1);

    template.hasResourceProperties('AWS::AppConfig::Deployment', {
      ApplicationId: {
        Ref: 'SimpleAppConfigApplication04939DED',
      },
      ConfigurationProfileId: {
        Ref: 'SimpleAppConfigConfigurationProfile78536DC3',
      },
      ConfigurationVersion: {
        Ref: 'SimpleAppConfigHostedConfigurationVersion67E8BB89',
      },
      DeploymentStrategyId: {
        Ref: 'SimpleAppConfigImmediateDeployStrategy781EA584',
      },
      EnvironmentId: {
        Ref: 'SimpleAppConfigEnvironmentCD8BFB59',
      },
    });
    template.resourceCountIs('AWS::AppConfig::Deployment', 1);

    template.hasResourceProperties('AWS::AppConfig::Environment', {
      ApplicationId: {
        Ref: 'SimpleAppConfigApplication04939DED',
      },
      Name: TEST_ENV_NAME,
    });
    template.resourceCountIs('AWS::AppConfig::Environment', 1);

    template.hasResourceProperties('AWS::AppConfig::HostedConfigurationVersion', {
      ApplicationId: {
        Ref: 'SimpleAppConfigApplication04939DED',
      },
      ConfigurationProfileId: {
        Ref: 'SimpleAppConfigConfigurationProfile78536DC3',
      },
      Content: JSON.stringify(TEST_CONFIGURATION),
      ContentType: 'application/json',
    });
    template.resourceCountIs('AWS::AppConfig::HostedConfigurationVersion', 1);
  });
});