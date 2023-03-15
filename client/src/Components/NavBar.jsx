import { useNavigate } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const navigate = useNavigate()
    return(
        // <div className="flex justify-between items-center bg-gray-900 opacity-50 h-14">
        <div className="flex justify-between items-center h-14">
            <div className="flex justify-between items-center">
                <AiOutlineMenu size='20px' color="white" className="cursor-pointer mx-5"/>
                <p className="text-white cursor-pointer mx-5 font-bold" onClick={()=> navigate("/")}>Peliculas</p>
                <p className="text-white cursor-pointer mx-5 font-bold" onClick={()=> navigate("/")}>Series</p>
            </div>
            <p className="text-white cursor-pointer text-xl font-bold">MovieLabs</p>
            <div className="flex justify-between items-center">
                <BiSearch size='20px' color='white' className="cursor-pointer" mx-5 onClick={()=> navigate("/")} />
                <p className="text-white cursor-pointer mx-5 font-bold" onClick={()=> navigate("/")}>Perfil</p>
                //Iniciar sesión 
                //Suscríbete
            </div>
        </div>
    )
}

export default NavBar;