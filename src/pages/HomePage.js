import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
        const url = `http://localhost:5000/home`;
        const promise = axios.get(url, { headers: { "Authorization": localStorage.getItem("token") } })
        promise.then((res) => {
            setPosts(res.data);
        })
        promise.catch((err) => {
            return alert(err.response.data);
        })

        const urlUser = `http://localhost:5000/user`;
        const promiseUser = axios.get(urlUser, { headers: { "Authorization": localStorage.getItem("token") } })
        promiseUser.then((res) => {
            setUser(res.data);
            const id = res.data.id;
            console.log(id);
            localStorage.setItem("id", id);
        })
        promiseUser.catch((err) => {
            return alert(err.response.data);
        })
    }, []);
    console.log(posts);
    console.log(user);
    return (
        <>
            <Menu />
            <HomePageContainer>
                <SideBar>
                    <img src={user.photo} />
                    <h1>{user.name}</h1>
                    <p>{user.biography}</p>
                    <Link to="/following"><button>Seguindo</button></Link>
                    <Link to="/followers"><button>Seguidores</button></Link>
                    <Link to="/allusers"><button>Buscar usuários</button></Link>
                    <Link to="/newpost"><button>Novo Post</button></Link>
                </SideBar>
                <PostsContainer>
                    {posts.map((p) => <PostContainer>
                        <img src={p.image} />
                        <LikeTime>
                            <p><ion-icon name="heart-outline"></ion-icon> {p.likes} pessoas curtiram sua foto!</p>
                            <p>{dayjs(p.postedAt).format('DD/MM/YYYY [às] HH:mm')}</p>
                        </LikeTime>
                        <h1>{p.postDescription}</h1>
                    </PostContainer>)}

                </PostsContainer>


            </HomePageContainer>
        </>
    );
};

const HomePageContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    padding-top: 100px;
    height: 100%;
    display: flex;
    background-color: #F9AABB;
`;

const SideBar = styled.div`
    margin-left: 150px;
    margin-top: 50px;
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-bottom: 30px;
    img {
        margin-top: 20px;
        border-radius: 50%;
        width: 200px;
    }
    p{
        margin-top: 20px;
        color: #F9AABB;
        font-size: 20px;
        margin-bottom: 40px;
    }
    button{
        width: 200px;
        margin-bottom: 20px;
    }
    h1{
        margin-top: 20px;
        color: #DB5275;
        font-size: 40px;
    }
`

const PostsContainer = styled.div`
    margin-top: 20px;
    margin-left: 600px;
    margin-bottom: 20px;
    width: 1000px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        margin-top: 5px;
        font-size: 20px;
        margin-left: 25px;
    }
`
const PostContainer = styled.div`
    background-color: #FFFFFF;
    margin-top: 30px;
    padding-bottom: 20px;
    width: 900px;
    border-radius: 30px;
    color: #DB5275;
    display: flex;
    justify-content: center;
    flex-direction: column;
    img{
        border-radius: 10px;
        width: 850px;
        margin-left: 25px;
        margin-top: 20px;
    }
`

const LikeTime = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    p{
        margin-left: 25px;
        margin-right: 28px;
    }
`