
const Navbar = () => {

    return (
        <nav>
            <div><a>Home</a></div>
            <div><a onClick={()=> cambiarLenguaje("en")}>Inglés</a></div>
            <div><a onClick={()=> cambiarLenguaje("es")}> Español</a></div>
        </nav>
    );
};
export default Navbar;