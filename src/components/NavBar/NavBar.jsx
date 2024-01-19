import React from 'react'
import PsicommerceLogo from '/img/enneagram.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className="barraNav">
        <ul>
            <Link to={`/`}><li className="elementoNav"><img className="logoNav" src={PsicommerceLogo} alt="Psicommerce logo" /></li></Link>
            <Link to={`/category/Tests`}> <li className="elementoNav">Tests</li></Link>
            <Link to={`/category/Cursos`}> <li className="elementoNav">Cursos</li></Link>
            <Link to={`/category/Suscripciones`}> <li className="elementoNav">Suscripciones</li></Link>
            <Link to={`/cart`}> <li className="elementoNav"><CartWidget/></li></Link>
        </ul>
    </div>
  )
}

export default Nav