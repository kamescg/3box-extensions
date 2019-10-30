# 3Box System

[![build status](https://img.shields.io/travis/com/KamesCG/3box-system.svg)](https://travis-ci.com/KamesCG/3box-system)
[![code coverage](https://img.shields.io/codecov/c/github/KamesCG/3box-system.svg)](https://codecov.io/gh/KamesCG/3box-system)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/KamesCG/3box-system.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/3box-system.svg)](https://npm.im/3box-system)

## Table of Contents

* [Overview](#overview)
* [Install](#install)
* [Usage](#usage)
* [Examples](#examples)
* [Contributors](#contributors)
* [License](#license)

```
npm install @kames/3box-system
```

Tame the decentralized web.

The 3Box System library wraps the 3Box `3box` javascript module with a React component and effect handling system. 

- Read and Write to Profiles/Spaces (Storage)
- Post and Delete to Threads (Messages)
- Render Conditionals (e.x. Require Open Space before Form Render)
- State Management (Opening/Loading) 
- Global State Management (React Context)


## Examples


### Login
```js
import { Login } from '@kames/3box-system'
const Component = props => { 
 return(
  <Login />
)}
```

### AccessProfile
```js
import { AccessProfile } from '@kames/3box-system'
const Component = props => { 
 return(
  <AccessProfile>
    <MyFormComponent />
  </AccessThread>
)}
```

### AccessSpace
```js
import { AccessSpace } from '@kames/3box-system'
const Component = props => { 
 return(
  <AccessSpace
    space='ETH'
  >
    <MyFormComponent />
  </AccessThread>
)}
```

### AccessThread
```js
import { AccessThread } from '@kames/3box-system'
const Component = props => { 
 return(
  <AccessThread
    space='ETH'
    thread='comments'
    threadOptions={
      members: true,
      firstModerator: '0x...'
    }
  >
    <MyFormComponent />
  </AccessThread>
)}
```

### MessagePost
```js
import { MessagePost } from '@kames/3box-system'
const Component = props => { 
 return(
   <MessagePost threadName={'ETH'}>
    <span>delete thread message</span>
  </MessagePost>
)}
```

### MessageDelete
```js
import { MessageDelete } from '@kames/3box-system'
const Component = props => { 
 return(
   <MessageDelete threadName={'ETH'} postId={'123456689'}>
    <span>delete thread message</span>
  </MessageDelete>
)}
```

### ThreadJoin
```js
import { ThreadJoin } from '@kames/3box-system'
const Component = props => { 
 return(
   <ThreadJoin space='ETH' threadName='comments'  >
    <span>delete thread message</span>
  </ThreadJoin>
)}
```


* Account: Login and Logout
* Data: Get, Set and Delete
* Space: Open and Close
* Thread: Join and Unsubscribe

## Example
```js
import {
  BoxLoginButton, BoxThreadList, BoxQuestPostCreate
} from '@kames/3box-system'
```

### Component List

* BoxLoginButton
* BoxLoginProfile
* BoxMemberAdd
* BoxModeratorAdd
* BoxOpenSpace
* BoxProfile
* BoxSpaceCreate
* BoxSpaceList
* BoxSpaceManage
* BoxThreadComment
* BoxThreadCreate
* BoxThreadJoin
* BoxThreadList
* BoxThreadManage
* BoxThreadManageDetails
* BoxThreadManagePeople
* BoxThreadPost
* BoxThreadPostCreate
* BoxThreadPostDelete
* BoxThreadPostList
* BoxThreadPostRetrieve

## Install

[npm][]:

```sh
npm install 3box-system
```

[yarn][]:

```sh
yarn add 3box-system
```


## Usage

```js
const ModuleBoilerplate = require('3box-system');

const moduleBoilerplate = new ModuleBoilerplate();

console.log(moduleBoilerplate.renderName());
// script
```


## Contributors

| Name      | Website                   |
| --------- | ------------------------- |
| **Kames** | <https://www.kamescg.com> |


## License

[MIT](LICENSE) © [Kames](https://www.kamescg.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
