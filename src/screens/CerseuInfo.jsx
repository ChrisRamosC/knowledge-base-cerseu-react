import { Evaluation } from '../components/main/Evaluation';

export const CerseuInfo = () => {
    return (
        <div className="faq-container">
            <h2>¿Qué es CERSEU-FISI?</h2>
            <div className="content-container">
                <p id="mission">
                    <h4>MISIÓN</h4>
                    El Centro de Responsabilidad Social y Extensión Universitaria CERSEU - FISI, es la unidad de gestión encargada de integrar a la FISI con la comunidad, a través de la organización de actividades académicas de apoyo, programas técnicos dirigidos a la comunidad y eventos de cultura general; de esta forma de cumplir con los fines esenciales de la Universidad como son la Responsabilidad Social y la Extensión Universitaria en el marco del modelo de RSU aprobado por la Universidad.
                </p>
                <p id="general-objective">
                    <h4>OBJETIVO GENERAL</h4>
                    Impulsar y coordinar el diseño y ejecución de políticas y acciones de programas de extensión universitaria y proyección social para el fortalecimiento de una cultura institucional de articulación y solidaridad Inter disciplinaria, ofreciendo servicios de transferencia tecnológica, educación, formación, capacitación y asesoría a núcleos sociales más.
                    <br />
                    Asimismo desarrollar capacitaciones de nivel técnico relacionados con las líneas académicas de la FISI, permitiendo a la Facultad captar recursos propios para invertirlos en su desarrollo, contribuyendo activamente en el proceso de enseñanza-aprendizaje y la investigación aplicada.
                </p>
                {/* add an image */}
                <img className='faq-img' src="/img/foto-fisi.jpg" alt="" />
                <div id="specific-objectives">
                    <h4>OBJETIVOS ESPECÍFICOS DEL CERSEU-FISI</h4>
                    <ul>

                        <li>Desarrollar políticas de gestión mediante actividades de extensión universitaria de carácter solidario y comprometido con la sociedad y grupos vulnerables.</li>
                        <li>Fomentar la participación e integración de todos los miembros de la comunidad universitaria y de los colectivos y agentes sociales, culturales o de cualquier otro tipo que la integran.</li>
                        <li>Fortalecer la transparencia en los sistemas de gestión e información del CERSEU, Mediante Universidad-Sociedad.</li>
                    </ul>
                </div>

            </div>
            <p>Para conocer las historia de CERSEU-FISI visita lo siguiente: <a href="https://www.fisi.edu.pe/cerseu/">https://www.fisi.edu.pe/cerseu/</a></p>
            {/* una linea */}
            <hr />
            <Evaluation />
        </div>
    )
}
