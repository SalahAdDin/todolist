import React from "react"
import PropTypes from "prop-types"
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"

const ListItem = ({ item, oldTasksList, setTasks }) => {
  const handleOnClickRemove = (id) => {
    setTasks(oldTasksList.filter((task) => task.id !== id))
  }

  const onTaskChange = (id) => {
    setTasks(
      oldTasksList.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    )
  }

  return (
    <div className="product-item p-d-flex p-p-2 p-align-center">
      <Checkbox
        inputId="cb1"
        value={item.task}
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
  item: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    active: PropTypes.bool,
  }),
  oldTasksList: PropTypes.arrayOf(PropTypes.object),
  setTasks: PropTypes.func,
}

export default ListItem
