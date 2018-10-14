

## Install Firebase Project
1. Setup project at Firebase.com
1. Create directory and enter it `cd`
1. Init Firebase `firebase init`
1. Create `.gitignore``
1. Change to es2017 and node8
1. Update typescript `npm i typescript --save-dev`
1. Make sure firebase is latest installed
Find version of installed package
```
npm list -g PACKAGENAME
```

[Debug functions](https://github.com/GoogleCloudPlatform/cloud-functions-emulator/wiki/Troubleshooting)

Load lastest
```
npm install -g firebase-tools
npm install firebase-functions@latest firebase-admin@latest --save
```


## Test functions locally

```
npm run-script build
firebase serve --only functions
```


## Functions

- Fetch CU List (nur einfügen, was noch nicht da ist)
   - cu weise aktualisieren
- Write verionlist to Cloud Firestore

```
yarn add express apollo-server-express \
         graphql graphql-tools \
         body-parser
```

npm install apollo-server graphql graphql-tag

    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true


    npm i --save-dev @types/graphql


Fehler: server.listen is not a function
const { ApolloServer, ApolloError, gql, ValidationError } = require('apollo-server-express');
anstelle import

[GraphQL Best Practice](https://graphql.github.io/learn/best-practices/)

```
{
  __schema {
    types {
      name
    }
  }
}
```


yarn i -D tslint-config-prettier

BEispiel
https://github.com/MyiWorlds/backend/tree/master/src/services/firebase


