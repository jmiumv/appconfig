import { CfnApplication, CfnConfigurationProfile, CfnDeployment, CfnDeploymentStrategy, CfnEnvironment, CfnHostedConfigurationVersion } from 'aws-cdk-lib/aws-appconfig';
import { Construct } from 'constructs';
import { ConfigurationContent, ConfigurationProfileType, DeploymentStrategyReplication } from './appconfig-types';

/**
 * Gets a new {@link CfnApplication} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param applicationName The name of the application.
 * @returns an initialized {@link CfnApplication}.
 */
export function getApplication(
  scope: Construct,
  id: string,
  applicationName: string,
): CfnApplication {
  return new CfnApplication(
    scope,
    id,
    {
      name: applicationName,
    },
  );
}

/**
 * Gets a new {@link CfnDeploymentStrategy} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param {string} [deploymentName=id] An optional deploymentName, defaults to id if not specified.
 * @param {number} [deploymentDurationInMinutes=0] An optional deployment time in minutes, defaults to 0 if not specified.
 * @param {number} [growthFactor=100] An optional growth factor, defaults to 100 if not specified.
 * @param {string} [replicateTo='NONE'] An optional replicateTo, defaults to 'NONE' if not specified.
 * @param {number} [finalBakeTimeInMinutes=0] An optional final bake time, defaults to 0 if not specified.
 * @returns an initialized {@link CfnDeploymentStrategy}.
 */
export function getAppConfigDeploymentStrategy(
  scope: Construct,
  id: string,
  deploymentName?: string,
  deploymentDurationInMinutes?: number,
  growthFactor?: number,
  replicateTo?: DeploymentStrategyReplication,
  finalBakeTimeInMinutes?: number,
): CfnDeploymentStrategy {
  return new CfnDeploymentStrategy(scope, id, {
    name: deploymentName ? deploymentName : id,
    deploymentDurationInMinutes: deploymentDurationInMinutes ? deploymentDurationInMinutes : 0,
    growthFactor: growthFactor ? growthFactor : 100,
    replicateTo: replicateTo ? replicateTo : 'NONE',
    finalBakeTimeInMinutes: finalBakeTimeInMinutes ? finalBakeTimeInMinutes : 0,
  });
}

/**
 * Gets a new {@link CfnDeploymentStrategy} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param application A valid {@link CfnApplication}.
 * @param envName Name for the app config environment.
 * @returns an initialized {@link CfnEnvironment}.
 */
export function getAppConfigEnvironment(
  scope: Construct,
  id: string,
  application: CfnApplication,
  envName: string,
): CfnEnvironment {
  return new CfnEnvironment(scope, id, {
    applicationId: application.ref,
    // can be anything that makes sense for your use case.
    name: envName,
  });
}

/**
 * Gets a new {@link CfnConfigurationProfile} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param application A valid {@link CfnApplication}.
 * @param envName Name for the app config environment.
 * @returns an initialized {@link CfnConfigurationProfile}.
 */
export function getAppConfigHostedConfigurationProfile(
  scope: Construct,
  id: string,
  application: CfnApplication,
  configurationProfileName: string,
  configurationProfileType: ConfigurationProfileType,
): CfnConfigurationProfile {
  return new CfnConfigurationProfile(
    scope,
    id,
    {
      name: configurationProfileName,
      applicationId: application.ref,
      locationUri: 'hosted',
      type: configurationProfileType,
    },
  );
}

/**
 * Gets a new {@link CfnHostedConfigurationVersion} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param application A valid {@link CfnApplication}.
 * @param configurationProfile A valid {@link CfnConfigurationProfile}.
 * @param configurationConent Content matching {@link ConfigurationContent}.
 * @returns an initialized {@link CfnConfigurationProfile}
 */
export function getAppConfigHostedConfigurationVersion(
  scope: Construct,
  id: string,
  application: CfnApplication,
  configurationProfile: CfnConfigurationProfile,
  configurationConent: ConfigurationContent): CfnHostedConfigurationVersion {
  return new CfnHostedConfigurationVersion(
    scope,
    id,
    {
      applicationId: application.ref,
      configurationProfileId: configurationProfile.ref,
      content: JSON.stringify(configurationConent),
      contentType: 'application/json',
    },
  );
}

/**
 * Gets a new {@link CfnDeployment} with the specified params.
 * @param scope The scope of the construct.
 * @param id A unique id.
 * @param application A valid {@link CfnApplication}.
 * @param configurationProfile A valid {@link CfnConfigurationProfile}.
 * @param configurationVersion A valid {@link CfnHostedConfigurationVersion}.
 * @param deploymentStrategy A valid {@link CfnDeploymentStrategy}.
 * @param environment A valid {@link CfnEnvironment}.
 * @returns an initialized {@link CfnDeployment}.
 */
export function getAppConfigDeployment(
  scope: Construct,
  id: string,
  application: CfnApplication,
  configurationProfile: CfnConfigurationProfile,
  configurationVersion: CfnHostedConfigurationVersion,
  deploymentStrategy: CfnDeploymentStrategy,
  environment: CfnEnvironment): CfnDeployment {
  return new CfnDeployment(scope, id, {
    applicationId: application.ref,
    configurationProfileId: configurationProfile.ref,
    configurationVersion: configurationVersion.ref,
    deploymentStrategyId: deploymentStrategy.ref,
    environmentId: environment.ref,
  });
}
