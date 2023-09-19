import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props)
        console.log("Parent Cons");
    }

    componentDidMount() {
        console.log("Parent cdm");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
            <UserClass />
        </div>
        )
    }
}

export default About;