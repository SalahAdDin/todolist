import React from "react"
import PropTypes from "prop-types"
import { Button } from "primereact/button"

const filters = ["All", "Active", "Completed"]

const Footer = ({
  tasksCount,
  activeFilter,
  removeTasks,
  removeCompleted,
  setFilter,
}) => {
  const handleOnClick = (filter) => setFilter(filter)
  const handleRemoveCompleted = () => removeCompleted()

  return (
    <div className="p-grid">
      <div className="p-col-12 p-md-3 p-lg-2" style={{ margin: "auto" }}>
        {tasksCount} items left
      </div>
      <div className="p-col-12 p-md-6 p-lg-8  p-d-flex p-justify-center">
        {filters.map((filter) => (
          <Button
            key={`filter_${filter}`}
            label={filter}
            className={
              filter === activeFilter ? "p-button-outlined" : "p-button-text"
            }
            onClick={() => handleOnClick(filter)}
          />
        ))}
      </div>
      <div className="p-col-12 p-md-3 p-lg-2">
        {removeTasks && (
          <Button
            label="Clear completed"
            className="p-button-text"
            onClick={handleRemoveCompleted}
          />
        )}
      </div>
    </div>
  )
}

Footer.propTypes = {
  activeFilter: PropTypes.string,
  removeTasks: PropTypes.bool,
  removeCompleted: PropTypes.func,
  setFilter: PropTypes.func,
  tasksCount: PropTypes.number,
}

export default Footer
