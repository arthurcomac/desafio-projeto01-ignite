import { Header } from './components/Header/Header'
import { ListTodo } from './components/ListTodo/ListTodo'

import { useState } from 'react'

function App() {
  const [todoPost, setTodoPost] = useState([])

  function addNewTodo(newTodo) {
    setTodoPost([...todoPost, newTodo]);
  };

  function deleteOneTodo(theTodoDelete) {
    const oneTodoTheListIsDelete = todoPost.filter(item => item.content !== theTodoDelete)
    setTodoPost(oneTodoTheListIsDelete)
  }

  function setIsChecked(content) {
    const oneTodoTheListIsUpdate = todoPost.map(item => {
      if (item.content === content) {
        item.checked = !item.checked
      }

      return item;
    })
    
    setTodoPost(oneTodoTheListIsUpdate)
  }

  return (
    <>
      <Header
        actionUserNewTodo={addNewTodo}
      />
      <ListTodo
        todoPost={todoPost}
        theTodoDelete={deleteOneTodo}
        setIsChecked={setIsChecked}
      />
    </>      
  )
}

export default App
