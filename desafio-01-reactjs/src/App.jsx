import { Header } from './components/Header';
import { ListTodo } from './components/ListTodo';
import { arrayTodoContext } from './context/arrayTodoContext'


const todoPost = [
  {content: 'item 1'},
  {content: 'item 2'},
  {content: 'item 3'},
]


function App() {

 return (
  <arrayTodoContext.Provider value={{todoPost}}>
      <Header  />
      <ListTodo />
  </arrayTodoContext.Provider>
 )
}

export default App
