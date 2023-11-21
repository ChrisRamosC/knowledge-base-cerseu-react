
export const Footer = () => {
    return (
        <>
            <div className="footer-container" >
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1C1E53" }}
                >
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Links */}
                        <section className="">
                            {/*Grid row*/}
                            <div className="row">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        ¿Aún tiene preguntas? Estamos aquí para ayudarle.
                                    </h6>
                                    <p>
                                        Chatee con nuestro equipo de asistencia haciendo clic en el botón de chat. Estamos aquí para ayudarle.
                                    </p>
                                    {/* Add a support chat button */}
                                    <button type="button" className="btn btn-outline-light btn-rounded">
                                        <i className="fas fa-comments"></i> Chat de soporte
                                    </button>
                                </div>
                                {/* Grid column */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}

                                {/* Grid column */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                                    <p><i className="fas fa-home mr-3"></i> Calle Germán Amézaga s/n - Lima</p>
                                    <p><i className="fas fa-envelope mr-3"></i> cursoscerseu.fisi@unmsm.edu.pe</p>
                                    <p><i className="fas fa-phone mr-3"></i> +51 932 040 688</p>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Redes sociales</h6>

                                    {/* Facebook */}
                                    <a
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#3b5998" }}
                                        href="https://www.facebook.com/cerseu.sistemas"
                                        role="button"
                                        target="_blank"
                                    ><i className="fab fa-facebook-f"
                                    ></i
                                        ></a>

                                    {/* Instagram */}
                                    <a
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#ac2bac" }}
                                        href="https://www.instagram.com/cerseu.sistemas"
                                        target="_blank"
                                        role="button"
                                    ><i className="fab fa-instagram"></i
                                    ></a>

                                    {/* Linkedin */}
                                    <a
                                        className="btn btn-primary m-1"
                                        style={{ backgroundColor: "#0082ca" }}
                                        href="https://www.linkedin.com/company/cerseu-sistemas-unmsm/"
                                        target="_blank"
                                        role="button"
                                    ><i className="fab fa-linkedin-in"></i
                                    ></a>

                                    {/* Whatsapp */}
                                    <a
                                        className="btn btn-primary m-1"
                                        style={{ backgroundColor: "#25d366" }}
                                        href="https://bit.ly/wspcerseufisi"
                                        target="_blank"
                                        role="button"
                                    ><i className="fab fa-whatsapp"></i
                                    ></a>
                                    {/* Catalog (PDF) */}
                                    <a
                                        className="btn btn-primary m-1"
                                        style={{ backgroundColor: "#FFB8CD" }}
                                        href="https://drive.google.com/file/d/1dunInlnf7dq0Jgnik0aza2rCXjjCv50g/view"
                                        target="_blank"
                                        role="button"
                                    ><i className="fas fa-file-pdf"></i
                                    ></a>
                                </div>
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/* Section: Links */}
                    </div>
                    {/* Grid container */}

                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2023 Copyright:
                        <a className="text-white" href="https://sistemas.unmsm.edu.pe/site/cerseu" target="_blank"
                        >CERSEU-FISI</a
                        >
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </div>
            {/* End of .container */}
        </>
    )
}
