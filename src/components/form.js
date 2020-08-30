import React from "react"
import PropTypes from "prop-types"
import id from "shortid"
import { useFormik } from "formik"
import { InputText } from "primereact/inputtext"

const Form = ({ oldTasksList, setTasks }) => {
  const {
    values: { task },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { task: "" },
    onSubmit: ({ task }) =>
      setTasks([...oldTasksList, { id: id.generate(), task, active: true }]),
  })

  return (
    <div className="p-fluid">
      <form className="p-field" onSubmit={handleSubmit}>
        <span className="p-input-icon-left">
          <i className="pi pi-angle-down" />
          <InputText
            id="task"
            name="task"
            type="text"
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={task}
          />
        </span>
      </form>
    </div>
  )
}

Form.propTypes = {
  oldTasksList: PropTypes.arrayOf(PropTypes.object),
  setTasks: PropTypes.func,
}

export default Form
