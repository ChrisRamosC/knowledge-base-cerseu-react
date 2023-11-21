import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Search = () => {
    return (
        <>
            <div className="search-section">
                <div className="search-details">
                    <h1>Base de conocimientos</h1>
                    <p>Consulta nuestras preguntas frecuentes, tutoriales y otros recursos de autoayuda para encontrar las respuestas que necesitas.</p>
                    <SearchBar />
                    <br />
                    <p>POPULAR:
                        <NavLink to={"/faq"}>¿Qué es CERSEU-FISI?</NavLink>
                        <NavLink to={"/faq/registration-info"}>¿Cómo me matriculo en un curso?</NavLink>
                    </p>
                    <svg className="rectangle" xmlns="http://www.w3.org/2000/svg" width="501" height="348" viewBox="0 0 501 348" fill="none">
                        <path d="M45.3976 297.92C12.9783 294.73 -7.78213 261.887 3.24556 231.234L74.4015 33.4494C83.1497 9.13273 108.987 -4.51091 134.002 1.97675L539.777 107.216C558.464 112.062 572.692 127.235 576.329 146.195L603.598 288.35C609.892 321.164 582.849 350.8 549.597 347.529L45.3976 297.92Z" fill="url(#paint0_linear_304_4491)" fill-opacity="0.07" />
                        <defs>
                            <linearGradient id="paint0_linear_304_4491" x1="32.1633" y1="139.906" x2="487.827" y2="292.008" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A3AF4" />
                                <stop offset="1" stop-color="#3A3AF4" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

        </>

    );
}
