# 3Box Extensions
The 3Box Extensions module is an experiment to push the boundaries of 3Box in the Interface.

Simplifying the steps required to add decentralized authentication, storage and messaging. The 3Box Extensions repo is split into a monorepo to simplify module development and experimentation. The primary modules to get started are the `3box-ui-state` and `3box-ui-system` package, simplifying initializing a state provider and a components to interface between user interaction and the underlying `3box.js` methods.

## Resources
Before getting started with this repo, please reference the 3Box documentation and libraries.
- https://docs.3box.io/
- https://www.npmjs.com/package/3box

## Major Packages
- 3Box UI State (3box-ui-state)
- 3Box UI System (3box-ui-system)
- 3Box UI System Render (3box-ui-system-render)
- 3Box UI Profiles (3box-ui-profiles)
- 3Box UI Profiles Stateless (3box-ui-profiles-stateless)

## Developer Setup

Install: `yarn`

Watch: `yarn watch`

Run: `cd packages/apps/dapp ; yarn start`

More developer documentation coming soon.

## Development Planning
- [x] Create MVC (Minimal Viable Code)
- [ ] Test Current Approach
- [ ] Calibrate Approach
- [ ] Add Complete UI System
- [ ] Add Plugin System

## 3Box UI System Examples
Below is small sample of components to help enable rapid development.


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
  <AccessSpace space='web3'>
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
    space='web3'
    thread='comments'
    threadOptions={
      members: true,
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
   <MessagePost threadName='comments'>
    <span>delete thread message</span>
  </MessagePost>
)}
```

### MessageDelete
```js
import { MessageDelete } from '@kames/3box-system'
const Component = props => { 
 return(
   <MessageDelete threadName='comments' postId='123456689'>
    <span>Delete Message</span>
  </MessageDelete>
)}
```

### ThreadJoin
```js
import { ThreadJoin } from '@kames/3box-system'
const Component = props => { 
 return(
   <ThreadJoin space='web3' threadName='comments'  >
    <span>Join Thread</span>
  </ThreadJoin>
)}
```