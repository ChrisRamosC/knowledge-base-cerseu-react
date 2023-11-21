import { CerseuInfo } from './CerseuInfo';
import '../styles/FAQ.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Courses } from './CoursesInfo';
import { LoginInfo } from './LoginInfo';
import { RegistrationInfo } from './RegistrationInfo';
import { NavigationInfo } from './NavigationInfo';
import { SideBar } from '../components/sidebar/SideBar';

export const FAQ = () => {
    return (
        <div className='faq-container-general' style={{ display: 'flex' }}>
            <SideBar />
            <Routes>
                <Route path="/" element={<Navigate to="cerseu-info" />} />
                <Route path="cerseu-info" element={<CerseuInfo></CerseuInfo>} />
                <Route path="courses-info" element={<Courses></Courses>} />
                <Route path="registration-info" element={<RegistrationInfo></RegistrationInfo>} />
                <Route path="navigation-info" element={<NavigationInfo></NavigationInfo>} />
                <Route path="login-info" element={<LoginInfo></LoginInfo>} />
            </Routes>
        </div>
    )
}
