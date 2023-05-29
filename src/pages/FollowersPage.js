import Menu from "../components/Menu";
import styled from "styled-components";
import seguidores from "../assets/seguidores.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FollowersPage(){
        const [users, setUsers] = useState([]);
        const navigate = useNavigate();
        useEffect(() => {
            const url = `http://localhost:5000/followers`;
            const promise = axios.get(url, { headers: { "Authorization": localStorage.getItem("token") } })
            promise.then((res) => {
                setUsers(res.data);
            })
            promise.catch((err) => {
                return alert(err.response.data);
            })
        }, [])
        console.log(users)
        function visitarPerfil (id){
            navigate(`/profile/${id}`)
        }
    return (
        <>
        <Menu />
        <FollowersContainer>
            <img src={seguidores} />
            {users.map((u) => <UserContainer onClick={ () => visitarPerfil(u.id)}>
                    <img src={u.photo} />
                    <NomeDesc>
                        <h1>{u.name}</h1>
                        <p>{u.biography}</p>
                    </NomeDesc>
                </UserContainer>)}
        </FollowersContainer>
        </>
    );
};

const FollowersContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #F9AABB;
    min-height: 100vh;
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

const UserContainer = styled.div`
    margin-top: 30px;
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 1000px;
    display: flex;
    position: relative;
    img {
        width: 150px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 50%;
        margin-left: 40px;
        height: 150px;
    }
`

const NomeDesc = styled.div`
    margin-left: 50px;
    margin-top: 20px;
    h1{
        font-size: 50px;
        color: #DB5275;
    }
    p{
        margin-top: 20px;
        font-size: 20px;
        color: #F9AABB;
    }
`