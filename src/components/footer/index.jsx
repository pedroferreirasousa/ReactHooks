import styled from "styled-components";


const FooterStyle = styled.footer`
    background-color: #00020283;
    width: 100vw;
    display: flex;
    z-index: 10;
    height: 6vh;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    border-radius: 20px;
    
    p{
        color: #dedede;
    }

    p a{
        text-decoration: none;
    }

    span{
        color: #12e0d696;
    }
    `



const Footer = () =>{
    return (
        <FooterStyle>
            <p>Projeto de Estudo. Desenvolvido por <a target="__blank" href="https://github.com/pedroferreirasousa"><span>Pedro Ferreira</span></a>. de acordo com o curso FrontPush</p>
        </FooterStyle>
    )
}

export default Footer;