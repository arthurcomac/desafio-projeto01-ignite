import style from './ListTodo.module.css';
import { Todo } from './Todo'


const todoPost = [
 1,
 2,
]

export function ListTodo (props) {

// essa função serve para inserir um novo todo,
// preciso ver um estado blobal para no header o submit adicione um novo item ao array em listTodo

  function actionUserSubmitNewTodo () {

    event.preventDefault()    

    todoPost.push(3)

    console.log(todoPost)

  }
  
  return (
    <div className={style.ListTodo}>
      <div className={style.span}>
        <span className={style.tasks}>
          Tarefas criadas <span className={style.allTasks}>5</span>
        </span>
        <span className={style.ready}>
          Concluidas <span className={style.readyTasks}>2 de 5</span>
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
