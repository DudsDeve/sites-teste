import React from 'react'
import styles from './menu.module.css'
import tractian from '../assets/tractian.png'
import SubmenuSolucoes from '../Submenu/Sensores/SubmenuSolucoes'
import TracOs from '../Submenu/TracOs/TracOs'


const Menu = () => {
  return (
    <>
    <header className={styles.header}>
      <img src={tractian}/>
      <nav>
        <ul className={styles.menuHeader}>
          <li className={styles.dropDown}><a>Soluções</a>
         
            </li> 

          <li><a>Produtos</a></li>
          <li><a>Indústrias</a></li>
          <li><a>Materiais</a></li>
          <li><a>Blog</a></li>
        </ul>
      </nav>
      <div>
        <a className={styles.client}>
          Área do cliente
        </a>
        <a className={styles.demo}>
          Demonstração
        </a>
      </div>
    </header>
    <SubmenuSolucoes/>
    <TracOs/>
    
    </>
  )
}

export default Menu