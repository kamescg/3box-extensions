# 3Box Extensions

The 3Box Extensions module is an experiment to create an plugin system for 3Box.

Simplifying the steps required to add decentralized authentication, storage and messaging.

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

## 3Box UI State

The Context interface is a great place to to start understanding the core 3box-ui-state state system.

Context Example

```
enable: () => { },
login: () => { },
logout: () => { },
addRequest: () => { },
confirmRequest: () => { },
confirmAllRequests: () => { },
openSpace: () => { },
listSpaces: () => { },
subscribedThreads: () => { },
getThread: () => { },
getThreadByAddress: () => { },
getConfig: () => { },
getVerifiedAccounts: () => { },
joinThread: () => { },
joinThreadByAddress: () => { },
threadPost: () => { },
threadPostDelete: () => { },
threadListen: () => { },
threadAddModerator: () => { },
threadAddMember: () => { },
```

The full context includes a of initial state defaults and empty functions which will be replace via the initialized action types.

## 3Box UI System

Below is small sample of components to help enable rapid development.

### 3Box Provider

```js
import React from 'react';
import {BoxProvider} from '3box-ui-system';
export default props => <BoxProvider>{props.children}</BoxProvider>;
```

### 3Box Provider

```js
import React from 'react';
import {BoxContext} from '3box-ui-system';
export default props => (
<BoxContext>
{
  box => (
    <Component box={box}>
  )
}
</BoxContext>
)
```

### Login

```js
import React from 'react'
import { Login } from '3box-ui-system'

// Example 1
export default props => <Login />

// Example 1
export default props => <Login
  componentIsLoggedOut={CustomComponent}
  componentIsLoading={CustomComponent}
  componentIsLoggedIn={CustomComponent}
/>
```

## Access Control

### AccessAuthentication

```js
import React from 'react';
import {AccessAuthentication} from '3box-ui-system';
export default props => (
  <AccessAuthentication>
    <Atom.Span tag>Authentication Complete</Atom.Span>
  </AccessAuthentication>
);
```

### AccessSpace

```js
import React from 'react';
import {AccessAuthentication} from '3box-ui-system';
export default props => (
  <AccessSpace space="web3">
    <Atom.Span tag>Space Open Complete</Atom.Span>
  </AccessSpace>
);
```

### AccessThread

```js
import React from 'react';
import {AccessThread} from '3box-ui-system';
export default props => (
  <AccessThread space="web3" threadName="comments">
    <Atom.Span tag>Thread Join Complete</Atom.Span>
  </AccessThread>
);
```

### Threads

#### ThreadJoin

```js
import React from 'react'
import { Login } from '3box-ui-system'
export default props => (
  <ThreadJoin
    space='3box'
    threadName='commentThread'
    options={{members: false}}
  />
```

#### PostPublish

```js
import React from 'react'
import { ThreadPostPublish } from '3box-ui-system'
export default props => (
<ThreadPostPublish
  threadName='comments'
  post={
    comment: 'What if you could... Would you?'
  }
/>
```

### PostDelete

```js
import React from 'react';
import {ThreadPostDelete} from '3box-ui-system';
export default props => (
  <ThreadPostDelete threadName="comments" postId="123456789" />
);
```
