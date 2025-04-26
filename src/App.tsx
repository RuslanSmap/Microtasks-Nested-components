// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./site/Header.tsx";
import {Body} from "./site/Body.tsx";
import {Footer} from "./site/Footer.tsx";

function App() {
    return (
        <>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </>
    )
}

export default App
