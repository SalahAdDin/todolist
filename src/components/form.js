import React from "react"
import PropTypes from "prop-types"
import id from "shortid"
import { useFormik } from "formik"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

const Form = ({ oldTasksList, setTasks }) => {
  const [allActive, setAllActive] = React.useState(false)
  const {
    values: { task },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { task: "" },
    onSubmit: ({ task }, { resetForm }) => {
      setTasks([...oldTasksList, { id: id.generate(), task, active: true }])
      resetForm()
    },
  })

  React.useEffect(() => {
    const newList = oldTasksList.map((task) => {
      return { ...task, active: allActive }
    })
    setTasks(newList)
  }, [allActive])

  const handleOnClick = () => {
    setAllActive(!allActive)
  }

  return (
    <div className="p-fluid">
      <span className="p-input-icon-left">
        <Button
          icon="pi pi-angle-down"
          className="p-button-rounded p-button-success p-button-text"
          onClick={handleOnClick}
        />
        <form className="p-field" onSubmit={handleSubmit}>
          <InputText
            id="task"
            name="task"
            type="text"
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={task}
          />
        </form>
      </span>
    </div>
  )
}

Form.propTypes = {
  oldTasksList: PropTypes.arrayOf(PropTypes.object),
  setTasks: PropTypes.func,
}

export default Form
