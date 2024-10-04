
import { Outlet } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Rodape from "./Componentes/Rodape";

function App() {
    return(
        <>
        <Navbar />
        <Outlet />
        <Rodape />
        </>
    )
}

export default App;