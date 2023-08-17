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