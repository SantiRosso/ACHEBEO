const SecundaryButton = ({name, onClick, route}) => {

    const handleClick = () => {
        if(route){
            navigate(route)
        } else {
            onClick()
        }
    }

    return(
        <button 
        onClick={handleClick} 
        className="bg-gradient-to-r from-purple-900 to-pink-400 m-1 text-white py-2 px-7 rounded-md hover:bg-gradient-to-r hover:from-black hover:to-black hover:outline hover:outline-2 hover:outline-purple-500 font-bold">
            {name}
        </button>
    )
}

export default SecundaryButton;