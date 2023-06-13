import style from './Todo.module.css';

import trash  from '../../public/assets/trash.png';

export function Todo (props) {

  return (
    <div className={style.Todo}>
      <input type="button" name="" id="" className={style.button} />
      <span className={style.span}> {props.content} </span>
      <img src={trash} className={style.trash} alt="" />
    </div>
  )
}