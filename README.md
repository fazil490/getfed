# NReact 🚀

# Parcel

    - Dev Build
    - Local Server
    - HMR (Hot Module Replacement)
    - File Watching Algorithm
    - Caching (Builds Faster)
    - Image Optimisation
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling
    - Diagnostics
    - Error Handling
    - Tree Shaking

# Hello World using Javascript

    <!-- <script>
        const heading = document.createElement('h1')
        heading.innerHTML = 'Hello World using JavaScript!'

        const header = document.getElementById('header-container')
        header.appendChild(heading)
    </script> -->

# Hello World using React

    <!-- <script>
        const heading = React.createElement('h1', {}, 'Hello World from React!')
        const root = ReactDOM.createRoot(document.getElementById('header-container'))
        root.render(heading)

    </script> -->

# Hello World using React in app.js

    const heading = React.createElement('h1', {}, 'Hello World from React')
    const root = ReactDOM.createRoot(document.getElementById('header-container'))
    root.render(heading)

# In case of creating nested html tags like,

    /* <div id="parent">
        <div id="child">
            <h1>This is an H1 Tag</h1>
        </div>
    </div>  */

    const parent = React.createElement('div', {
            id: 'parent'
        },
        [React.createElement('div', {
                    id: 'child'
                },
                [React.createElement('h1', {}, 'This is an H1 Tag'),
                    React.createElement('h2', {}, 'This is an H2 Tag')
                ]
            ),
            React.createElement('div', {
                    id: 'child2'
                },
                [React.createElement('h1', {}, 'This is an H1 Tag'),
                    React.createElement('h2', {}, 'This is an H2 Tag')
                ]
            )
        ]
    )

    const root = ReactDOM.createRoot(document.getElementById('header-container'))

    root.render(parent) //Converts Javascript object to a html tag

# ReactElement Using JSX

    const heading = (
    <h1 className="heading">Hi There, FAZIL here from NReact🚀</h1>
    );

# React Functional Component

    const HeadingComponent = () => (
    <div id="container">
    {heading}
    <h1>React Component is here for you👋🔥</h1>
    </div>
    );

# Food Delivery App
    - Header
        - Navbar
        - NavLists
    - Main
        - Restaurant Container
            - Restaurant Cards
    - Footer
        - Social Links
        - Copyright
        - Links
        - Address
        - Contact

# React Hooks
    - useState()
    - useEffect()
    - useRouteError()

# Routing
    - npm react-router-dom
    - {createBrowserRouter, RouterProvider}
    - {Outlet}
    - {Link}
    - {useRouteError} 
    - {useParams}

# Types of Routing
    - server side routing (recommended for react, component based routing, single page application)
    - client side routing (traditional routing using anchor tags linking between index.html, about.html etc)

# Class Based Components - LifeCycle
    - Render Phase 👇
    - Parent Constructor
    - Parent Render

        - FirstChild Constructor
        - FirstChild Render
        - SecondChild Constructor
        - SecondChild Render

        - Commit Phase 👇
        - FirstChild componentDidMount
        - SecondChild componentDidMount

    - Parent componentDidMount

# ComponentDidUpdate()
    - This method works when any changes occurs like useEffect()

# ComponentWillUnmount()
    - This method works when the components are unmounted or when we used to route to other components.

# Single Responsibility Principle
    - Use Custom Hooks
    - Make sure the component is working only on a rendering process not on the fetching or any data process.

# Higher Order Component
    - Higher Order Component is a function that took a component as an argument modify it and return a new component.
    - const functionName = (input) => {
        return() => {
            return(JSX)
        }
    };

# Context 
    - Context API allows to pass in data through any components.
    - createContext({}) - to create a context
    - useContext(contextName) - to use a context

# Redux Toolkit and React-Reduc
    - Create a redux store
    - Create Slices inside a store
    - Reducers and Actions
    - Subscribing to the store using useSelector() hook
    - Dispatch an action on event handler using useDispatch() hook

# Types of Testing
    - Unit Testing
    - Integeration Testing
    - End-to-End Testing

# Setting up Testing
    - Install React Testing Library
    - Install Jest
    - Install Babel 
    - Configure Babel
    - Configure parcel file to disable default babel transpilation
    - Jest configuration
    - Install jsdom library
    - Install @babel/preset-react
    - Include @babel/preset-react in babel.config file - to support JSX in the test cases
    - @testing-library/jest-dom - to render 
    - watch-test : jest --watch = to run the test continously