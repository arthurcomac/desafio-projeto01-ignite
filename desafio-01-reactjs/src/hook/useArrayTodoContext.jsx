import { useContext } from "react";
import { arrayTodoContext } from "../context/arrayTodoContext";

export function useArrayTodoContext() {

  const todoPost = useContext(arrayTodoContext);

  if(todoPost === undefined) {
    throw new Error('não está dentro do contexto')
  }

  return todoPost
}