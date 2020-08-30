import React from "react"
import { Card } from "primereact/card"
import { OrderList } from "primereact/orderlist"
// import "primereact/resources/themes/nova-light/theme.css"
import "primereact/resources/primereact.min.css"
// import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

import logo from "./logo.svg"
import "./App.css"
import Form from "./components/form"
import Footer from "./components/footer"
import ListItem from "./components/listItem"

function App() {
  const [tasks, setTasks] = React.useState([])
  const [filteredTasks, setFilteredTasks] = React.useState([])
  const [filter, setFilter] = React.useState("All")
  const [leftTasks, setLeftTasks] = React.useState(0)

  React.useEffect(() => {
    const activeTasks = tasks.filter((item) => item.active === true)
    if (filter !== "All") {
      if (filter === "Completed")
        setFilteredTasks(tasks.filter((item) => item.active === false))
      else if (filter === "Active") setFilteredTasks(activeTasks)
    } else setFilteredTasks(tasks)
    setLeftTasks(activeTasks.length)
  }, [tasks])

  return (
    <main className="p-grid p-align-start">
      <Card
        className="p-col"
        header={<Form setTasks={setTasks} oldTasksList={tasks} />}
        footer={
          <Footer
            tasksCount={leftTasks}
            activeFilter={filter}
            setFilter={setFilter}
          />
        }
      >
        {/* <OrderList
          value={filteredTasks}
          itemTemplate={<ListItem />}
          header="Work to do"
          // dataKey="id"
          // onChange={(e) => this.setState({ products: e.value })}
        /> */}
      </Card>
    </main>
  )
}

export default App
