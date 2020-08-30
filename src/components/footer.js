import React from "react"
import PropTypes from "prop-types"
import { Button } from "primereact/button"

const filters = ["All", "Active", "Completed"]

const Footer = ({ tasksCount, activeFilter, setFilter }) => {
  const handleOnClick = (filter) => setFilter(filter)

  return (
    <div className="p-grid">
      <div className="p-col-12 p-md-4 p-lg-3">{tasksCount} items left</div>
      <div className="p-col-12 p-md-8 p-lg-9 p-justify-center">
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
    </div>
  )
}

Footer.propTypes = {
  tasksCount: PropTypes.number,
  activeFilter: PropTypes.string,
  setFilter: PropTypes.func,
}

export default Footer
