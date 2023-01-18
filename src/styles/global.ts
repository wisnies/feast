import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
        background-color: gray;
        ::-webkit-scrollbar {
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
        }
    }
    #root {
        width: 100vw;
        overflow-x: hidden;
    }
`;
