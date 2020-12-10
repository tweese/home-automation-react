#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { HomeTempStack } = require('../lib/home-temp-stack');

const app = new cdk.App();
new HomeTempStack(app, 'sandbox-tims-home-temp-stack');
