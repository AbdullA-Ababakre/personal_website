
## Router

[Router Official site](https://v5.reactrouter.com/web/example/basic)


## Code snippets

### Router list rendering

Tokendacne project

[Tokendance](https://v5.reactrouter.com/web/example/basic)

### 1.Using renderRouter to render router array .

``````
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routes';
import {  BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // 需要通过BrowserRouter来包裹所使用组件
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);

``````

``````
// routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import stores from './store';
const user = stores.user;

const App = React.lazy(() => import('./pages/home'));
const List = React.lazy(() => import('./pages/list'));
const TickenDetail = React.lazy(() => import('./pages/tickenDetail'));

interface RouterConfig {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  children?: RouterConfig[];
}
// 主路由
export const mainRouteConfig = [
  {
    path: '/',
    title: 'Ticken',
    component: App,
    children: [],
  },
  {
    path: '/list',
    title: '个人页',
    component: List,
    children: [],
  },
  {
    path: '/detail',
    title: '点开票',
    component: TickenDetail,
    children: [],
  },
];

const renderRouter = (routerList: RouterConfig[]) => {
  return routerList.map((item) => {
    const { path, children } = item;
    // 补一个鉴权，未登录转到首页
    return (
      <Route key={path} path={path} element={<item.component />}>
        {!!children &&
          children.map((i) => {
            return (
              <Route key={i.path} path={i.path} element={<i.component />} />
            );
          })}
      </Route>
    );
  });
};

const Routers = () => {
  return (
    <React.Suspense>
      <Routes>{renderRouter(mainRouteConfig)}</Routes>
    </React.Suspense>
  );
};

export default Routers;
``````

###  Get reqeust

encodeURIComponent

``````
let params = {
        created_at: 'desc',
        count: 'desc',
        price: 'desc'
    }

   const url = 'http://edit.atip.top/api/v1/product/list';
   
   export const fetchGetConvert = (url, params) => {
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');

    url = url + '?' + query;
    return url;
}
``````

### Passing arguments

Passing page

``````
import { useNavigate, createSearchParams } from "react-router-dom";

// in hooks
let navigate = useNavigate();

// in handler
const params = {
    tid: item.tickenAdress,
    cid: user.userInfo.address,
    hid: item.owner,
    mode: "ticket",
  };
  
 navigate({
    pathname: "/qrcode",
    search: `?${createSearchParams(params)}`,
  });
``````


### Detail page

``````
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

// in hooks
let query = useQuery();
const tid = query.get("tid");
const cid = query.get("cid");
const hid = query.get("hid");

``````

[How to Pass Data Between Pages in react-router-dom V6?](https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6)


### Route auth

