import styled from "styled-components";
import logo from "../assets/logo.png";
import txt from "../assets/logoTxt.png";

export default function Menu() {
    return (
        <MenuContainer>
            <img src={logo} alt="logo" />
            <img src={txt} alt="fomebook" />
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121210;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    height: 100px;
    img {
        width: 80px;
    }
    img:last-child{
        margin-left: 30px;
        width: 400px;
    }
`