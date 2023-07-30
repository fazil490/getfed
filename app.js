// In case of creating nested html tags like,

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

// const heading = React.createElement('h1', {
//     id: 'heading'
// }, 'Hello World from React!')

// console.log(heading); //Javascript Object
console.log(parent); //Javascript Object

const root = ReactDOM.createRoot(document.getElementById('header-container'))

root.render(parent) //Converts Javascript object to a html tag