import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    ol, ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        -webkit-font-smothing: antialiased;
        -moz-osx-font-smothing: grayscale;
        background-color: #F6D8AE;
        ::-webkit-scrollbar {
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
        }
    }
    #__next {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;
