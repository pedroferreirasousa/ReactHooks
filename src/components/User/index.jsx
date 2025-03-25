
import { UserContext } from "../../contexts/user";
import { useContext } from "react";

// const User = (props) => {
//     return (
//         <div>
//             <h1>Meu username é: {props.username}</h1>
//             <br />
//             <button onClick={
//                 () => { props.alteraUsername('GalãDeNovela') }}>
//                 Alterar o Username
//             </button>
//         </div>
//     );
// };

const User = () => {

    const { username, setUsername } = useContext(UserContext);



    return (
        <div className="containerUser">
            <h1>Meu username é: {username}</h1>
            <br />
            <button onClick={() => {setUsername('@_pedrofsousa')}}>Relevar username </button>
        </div>
    );
};

export default User;