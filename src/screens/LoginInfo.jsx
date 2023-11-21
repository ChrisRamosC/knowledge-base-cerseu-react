import { Evaluation } from "../components/main/Evaluation";

export const LoginInfo = () => {
    return (
        <div className="faq-container">
            <h1>¿Cómo puedo Acceder a la Plataforma?</h1>
            <p>Es necesario estar registrado en la plataforma para matricularte en los cursos, sin embargo, como invitado puedes visualizar el temario, horarios y demás datos de los cursos dictados en el CERSEU-FISI. <br /> A continuación, se muestran los pasos para crearse una cuenta e iniciar sesión.</p>
            <div className="content-container">
                <div className="register-info">
                    <h3>Registro y Creación de Cuenta:</h3>
                    <ul>
                        <li>Acceder al sitio web oficial de Cerseu-Fisi.</li>
                        <li>Hacer clic en el botón de "Registro" o "Crear Cuenta".</li>
                        <li>Completar el formulario de registro con la información personal requerida.</li>
                        <li>Verificar la dirección de correo electrónico proporcionada durante el registro.
                        </li>
                    </ul>
                </div>
                <div className="login-info">
                    <h3>Inicio de Sesión:</h3>
                    <ul>
                        <li>Una vez que se haya verificado la cuenta, visitar la página de inicio de sesión.</li>
                        <li>Ingresar la dirección de correo electrónico y la contraseña asociada con la  cuenta.</li>
                        <li>Hacer clic en el botón de "Iniciar Sesión" para acceder a la plataforma.</li>
                    </ul>
                </div>

                <img className="faq-img" src="/img/login-image.png" alt="" />
            </div>

            <div className="additional-buttons">
                Ahora, puedes registrarte o Iniciar sesión, si ya estás registrado, haciendo click en los respectivos botones que están debajo.
                <div className="buttons">
                    <button className="btn btn-primary">Regístrate</button>
                    <button className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </div>
            <hr />
            <Evaluation></Evaluation>
        </div>
    )
}
