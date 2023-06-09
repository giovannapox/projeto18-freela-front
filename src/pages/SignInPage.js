import Menu from "../components/Menu";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
    const [login, setLogin] = useState({email: "", password: ""});
    const navigate = useNavigate();

    function SignIn(e){
        e.preventDefault();
        if(!login) return alert("Preencha todos os campos!");

        const url = `${process.env.REACT_APP_BD}/signin`;
        const promise = axios.post(url, login);
        console.log(promise)
        promise.then((res) => {
            alert("Login realizado com sucesso!");
            const token = `Bearer ${res.data.token}`;
            localStorage.setItem("token", token);
            navigate("/home");
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    };

    return (
        <>
        <Menu />
        <SignInContainer>
            <FormContainer>
                <img src={logo} alt="logo" />
                <form onSubmit={(e) => SignIn(e)}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={login.email}
                        onChange={(e) => setLogin({...login, email: e.target.value})}
                        required
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        value={login.password}
                        onChange={(e) => setLogin({...login, password: e.target.value})}
                        required
                    />
                    <button type="submit">Entrar</button>
                    <Link to="/cadastro">
                        Não tem uma conta? Cadastre-se agora!
                    </Link>
                </form>
            </FormContainer>
        </SignInContainer>
        </>
    );
};

const FormContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;
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
    }
    button {
        color: #FFFFFF;
    }
`

const SignInContainer = styled.div`
    padding-top: 100px;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #F9AABB;
`