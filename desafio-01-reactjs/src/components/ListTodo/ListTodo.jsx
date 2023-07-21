import style from './ListTodo.module.css';
import { Todo } from '../Todo/Todo'

export function ListTodo ({todoPost, setIsChecked, theTodoDelete}) {
  const finishedTodos = todoPost.filter(todo => todo.checked).length

  return (
    <div className={style.ListTodo}>
      <div className={style.span}>
        <span className={style.tasks}>
        Tarefas criadas <span className={style.allTasks}>{todoPost.length}</span>
        </span>
        <span className={style.ready}>
        Concluidas <span className={style.readyTasks}> {finishedTodos} de {todoPost.length}</span>
        </span>
      </div>
      {todoPost.map(todo => {
        return (
          <Todo
            key={todo.content}
            todo={todo}
            onDeleteContent={theTodoDelete}
            setIsChecked={setIsChecked}
          />
        )
      })}
    </div>
  )
}