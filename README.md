# cdk-appconfig

## Motivation 
This simple project was inspired from [this stackoverflow question](https://stackoverflow.com/questions/67579029/aws-cdk-lambda-appconfig-typescript-example-please/74724158#74724158), where I shared [this answer](https://stackoverflow.com/a/74724158). 

When I [read docs on the AppConfig construct library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_appconfig-readme.html), I soon realized that it was ripe for L2 and L3 constructs. Hence this library. 

PRs are always welcome ! 

## To-Do/Work In Progress (PRs welcome!!!)
- [ ] A more customizable construct allowing consumers for a deeper configuration.

## Releases
|Language|Repository
|--------|-----------
|JavaScript/TypeScript|[cdk-appconfig](https://www.npmjs.com/package/cdk-appconfig)

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimpleAppConfig <a name="SimpleAppConfig" id="cdk-appconfig.SimpleAppConfig"></a>

Custom construct to quickly setup app config resouce based on the passed in {@link SimpleAppConfigProps}.

This construct does the following:
1. Setup `applicationName/applicationEnvironment/configurationProfileName`.
2. Add/update configurationContent.
3. Apply the add/update immediately.

#### Initializers <a name="Initializers" id="cdk-appconfig.SimpleAppConfig.Initializer"></a>

```typescript
import { SimpleAppConfig } from 'cdk-appconfig'

new SimpleAppConfig(scope: Construct, id: string, props: SimpleAppConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appconfig.SimpleAppConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-appconfig.SimpleAppConfigProps">SimpleAppConfigProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-appconfig.SimpleAppConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-appconfig.SimpleAppConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-appconfig.SimpleAppConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-appconfig.SimpleAppConfigProps">SimpleAppConfigProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appconfig.SimpleAppConfig.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-appconfig.SimpleAppConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appconfig.SimpleAppConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-appconfig.SimpleAppConfig.isConstruct"></a>

```typescript
import { SimpleAppConfig } from 'cdk-appconfig'

SimpleAppConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-appconfig.SimpleAppConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.application">application</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnApplication</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.configurationProfile">configurationProfile</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnConfigurationProfile</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.deployment">deployment</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnDeployment</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.environment">environment</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnEnvironment</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.hostedConfigurationVersion">hostedConfigurationVersion</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnHostedConfigurationVersion</code> | *No description.* |
| <code><a href="#cdk-appconfig.SimpleAppConfig.property.immediateDeploymentStrategy">immediateDeploymentStrategy</a></code> | <code>aws-cdk-lib.aws_appconfig.CfnDeploymentStrategy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-appconfig.SimpleAppConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `application`<sup>Required</sup> <a name="application" id="cdk-appconfig.SimpleAppConfig.property.application"></a>

```typescript
public readonly application: CfnApplication;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnApplication

---

##### `configurationProfile`<sup>Required</sup> <a name="configurationProfile" id="cdk-appconfig.SimpleAppConfig.property.configurationProfile"></a>

```typescript
public readonly configurationProfile: CfnConfigurationProfile;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnConfigurationProfile

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk-appconfig.SimpleAppConfig.property.deployment"></a>

```typescript
public readonly deployment: CfnDeployment;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnDeployment

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-appconfig.SimpleAppConfig.property.environment"></a>

```typescript
public readonly environment: CfnEnvironment;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnEnvironment

---

##### `hostedConfigurationVersion`<sup>Required</sup> <a name="hostedConfigurationVersion" id="cdk-appconfig.SimpleAppConfig.property.hostedConfigurationVersion"></a>

```typescript
public readonly hostedConfigurationVersion: CfnHostedConfigurationVersion;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnHostedConfigurationVersion

---

##### `immediateDeploymentStrategy`<sup>Required</sup> <a name="immediateDeploymentStrategy" id="cdk-appconfig.SimpleAppConfig.property.immediateDeploymentStrategy"></a>

```typescript
public readonly immediateDeploymentStrategy: CfnDeploymentStrategy;
```

- *Type:* aws-cdk-lib.aws_appconfig.CfnDeploymentStrategy

---


## Structs <a name="Structs" id="Structs"></a>

### SimpleAppConfigProps <a name="SimpleAppConfigProps" id="cdk-appconfig.SimpleAppConfigProps"></a>

Props for {@link SimpleAppConfig} construct.

#### Initializer <a name="Initializer" id="cdk-appconfig.SimpleAppConfigProps.Initializer"></a>

```typescript
import { SimpleAppConfigProps } from 'cdk-appconfig'

const simpleAppConfigProps: SimpleAppConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appconfig.SimpleAppConfigProps.property.applicationEnvironment">applicationEnvironment</a></code> | <code>string</code> | The name of the environment for deployment. |
| <code><a href="#cdk-appconfig.SimpleAppConfigProps.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the app config application. |
| <code><a href="#cdk-appconfig.SimpleAppConfigProps.property.configurationContent">configurationContent</a></code> | <code>{[ key: string ]: any}</code> | The content within the configuration profile. |
| <code><a href="#cdk-appconfig.SimpleAppConfigProps.property.configurationProfileName">configurationProfileName</a></code> | <code>string</code> | The name for the configuration profile within the application. |

---

##### `applicationEnvironment`<sup>Required</sup> <a name="applicationEnvironment" id="cdk-appconfig.SimpleAppConfigProps.property.applicationEnvironment"></a>

```typescript
public readonly applicationEnvironment: string;
```

- *Type:* string

The name of the environment for deployment.

(Ex: Production)

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="cdk-appconfig.SimpleAppConfigProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the app config application.

(Ex: MyApplication)

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="cdk-appconfig.SimpleAppConfigProps.property.configurationContent"></a>

```typescript
public readonly configurationContent: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The content within the configuration profile.

---

##### `configurationProfileName`<sup>Required</sup> <a name="configurationProfileName" id="cdk-appconfig.SimpleAppConfigProps.property.configurationProfileName"></a>

```typescript
public readonly configurationProfileName: string;
```

- *Type:* string

The name for the configuration profile within the application.

---