import { Navigate, Route, Routes } from "react-router-dom"
import { KnowledgeBase } from './screens/KnowledgeBase';
import { FAQ } from "./screens/FAQ";
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import './styles/styles.css';

export const CerseuApp = () => {
  return (
    <>
      <Header></Header>
      <div className='routes-container'>
        <Routes>
          <Route path="/home" element={<KnowledgeBase></KnowledgeBase>} ></Route>
          <Route path="/faq/*" element={<FAQ></FAQ>}></Route>
          <Route path="/*" element={<Navigate to='/home' />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}
