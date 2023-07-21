import { useState } from 'react'
import style from './header.module.css'

import logo from '/assets/Logo.png'
import iconButton from '/assets/iconButton.png'

export function Header({actionUserNewTodo}) {
  const [contentInputHeader, setContentInputHeader] = useState("");
  
  function actionUserNewTodoinsert(event) {
    event.preventDefault()

    let newTodo = {
      content: contentInputHeader,
      checked: false
    }

    actionUserNewTodo(newTodo)

    setContentInputHeader("")
  };

  function onChangeContent(event) {
    setContentInputHeader(event.target.value)
  };

  return <div className={style.header}>
    <img className={style.img} src={logo} alt="" />
    <form
      onSubmit={actionUserNewTodoinsert}
      className={style.search}
    >
      <input
        type="search"
        onChange={onChangeContent}
        value={contentInputHeader}
        className={style.input}
        required
        name="Search"
        id="Search"
        placeholder='Adicione uma nova tarefa'
      />
      <button
        type="submit"
        className={style.button}
      >
        Criar 
        <img src={iconButton} className={style.iconButton} alt="" />
      </button>
    </form>
  </div>
}
