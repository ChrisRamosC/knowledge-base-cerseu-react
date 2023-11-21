
export const CoursesCard = () => {
    const courses = [
        {
            image: 'course-excel.jpg',
            name: 'EXCEL',
            stars: 4.5,
            description: 'El curso está pensado analíticamente para brindarte todos los conocimientos necesarios para que seas un experto. Empezaras desde básico hasta llegar el nivel avanzado. Con Excel podrás realizar desde cálculos básicos, llevar un inventario, como también el dominar todas las funciones y fórmulas que son necesarias para triunfar en el mercado laboral.',
            hours: 36,
            weeks: 10,
            students: 100,
            color: '#b2dfdb' // verde pastel
        },
        {
            image: 'course-sqlserver.jpg',
            name: 'SQL SERVER',
            stars: 4.2,
            description: 'Lenguaje de base de datos estructuras SQL y la posterior implementación de base de datos en el motor de base de datos MSSQL haciendo uso del DBMS SQL Server Management Studio, así como también haciendo uso detransact SQL. Se desarrolla la teoría que dio origen a la base de datosestructuras SQL, el uso actual en el análisis y aplicaciones empresariales.',
            hours: 36,
            weeks: 12,
            students: 80,
            color: '#ffcdd2' // rosa pastel
        },
        {
            image: 'course-powerbi.jpg',
            name: 'POWER BI',
            stars: 4.7,
            description: 'El objetivo fundamental del curso es brindar a los participantes las habilidades esenciales para manejar esta herramienta para el análisis de datos de la información de la empresa, y poder convertirlos en información útil que los ayude en la toma de decisiones empresariales.',
            hours: 36,
            weeks: 10,
            students: 120,
            color: '#ffe0b2' // naranja pastel
        },
        {
            image: 'course-javascript.jpg',
            name: 'JAVA SCRIPT',
            stars: 4.7,
            description: 'La iniciación en el lenguaje de programación interpretado más usado en la actualidad, con el cual es posible crear aplicaciones de todo tipo. Usaremos diferentes tecnologías de integración para su desarrollo, entenderás los fundamentos, así como los casos prácticos para luego elaborar diferentes proyectos con el docente.',
            hours: 36,
            weeks: 16,
            students: 120,
            color: '#fff176' // amarillo pastel en hexadecimal
        },
        {
            image: 'course-java.png',
            name: 'JAVA',
            stars: 4.7,
            description: 'Java es uno de los lenguajes de programación más utilizados en el mundo. Ofrece ventajas como poder programar orientado a objetos (POO), lo que permite reutilizar código. Esto junto a su arquitectura neutral, la compatibilidad con múltiples plataformas, el nivel alto de seguridad y sus buenas prácticas de codificación, hace que Java sea elegido para desarrollar diferentes productos.',
            hours: 36,
            weeks: 16,
            students: 120,
            color: '#ff5252' // rojo pastel en hexadecimal
        },
        {
            image: 'course-python.jpg',
            name: 'PYTHON',
            stars: 4.7,
            description: 'Al finalizar este curso desde cero se aprenderá el poderoso y robusto lenguaje de programación Python, el cual es de amplio uso en el ambiente empresarial para desarrollo de sistemas de información y productos de Software. Lenguaje orientado a Objetos y el cual su uso es cada vez más solicitado en el mercado.',
            hours: 36,
            weeks: 12,
            students: 120,
            color: '#c5e1a5' // verde lima paste en hexadecimal
        },
        {
            image: 'course-spss.png',
            name: 'SPSS',
            stars: 4.7,
            description: 'Analiza, procesa, interpreta y administra información estadística, utilizando software de productividad para resolver problemas numéricos y de toma de decisiones, inherentes a su formación académica, laboral y de la investigación científica; mediante un software de análisis estadístico, demostrando creatividad, criticidad y cuidado en los resultados obtenidos',
            hours: 36,
            weeks: 5,
            students: 120,
            color: '#b2dfdb' // celesta pastel en hexadecimal
        },
        {
            image: 'course-ofimatica.jpg',
            name: 'OFIMÁTICA',
            stars: 4.7,
            description: 'Permite optimizar, automatizar mejorando así los procedimientos y tareas relacionadas de oficina. Ayuda a generar informes para la toma de decisiones acreditando la productividad en el desarrollo del manejo de actividades.',
            hours: 36,
            weeks: 10,
            students: 120,
            color: '#ffe0b2' // naranja pastel en hexadecimal
        }
    ];

    return (
        <div className='courses-container'>
            <div className='courses-cards'>
                {
                    courses.map((course, index) => (
                        <div className='course-card' key={index} style={{ backgroundColor: `${course.color}80` }}>
                            <div className='course-image'>
                                <img src={`/courses/${course.image}`} alt={course.name} />
                            </div>
                            <div className='course-info'>
                                <div className="course-general">
                                    <div className='course-name'>
                                        <h3>{course.name}</h3>
                                    </div>
                                    <div className='course-stars'>
                                        <span><i className='fas fa-star'></i>{course.stars} </span>
                                    </div>
                                </div>
                                <div className='course-description'>
                                    <p>{course.description}</p>
                                </div>
                                <div className='course-details'>
                                    <span><i className='far fa-clock'></i> {course.hours} horas</span>
                                    <span><i className='far fa-calendar-alt'></i> {course.weeks} semanas</span>
                                    <span><i className='fas fa-users'></i> {course.students} estudiantes</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>



    )
}
