import Menu from "../components/Menu";
import styled from "styled-components";
import logo from "../assets/logo.png";
import novoPost from "../assets/novopost.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewPostPage() {
    const [post, setPost] = useState({image: "", postDescription: ""});
    const navigate = useNavigate();

    function NovoPost (e){
        e.preventDefault();
        if(!post) return alert("Preencha os campos abaixo");
        if (!localStorage.getItem("token")) {
            navigate("/");
        }

        const url = "http://localhost:5000/newpost";
        const promise = axios.post(url, post, { headers: { "Authorization": localStorage.getItem("token") } });
        promise.then(() => {
            alert("Post criado com sucesso!");
            navigate("/home");
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    };
    return (
        <>
            <Menu />
            <NewPostContainer>
                <img src={novoPost} />
                <FormContainer>
                    <img src={logo} alt="logo" />
                    <form onSubmit={(e) => NovoPost(e)}>
                        <input
                            placeholder="Imagem"
                            type="url"
                            value={post.image}
                            onChange={(e) => setPost({ ...post, image: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Descrição"
                            type="text"
                            value={post.postDescription}
                            onChange={(e) => setPost({ ...post, postDescription: e.target.value })}
                            required
                        />
                        <button type="submit">Criar Novo Post</button>
                        <Link to="/home">
                            Voltar para o perfil
                        </Link>
                    </form>
                </FormContainer>
            </NewPostContainer>
        </>
    );
};

const NewPostContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #F9AABB;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        margin-top: 20px;
        font-size: 100px;
        color: #DB5275;
    }
    img {
        margin-top: 20px;
        width: 500px;
        margin-left: 20px;
    }
`

const FormContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    padding-bottom: 100px;
    margin-bottom: 300px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    width: 800px;
    img {
        margin-top: 50px;
        width: 100px;
        margin-bottom: 30px;
    }
    a{
        margin-top: 10px;
        text-decoration: none;
        color: #DB5275;
        font-size: 20px;
    }
    button {
        color: #FFFFFF;
    }
`