import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Galeria from "./pages/Galeria"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/galeria" element={<Galeria />}/>
        </Routes>
    )
}