import Menu from "../components/Menu";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
    const [cadastro, setCadastro] = useState({ name: "", email: "", photo: "", biography: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    console.log(cadastro)
    function SignUp(e) {
        e.preventDefault();

        if(cadastro.password !== confirmPassword) return alert ("As senhas não coincidem");

        const url = `${process.env.REACT_APP_BD}/signup`;
        const promise = axios.post(url, cadastro);
        console.log(promise)
        promise.then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    };

    return (
        <>
            <Menu />
            <SignUpContainer>
                <FormContainer>
                    <img src={logo} alt="logo" />
                    <form onSubmit={(e) => SignUp(e)}>
                        <input
                            placeholder="Nome"
                            type="text"
                            value={cadastro.name}
                            onChange={(e) => setCadastro({ ...cadastro, name: e.target.value })}
                            required
                        />
                        <input
                            placeholder="E-mail"
                            type="email"
                            value={cadastro.email}
                            onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Foto de Perfil"
                            type="url"
                            value={cadastro.photo}
                            onChange={(e) => setCadastro({ ...cadastro, photo: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Biografia"
                            type="text"
                            value={cadastro.biography}
                            onChange={(e) => setCadastro({ ...cadastro, biography: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Senha"
                            type="password"
                            value={cadastro.password}
                            onChange={(e) => setCadastro({ ...cadastro, password: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Confirme a senha"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value )}
                            required
                        />
                        <button type="submit">Cadastrar</button>
                        <Link to="/">
                            Já tem uma conta? Entre agora!
                        </Link>
                    </form>
                </FormContainer>
            </SignUpContainer>
        </>
    );
};

const FormContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    margin-bottom: 50px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    width: 800px;
    img {
        margin-top: 30px;
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

const SignUpContainer = styled.div`
    padding-top: 100px;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #F9AABB;
`