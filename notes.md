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

---

### video and Fonts

to use video

```
Save the video in a folder.
give the video tag its address.
give these values and parent width and height.

ex:
 <video
        loop
        autoPlay
        muted
        className="h-full w-full object-cover"
        src="/public/vid.mp4"
      />

```

to add fonts

```
1. download and save in fonts folder in public.
2. use the index.css file for using the fonts
3. ex : 

        @font-face {
            font-family: font1;
            src: url(../public/fonts/Lausanne-300.woff2);
        }
        @font-face {
            font-family: font2;
            src: url(../public/fonts/Lausanne-500.woff2);
        }
```
