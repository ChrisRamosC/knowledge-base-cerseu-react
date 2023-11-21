import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navigationData = [
        {
            id: 1, icon: 'icons/icon-faq.png', color: '#B9FFB8', title: 'Preguntas Frecuentes (FAQs)', content: [
                { id: 1, title: '¿Qué es CERSEU-FISI?', route: '/faq/cerseu-info' },
                { id: 2, title: '¿Qué cursos incluye la plataforma?', route: '/faq/courses-info' },
                { id: 3, title: '¿Cómo puedo acceder a la plataforma?', route: '/faq/login-info' },
                { id: 4, title: '¿Cómo navego por el LMS para encontrar los cursos?', route: '/faq/navigation-info' },
                { id: 5, title: '¿Cómo me matriculo en un curso?', route: '/faq/registration-info' }
            ]
        },
        {
            id: 2, icon: 'icons/icon-info.png', color: '#E0FFB8', title: 'Información General', content: [
                { id: 1, title: 'Historia y contexto histórico de CERSEU-FISI', route: '#' },
                { id: 2, title: 'Política de privacidad y seguridad', route: '#' },
                { id: 3, title: 'Documentos legales', route: '#' },
                { id: 4, title: 'Información corporativa', route: '#' }
            ]
        },
        {
            id: 3, icon: 'icons/icon-matricula.png', color: '#FFB8CD', title: 'Matrícula y Costos', content: [
                { id: 1, title: 'Proceso de matrícula', route: '#' },
                { id: 2, title: 'Información sobre costos y opciones de pago', route: '#' }
            ]
        },
        {
            id: 4, icon: 'icons/icon-book.png', color: '#B8FFFB', title: 'Información de lo cursos', content: [
                { id: 1, title: 'Información del cursos', route: '#' },
                { id: 2, title: 'Políticas del cursos', route: '#' },
                { id: 3, title: 'Información sobre profesores', route: '#' },
                { id: 4, title: 'Calendario académico', route: '#' },
            ]
        },
        {
            id: 5, icon: 'icons/icon-soporte.png', color: '#FFDAB8', title: 'Recursos y Soporte', content: [
                { id: 1, title: 'Guías de usuario', route: '#' },
                { id: 2, title: 'Recursos de apoyo al estudiante', route: '#' },
                { id: 3, title: 'Información de contacto', route: '#' },
            ]
        },
        {
            id: 6, icon: 'icons/icon-testimonio.png', color: '#DBB8FF', title: 'Testimonios', content: [
                { id: 1, title: 'Testimonios de estudiantes', route: '#' },
                { id: 2, title: 'Testimonios de docentes', route: '#' },
            ]
        },
        {
            id: 7, icon: 'icons/icon-tecnicos.png', color: '#B9FFB8', title: 'Requisitos Técnicos', content: [
                { id: 1, title: 'Requisitos técnicos para acceder y utilizar el LMS', route: '#' },
            ]
        },
    ];

    return (
        <div className='sidebar-container'>
            <button className='sidebar-button' onClick={toggleSidebar}>
                {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
            </button>
            {isOpen && (
                <Sidebar>
                    <Menu
                        menuItemStyles={{
                            button: {
                                [`&.active`]: {
                                    backgroundColor: '#13395e',
                                    color: '#b6c8d9',
                                },
                            },
                        }}
                    >
                        {navigationData.map((nav) => (
                            <SubMenu key={nav.id} label={nav.title}>
                                {nav.content.map((item) => (
                                    <MenuItem className='menu-item' component={
                                        <Link to={item.route}>
                                        </Link>
                                    }>{item.title}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        ))}


                    </Menu>
                </Sidebar>
            )}
        </div>
    );
};
