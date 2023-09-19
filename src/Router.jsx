import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Galeria from "./pages/Galeria"
import Agendamento from "./pages/Agendamento"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/galeria" element={<Galeria />}/>
            <Route path="/agendamento" element={<Agendamento />}/>
        </Routes>
    )
}