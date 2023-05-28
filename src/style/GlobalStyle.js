import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #DB5275;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        width: 500px;
        padding: 10px;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        color: #DB5275;
        :focus {
            border: 2px solid #DB5275;
            margin: 0px;
            color: #DB5275;
        }
        color: #DB5275;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 500px;
        border-radius: 5px;
    }
`

export default GlobalStyle