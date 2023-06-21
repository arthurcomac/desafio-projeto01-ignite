import style from './ListTodo.module.css';
import { Todo } from './Todo'
import {useArrayTodoContext} from '../hook/useArrayTodoContext'

export function ListTodo () {

  const {todoPost} = useArrayTodoContext();

  return (
    <div className={style.ListTodo}>
      <div className={style.span}>
        <span className={style.tasks}>
          Tarefas criadas <span className={style.allTasks}>{todoPost.length}</span>
        </span>
        <span className={style.ready}>
          Concluidas <span className={style.readyTasks}>2 de {todoPost.length}</span>
        </span>
      </div>
        {todoPost.map(todo => {
          return (
            <Todo
              content={todo.content}
            />
          )
        })}
    </div>
  )
}
