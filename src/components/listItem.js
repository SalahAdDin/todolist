import React from "react"
import PropTypes from "prop-types"
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"

const ListItem = (item) => {
  return (
    <div className="product-item">
      <Checkbox
        inputId="cb1"
        // value={completed}
        // onChange={}
        // checked={}
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
        className="p-button-rounded p-button-danger p-button-text"
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
