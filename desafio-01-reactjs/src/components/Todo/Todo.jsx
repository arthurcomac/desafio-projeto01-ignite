import style from './todo.module.css'
import { TbTrash } from 'react-icons/tb'

export function Todo ({todo, setIsChecked, onDeleteContent}) {
  function actionUserTrashTodo () {
    onDeleteContent(todo.content);
  }
  function actionUserCheckedTodo () {
    setIsChecked(todo.content);
  }
  return (
    <div className={style.Todo}>
      <input
        type="button"
        onClick={actionUserCheckedTodo}
        className={todo.checked ? style.buttonChecked : style.buttonCheck}
      />
      <span className={todo.checked ? style.spanTodoChecked : style.spanTodo}>
        {todo.content}
      </span>
        <TbTrash
          onClick={actionUserTrashTodo}          
          alt="imagem de uma lixeira"
          className={style.trash}
        />    
    </div>
  )
}