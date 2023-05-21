- CSS Frameworks
    - Bootstrap/MaterialUI

# React Router/Routing
- `Client side rendering/Server side rendering`
    - Server Side Rendering
        - I case of anchor tag `<a />` OR a `page refresh`, request goes to the server
        - There would be a `logic/controller` responsible to process this request.
    - Client Side Rendering
        - `History API`, this is provided by the browser
            - `window.history.pushState(data,title,url)`, no network request would be made.
            - Above only changes the URL, webpage won't actually refresh on it's own.
            - React provides `React Router` for this, to listen on URL changes
            - Does the re-rendering and other stuff.
        - Says without sending a server request, by changing the URL and state, we can render different data
        - Example - `linkedin.com/notifications`
        - On reloading the page the state/updated URL would persist. 

- Two parts to an endpoint, static part and dynamic part.
- `window.location`
    - Info. like `pathname/search/href/hash`
    - Any changes hit the server.
- Hash `#`, browser navigates to a particular URL via hashes. Without the need of any JS.
    - Hash does not go to the server.
    - Comes after the query part of URL.

- `URLSearchParams(window.location.search)`
    - const searchParam = URLSearchParams(window.location.search);
    - searchParam.get('searchField');
    - searchParam.set('searchField','searchValue');
    - Will hit the server.


## React Router
- install react router
    - `npm install react-router-dom --save`
    - Using `--save` would also update the package.json file 

- Create a router, with routes defined
```
const router = createBrowserRouter([{
    path: '/',
    element: '<App />'
},
    path: '/contact',
    element: '<Contact />'
])
```
- <RouterProvider router={router} />

- Different components would get rendered depending upon the route we hit.
- <Link to="/contact" />; this Link component is provided via React, no network call will be made.

- `useParams()` hook, can query any param mentioned in the router.
- `useNavigate()` hook, navigate to route/new URL
    - Details like state can also be passed.

- `location.state`