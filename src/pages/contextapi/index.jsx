import { useState } from "react";

import User from "../../components/User";
import UserProvider from "../../contexts/user";




// const ContextAPI = () => {

//     const [username, SetUsername] = useState("Pedro Ferreira");

//     return (
//         <div className="containerApp">
//         <h1>Context API</h1>
//         <br />
//         <User username={username} alteraUsername={SetUsername}/>
//         </div>
//     )
// }

const ContextAPI = () => {

    return (
        <UserProvider>
            <div className="containerApi">
                <div className="inside-containerApi">
                    <h1>Context API</h1>
                    <User />
                </div>
            </div>
        </UserProvider>
    )
}

export default ContextAPI;