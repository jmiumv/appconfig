import { StackProps, Stack, App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SimpleAppConfig } from '../../src';

/**
 * Demo stack for {@link SimpleAppConfig}.
 */
class SimpleAppConfigDemoStack extends Stack {
  /**
     * The {@link SimpleAppConfig} construct.
     */
  public readonly simpleAppConfig: SimpleAppConfig;

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Everything below is customizable, so use it as needed.
    this.simpleAppConfig = new SimpleAppConfig(this, 'SimpleAppConfig', {
      applicationName: 'MyAppConfigAppName',
      applicationEnvironment: 'MyEnvironment',
      configurationProfileName: 'MyConfigProfileName',
      // see {@link SimpleAppConfig#ConfigurationContent}, this is pretty generic.
      configurationContent: {
        MyStringKey: 'MyValue',
        MyBooleanKey: true,
        MyNumberKey: 123,
        MyCompositeKey: {
          MyStringKey: 'MyValue',
          MyBooleanKey: true,
          MyNumberKey: 123,
        },
        MyArrayKey: [
          {
            MyStringKey: 'MyValue1',
            MyBooleanKey: true,
            MyNumberKey: 123,
          },
          {
            MyStringKey: 'MyValue2',
            MyBooleanKey: false,
            MyNumberKey: 456,
          },
        ],
      },
    });
  }
}

const app = new App();
new SimpleAppConfigDemoStack(app, 'SimpleAppConfigDemoStack');