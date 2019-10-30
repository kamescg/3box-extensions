# 3ID System
### 3Box React State/Interface Management

![image](https://imgur.com/zUQDDJQ.png)

### Lerna
Install: `yarn`

Setup Everything: `yarn $`

Watch Directories: `yarn watch`

More developer documentation coming soon.


### Examples

#### Box Provider
Add a 3Box provider to an application component hierarchy.

```js
import React from 'react'
import { BoxProvider } from '3ID-system'
export default props =>
<BoxProvider>
  {props.children}
</BoxProvider>
```


#### Enable Ethereum
Request permissions from the environment wallet.

```js
import React from 'react'
import { EnableEtheruem } from '3ID-system'
export default props =>(
  <EnableEtheruem
    componentIsDisconnected={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsConnected={CustomComponent}
  />
)
```


#### Login
Authentication Login Button

```js
import React from 'react'
import { 
  Login,
  LoginButton,
  LoginModal,
} from '3ID-system'
export default props => (
  <Login variants={['tag']} />
  <LoginButton 
    componentIsLoggedOut={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsLoggedIn={CustomComponent}
  />
)
```

#### Open Space
Request opening a user space.
```js
import React from 'react'
import { SpaceOpen } from '3ID-system'
export default props => <SpaceOpen space='3box' />
```
#### Thread Join
Join a thread. Pass in options to specify exact thread target.
```js
import React from 'react'
import { Login } from '3ID-system'
export default props => (
  <ThreadJoin
    space='3box'
    threadName='commentThread'
    options={{members: false}}
  />
)


```
## Access


#### Access Authentication
```js
import React from 'react'
import { AccessAuthentication } from '3ID-system'
export default props =>
<AccessAuthentication>
  <div>
    Authentication Is Complete. Add important task.
  </div>
</AccessAuthentication>
```

#### Access Space
```js
import React from 'react'
import { AccessSpace } from '3ID-system'
export default props =>
<AccessSpace space='web3'>
  <div>
    Logged In and Space Open
  </div>
</AccessSpace>
```

#### Access Thread
```js
import React from 'react'
import { AccessThread } from '3ID-system'
export default props =>
<AccessThread space='web3' threadName='home'>
  <div>
    Logged In, Space Open and Thread Joined
  </div>
</AccessThread>
```

## Storage

#### Storage Set
Set a value in a 3Box profile or space.
```js
import React from 'react'
import { StorageSet } from '3ID-system'
export default props => 
<StorageSet 
  access='public' 
  index={values.key} 
  value={values.value}
  space={undefined} // OPTIONAL VALUE
  onSet={setStorageSet}  
/> 
```

#### Storage Remove
Merge a value in a 3Box profile or space. Access nested objects and arrays with support for dot notation.
```js
import React from 'react'
import { StorageSet } from '3ID-system'
export default props => 
<Storage
  access='public' 
  index={'key'}
  space={undefined} // OPTIONAL VALUE
  onStorageRemove={callback}  
/> 
```