import style from './Todo.module.css'

import { TbTrash } from 'react-icons/tb'

import { useState } from 'react';

export function Todo (props) {
  const [isCheck, setIsCheck] = useState(false)

  function actionUserButtonChecked () {

    console.log('checked')
    setIsCheck(!isCheck)

  }

  function actionUserTrashTodo () {
    console.log('trash')
  }

  return (
    <div className={style.Todo}>
      <input
        type="button"
        onClick={actionUserButtonChecked}
        className={isCheck ? style.buttonChecked : style.button}
      />
      <span className={isCheck ? style.spanChecked : style.span}>
        {props.content}
      </span>
        <TbTrash
          onClick={actionUserTrashTodo}          
          alt="imagem de uma lixeira"
          className={style.trash}
        />    
    </div>
  )
}