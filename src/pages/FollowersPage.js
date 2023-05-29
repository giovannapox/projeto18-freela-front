import Menu from "../components/Menu";
import styled from "styled-components";
import seguidores from "../assets/seguidores.png";

export default function FollowersPage(){
    return (
        <>
        <Menu />
        <FollowersContainer>
            <img src={seguidores} />
        </FollowersContainer>
        </>
    );
};

const FollowersContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #F9AABB;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
        margin-top: 20px;
        width: 500px;
        margin-left: 20px;
    }
`