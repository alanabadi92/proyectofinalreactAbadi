import React from 'react'
import PsicommerceLogo from '/img/enneagram.png'
import './Title.css'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className="bloqueSuperior">
        
          <ul>
            <Link to={"/"}><li className="elementoTitu"><h1 className="textoTitu" >Psicommerce</h1></li></Link>
            <Link to={"/"}><li className="elementoTitu"><img className="logoTitu" src={PsicommerceLogo} alt="Psicommerce logo" /></li></Link>
          </ul>
          
    </div>
  )
}

export default Title