import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AllUsersPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [following, setFollowing] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
        const url = `http://localhost:5000/users`;
        const promise = axios.get(url, { headers: { "Authorization": localStorage.getItem("token") } })
        promise.then((res) => {
            setUsers(res.data);
        })
        promise.catch((err) => {
            return alert(err.response.data);
        })

        const followingUrl = `http://localhost:5000/following`;
        const FPromise = axios.get(followingUrl, { headers: { "Authorization": localStorage.getItem("token") } })
        FPromise.then((res) => {
            setFollowing(res.data);
        })
        FPromise.catch((err) => {
            return alert(err.response.data);
        })
    }, []);
    console.log(users)
    console.log(following)

    function Seguir (followingId){
        alert("Seguindo")
        const id = localStorage.getItem("id");
        const url = `http://localhost:5000/following/${id}`;
        const promise = axios.post(url, {followingId: followingId});
        promise.then((res) => {
            console.log(res.data);
        });
        promise.catch((err) => {
            return alert(err.response.data);
        });
    };

    function visitarPerfil (id){
        navigate(`/profile/${id}`)
    }
    return (
        <>
            <Menu />
            <AllUserContainer>
                <FormContainer>
                    <input
                    placeholder="Buscar usuário..."
                    type="search"
                     />
                     <button>Buscar</button>
                </FormContainer>
                {users.map((u) => <UserContainer onClick={ () => visitarPerfil(u.id)}>
                    <img src={u.photo} />
                    <NomeDesc>
                        <h1>{u.name}</h1>
                        <p>{u.biography}</p>
                    </NomeDesc>
                    <button onClick={() => Seguir(u.id)}>Seguir</button>
                </UserContainer>)}

            </AllUserContainer>
        </>
    );
};

const AllUserContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #F9AABB;
    width: 100%;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
`
const FormContainer = styled.div`
    display: flex;
    margin-top: 30px;
    button {
        width: 150px;
        margin-left: 10px;
    }
    input{
        width: 830px;
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
    button{
        width: 100px;
        height: 50px;
        margin-top: 20px;
        position: absolute;
        top: 10px;
        right: 30px;
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