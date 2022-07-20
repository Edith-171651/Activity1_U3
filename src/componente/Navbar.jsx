import { useTranslation } from "react-i18next";

const Navbar = () => {

    const { i18n } = useTranslation();

    function changeLanguage(lenguaje) {
        i18n.changeLanguage(lenguaje);
    }

    return (
        <nav>
            <div><a>Home</a></div>
            <a onClick={() => changeLanguage("en")}>Inglés</a>
            <a onClick={() => changeLanguage("es")}> Español</a>
        </nav>
    );
};
export default Navbar;