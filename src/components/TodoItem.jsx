import React from 'react'

const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        //  Memberikan id dari todo sebagai argument
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  )
}


  const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
    },
  }

export default TodoItem