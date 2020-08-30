import React from "react"
import PropTypes from "prop-types"
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"

const ListItem = (item) => {
  // TODO: How can i pass oldTasksList and setTask to there?
  const handleOnClickRemove = (id) => {
    //     setTasks(oldTasksList.map((task) => task.id !== id))
  }

  const onTaskChange = (id) => {
    //     setTasks(
    //       oldTasksList.map((task) =>
    //         task.id === id ? (task.active = !task.active) : task
    //       )
    //     )
  }

  return (
    <div className="product-item p-d-flex p-p-2 p-align-center">
      <Checkbox
        inputId="cb1"
        value={item.name}
        onChange={() => onTaskChange(item.id)}
        checked={!item.active}
        className="p-mr-3"
      />
      <label
        htmlFor="cb1"
        className="p-checkbox-label"
        style={{ textDecoration: !item.active ? "line-through" : "none" }}
      >
        {item.task}
      </label>
      <Button
        icon="pi pi-times"
        className="p-button-rounded p-button-danger p-button-text p-ml-auto"
        onClick={() => handleOnClickRemove(item.id)}
      />
    </div>
  )
}

ListItem.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  active: PropTypes.bool,
}

export default ListItem
