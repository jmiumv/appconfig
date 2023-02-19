import { StackProps, Stack, App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SimpleAppConfig } from '../../src';


class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
    new SimpleAppConfig(this, 'SimpleAppConfig', {
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
new MyStack(app, 'my-stack');
app.synth();
