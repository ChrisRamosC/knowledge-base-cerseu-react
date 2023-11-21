import React from 'react'
import { Evaluation } from '../components/main/Evaluation'

export const RegistrationInfo = () => {
  return (
    <div className='faq-container'>
      <h1>¿Cómo me Matriculo en un Curso?</h1>
      <p>Bienvenido a la plataforma de aprendizaje en línea de Cerseu-Fisi, donde ofrecemos una amplia gama de cursos diseñados para potenciar tus habilidades y conocimientos.  Nuestra plataforma está diseñada para proporcionar una experiencia educativa enriquecedora y flexible, permitiéndote explorar y desarrollar tus capacidades en diversos campos de estudio. <br /> A continuación, te presentamos una guía detallada sobre cómo matricularte en uno de nuestros cursos. Sigue estos sencillos pasos para comenzar tu viaje de aprendizaje y crecimiento personal con nosotros. Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactar a nuestro equipo de soporte, siempre dispuesto a ayudarte en cada paso del camino.</p>
      <h3>BÚSQUEDA DEL CURSO</h3>
      <ul>
        <li>Utilizar los métodos de navegación para encontrar el curso deseado en la plataforma de Cerseu-Fisi.</li>
      </ul>

      <h3>DETALLES DEL CURSO</h3>
      <ul>
        <li>Hacer clic en el curso específico para ver detalles adicionales, como la descripción del curso, el temario y los requisitos previos.</li>
      </ul>

      <h3>PROCESO DE MATRÍCULA</h3>
      <ul>
        <li>Buscar y hacer clic en el botón "¡Inscribirme Ahora!" en la página del curso seleccionado.</li>
        <li>Elige un aula para matircularte y sigue las instrucciones proporcionadas para completar el proceso de matriculación.</li>
        <li>Sigue los pasos para realizar el pago utilizando los métodos de pago aceptados por la plataforma.</li>
        <li>Verificar la información de matriculación y confirmar la inscripción en el curso.</li>
      </ul>

      <h3>FORMAS DE PAGO ACEPTADAS</h3>
      <div className='payment-options'>
          <img src="/img/scotiabank.png" alt="Scotiabank" />
          <img src="/img/interbank.png" alt="Interbank" />
          <img src="/img/paypal.png" alt="Paypal" />
          <img src="/img/bcp.png" alt="Banco Central del Perú" />
          <img src="/img/pichincha.png" alt="Banco Pichincha" />
      </div>

      <hr />
      <Evaluation />
    </div>

  )
}
