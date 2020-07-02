
// Global Next Styles

import '../styles/global.css'

import styled, { createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';



const Background = styled.div`
    font-size: 1em;
    text-align: center;
    color: white;
    width: 100vw;
    min-height 100vh;
    background-image: linear-gradient(to top, #1E90FF 0%, #330867 100%);
    z-index: -1 ;
`;


export default function App({ Component, pageProps }) {
    return <Background>          <CssBaseline />
        <Component {...pageProps} />
    </Background>
}