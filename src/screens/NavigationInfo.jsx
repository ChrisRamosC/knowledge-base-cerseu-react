import { Margin } from '@mui/icons-material'
import React from 'react'

export const NavigationInfo = () => {
    return (
        <div className='faq-container'>

            <h1>¿Cómo navego para encontrar Cursos?</h1>
            <p>A continuación se presentarán los pasos a seguir para encontrar cursos en la plataforma.</p>
            <div className='navigation-list-info'>
                <ol>
                    <li className='navigation-title'> <strong>Página Principal:</strong>
                        <ul>
                            <li>Después de iniciar sesión, dirigirse a la página principal de la plataforma deL Cerseu-Fisi.</li>
                            <li>Explorar las secciones destacadas o recomendadas para descubrir cursos populares o recientemente añadidos.</li>

                        </ul>
                    </li>
                    <li className='navigation-title'><strong>Catálogo de Cursos:</strong>
                        <ul>
                            <li>Buscar el enlace o pestaña del "Catálogo de Cursos" en la barra de navegación principal.</li>
                            <li>Utilizar filtros de búsqueda, como tema, nivel de dificultad o duración del curso, para encontrar cursos específicos.</li>

                        </ul>
                    </li>
                    <li className='navigation-title'><strong>Categorías de Crusos:</strong>
                        <ul>
                            <li>Navegar por las categorías de cursos disponibles, como programación, ciencia de datos, Power BI y otras áreas temáticas ofrecidas por Cerseu-Fisi.</li>
                            <li>Seleccionar la categoría de interés para explorar los cursos relacionados con ese tema.</li>

                        </ul>
                    </li>
                    <li className='navigation-title'><strong>Barra de Búsqueda:</strong>
                        <ul>
                            <li>Utilizar la barra de búsqueda proporcionada en la plataforma para buscar cursos específicos por título, tema o instructor.</li>
                            <li>Ingresar palabras clave relevantes para obtener resultados precisos y relevantes.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <img className='navigation-image' src="/img/navigation-example.png" alt="" />
        </div>

    )
}
