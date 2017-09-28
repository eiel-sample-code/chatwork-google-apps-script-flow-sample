# chatwork-google-apps-script-flow-sample

[chatwork-client-gas](https://github.com/cw-shibuya/chatwork-client-gas/)を利用するコードでflowによる型チェックをするサンプルコードです。

## Setup

```
npm install --global yarn
yarn
```

## Usage

```
$ yarn run flow
yarn run flow
yarn run v1.0.2
$ "/Users/eiel/Documents/ghq/github.com/eiel-sample-code/chatwork-google-apps-script-flow-sample/node_modules/.bin/flow"
Launching Flow server for /Users/eiel/Documents/ghq/github.com/eiel-sample-code/chatwork-google-apps-script-flow-sample
Spawned flow server (pid=5752)
Logs will go to /private/tmp/flow/zSUserszSeielzSDocumentszSghqzSgithub.comzSeiel-sample-codezSchatwork-google-apps-script-flow-sample.log
Library type error:
node_modules/flow-interfaces-chatwork-client-gas/definitions/ChatWork.js:8
  8:   factory(config: gas$ChatWork$Config): gas$ChatWorkClient$ChatWork;
                       ^^^^^^^^^^^^^^^^^^^ property `token` of gas$ChatWork$Config. Property not found in
  4:   var client = ChatWorkClient.factory({tokn: 'xxx'}); // typo token
                                           ^^^^^^^^^^^^^ object literal. See: index.js:4


Found 1 error
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
>                    
```
