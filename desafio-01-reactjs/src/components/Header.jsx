import style from './Header.module.css';

import logo from '../../public/assets/Logo.png'
import iconButton from '../../public/assets/iconButton.png'


export function Header () {

  return (
    <div className={style.Header}>
      <img className={style.img} src={logo} alt="" />
      <form className={style.search}>
        <input type="search" className={style.input} name="Search" id="Search" placeholder='Adicione uma nova tarefa' />
        <button type="submit" className={style.button} >Criar <img src={iconButton} className={style.iconButton} alt="" /> </button>
      </form>
    </div>
  )
}


