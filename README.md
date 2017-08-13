# React-Routing-v4-step-by-step
```
for react setup u can follow 
```
<h5>https://github.com/LalitTyagi/React/tree/master/React setup step by step</h5>

A fundamental piece of most web applications is routing: the ability to move between different pages based on the URL. When it comes to routing in a React-based application, instead of fetching content from the server and rendering that, we're focused on rendering React components on the client, leaving data-fetching up to the components themselves.

Routing is used to make a full fleshed single page application with React.   
This will include:
1. Router choosing
2. Routes creating
3. Navigating between routes using links


To use routing, we have to pull down React Router
Run the following command to install the React Router dependencies
```
npm install react-router-dom --save
```


React-router 4 has changed in that it no longer has children. However, with the Route  component you can render anything that matches the path.

The <Switch> will iterate over its children elements (the routes) and only render the first one that matches the current pathname.

With the new BrowserRouter components, you don’t have to worry about setting up your history

If you are using React Router, it can automatically create history objects for you, so you may never have to actually interact with history directly

By default, when you click on a <Link> from React Router, it will use history.push to navigate.
