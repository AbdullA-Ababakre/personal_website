# Mobx

[Token dance project](https://ssqphnzv7a.feishu.cn/docx/GaZQdK7rGovQglxX113czXCSnKe#PCkWduAkuouc20xGWi8cGVv2njh)


## State defenition

``````
 // index.ts
 import User from './user';
 import Ticket from './ticket';
 
 export interface Stores {
   user: User;
   tickets: Ticket;
 }
 
 const stores : Stores = {
   user: new User(),
   tickets: new Ticket(),
 };
 
 export default stores;
``````


``````
// ticke.ts
import { makeObservable, observable, action } from 'mobx';

class Ticket {
  @observable ticketsInfo = [];

  constructor() {
    makeObservable(this);
  }

  @action
  setTicket(tickets: any) {
    this.ticketsInfo = tickets;
  }
}

export default Ticket;
``````

``````
// user.ts
import { makeObservable, observable, action } from 'mobx';

interface UserInfo {
  address: string
}

class User {
  @observable userInfo: UserInfo = { address: '' };

  constructor() {
    makeObservable(this);
  }

  @action
  setUser(info: UserInfo) {
    this.userInfo = {
      ...info
    }
  }
}

export default User;
``````

## State usage

``````
import { observer } from 'mobx-react';
import stores from '../../store';

function App() {
  const user = stores.user;
  const gotoConnect = () => {
    user.setUser({ address: 'abdulla' });
  };

  return <button onClick={gotoConnect}>home</button>;
}

// make the app component state tracable
export default observer(App);
``````


