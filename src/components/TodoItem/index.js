// Write your code here

import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="list-container">
      <p className="text">{title}</p>
      <div>
        <button type="button" className="button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
