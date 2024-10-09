import {Routes,Route}from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Skiils from "./pages/Skiils"
import Projects from "./pages/Projects"

 function App(){
    return( 

    <Routes>
        <Route path="/"element={<Home/>}/> 
        <Route path="/About"element={<About/>}/> 
        <Route path="/con"element={<Contact/>}/> 
        <Route path="/skil"element={<Skiils/>}/> 
        <Route path="/pro"element={<Projects/>}/> 
    </Routes>
    )
}

export default App