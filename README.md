# cdk-appconfig

## Motivation 
This simple project was inspired from [this stackoverflow question](https://stackoverflow.com/questions/67579029/aws-cdk-lambda-appconfig-typescript-example-please/74724158#74724158), where I shared [this answer](https://stackoverflow.com/a/74724158). 

When I [read docs on the AppConfig construct library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_appconfig-readme.html), I soon realized that it was ripe for L2 and L3 constructs. Hence this library. 

PRs are always welcome ! 

## To-Do/Work In Progress (PRs welcome!!!)
- [x] A more customizable construct allowing consumers for a deeper configuration.
- [ ] Add support for semantic validation.

## Releases
|Language|Repository
|--------|-----------
|JavaScript/TypeScript|[cdk-appconfig](https://www.npmjs.com/package/cdk-appconfig)

---

## I don't have time, show me how this works

[Source](https://github.com/JoeNonExotic/appconfig-demo)

```
"dependencies": {
    ...
    "cdk-appconfig": "*", // choose specific version 
    ...
  },
```

```
import { StackProps, Stack, App } from 'aws-cdk-lib';
import { SimpleAppConfig } from 'cdk-appconfig';
import { Construct } from 'constructs';


/**
 * Demo stack for {@link SimpleAppConfig}.
 */
export class SimpleAppConfigDemoStack extends Stack {
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
```

### Application
![](/docs/demo-application.png)

### Configuration Profile
![](/docs/demo-config-profile.png)

### Freeform Configuration
![](/docs/demo-freeform-config.png)

