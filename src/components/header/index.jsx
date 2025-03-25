import styled from "styled-components";


const HeaderStyle = styled.header`
    background-color: #00020283;
    width: 90vw;
    display: flex;
    z-index: 10;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    border-radius: 20px;


    h1{
        color: #DEDEDE;
        letter-spacing: 3px;
        font-size: clamp(2.5rem, 2.5rem + 0.25vw, 2rem);
        text-shadow: 2px 2px 10px #000000fd;
    }

    nav ul{
        display: flex;
        gap: 24px;
        list-style: none;
    }

    nav ul li a{
        text-decoration: none;
        color: #DEDEDE;
    }

    nav ul li a:hover{
        color: #5cebe3;
    }
`

const Header = () => {
    return (

        <HeaderStyle>
            <h1>Aulas FrontPush</h1>
            <nav>
                <ul>
                    <li><a href="/">TodoList</a></li>
                    <li><a href="/contextapi">ContextAPI</a></li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}

export default Header;