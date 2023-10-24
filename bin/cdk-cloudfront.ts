#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCloudfrontStack } from '../lib/cdk-cloudfront-stack';
import * as path from 'path';

const app = new cdk.App();
new CdkCloudfrontStack(app, 'CdkCloudfrontStack', {
    stage: 'dev',
    path: path.join(__dirname, '..', 'web-app'),
    domainName: 'ceocom.com.ar',
    subdomainName: 'www.ceocom.com.ar',
    account: '206251961235',
    region: 'us-east-1',
});