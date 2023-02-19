const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  defaultReleaseBranch: 'master',
  author: 'JNE',
  cdkVersion: '2.1.0',
  name: 'cdk-appconfig',
  description: 'A custom construct for setting up AppConfig using aws-cdk',
  repositoryUrl: 'https://github.com/JoeNonExotic/cdk-appconfig.git',

  devDeps: ['ts-node', 'aws-cdk-lib', 'constructs'],
  peerDeps: ['aws-cdk-lib', 'constructs'],
});
project.addKeywords('appconfig', 'constructs');
project.synth();