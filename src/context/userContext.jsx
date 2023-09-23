import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "defaultUser"
})

export default userContext;