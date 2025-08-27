### Libraries structure

tailwind
react router dom

### react router

wrapping the app.jsx into BrowserRouter.

<BrowserRouter>
    <App />
</BrowserRouter>

to implement react router first wrap the app.jsx using BrowserRouter.
then,

use Routes and Route to naviagate.

```
 <Routes >
        <Route path="/" element={<Home />} />
 </Routes>

```

here path="/" means default path and element will navigate to selected path.

This how routes are setup for diffrent pages.

If i want to navigate through links then i can use.

<Link to="/projects" >Go to projects</Link>
