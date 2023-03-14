import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return(
        <div className="flex justify-between items-center bg-gray-900 opacity-50 h-10">
            <div className="flex justify-between">
                <button className="cursor-pointer mx-5 text-white">Desplegable</button>
                <p className="text-white cursor-pointer mx-5" onClick={()=> navigate("/")}>Peliculas</p>
                <p className="text-white cursor-pointer mx-5" onClick={()=> navigate("/")}>Series</p>
            </div>
            <p className="text-white cursor-pointer">Title</p>
            <div className="flex justify-between">
                <p className="text-white cursor-pointer mx-5" onClick={()=> navigate("/")}>Search</p>
                <p className="text-white cursor-pointer mx-5" onClick={()=> navigate("/")}>Perfil</p>
            </div>
        </div>
    )
}

export default NavBar;