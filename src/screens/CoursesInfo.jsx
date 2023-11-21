import React from 'react'
import { Evaluation } from '../components/main/Evaluation'
import { CoursesCard } from '../components/main/CoursesCard'


export const Courses = () => {
    return (
        <div className="faq-container">
            <div>
                <h1>¿Qué Cursos Incluye la plataforma?</h1>
                <p>La plataforma de Cerseu-Fisi ofrece una variedad de cursos que incluyen programación web, ciencia de datos, Power BI y otros temas relacionados a la informática e ingeniería de sistemas y software.
                    Todos estos cursos sirven para desarrollar capacitaciones de nivel técnico relacionados con las líneas académicas de la FISI, permitiendo a la Facultad captar recursos propios para invertirlos en su desarrollo, contribuyendo activamente en el proceso de enseñanza-aprendizaje y la investigación aplicada.
                </p>
                <br />
                <h3>ALGUNOS CURSOS SON LOS SIGUIENTES:</h3>
                <CoursesCard />
            </div>
            <hr />
            <Evaluation></Evaluation>
        </div>
    )
}
