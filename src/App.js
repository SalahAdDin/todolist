import React from "react"
import { Card } from "primereact/card"
import { OrderList } from "primereact/orderlist"
import "primereact/resources/themes/nova/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import Form from "./components/form"
import ListItem from "./components/listItem"
import Footer from "./components/footer"

import logo from "./logo.svg"
import "./App.scss"

function App() {
  const [tasks, setTasks] = React.useState([])
  const [filteredTasks, setFilteredTasks] = React.useState([])
  const [filter, setFilter] = React.useState("All")
  const [leftTasks, setLeftTasks] = React.useState(0)
  const [finishedTask, setFinishedTask] = React.useState(0)

  const removeCompleted = () =>
    setTasks(tasks.filter((item) => item.active === true))

  const updateAllLists = () => {
    const activeTasks = tasks.filter((item) => item.active === true)
    const completedTasks = tasks.filter((item) => item.active === false)
    if (filter !== "All") {
      if (filter === "Completed") setFilteredTasks(completedTasks)
      else if (filter === "Active") setFilteredTasks(activeTasks)
    } else setFilteredTasks(tasks)
    setLeftTasks(activeTasks.length)
    setFinishedTask(completedTasks.length)
  }

  React.useEffect(() => {
    updateAllLists()
  }, [tasks])

  React.useEffect(() => {
    updateAllLists()
  }, [filter])

  return (
    <main
      className="p-grid p-justify-center"
      style={{ margin: "auto", marginTop: 60 }}
    >
      <Card
        className="p-col"
        header={<Form setTasks={setTasks} oldTasksList={tasks} />}
        footer={
          <Footer
            tasksCount={leftTasks}
            removeTasks={finishedTask > 0}
            removeCompleted={removeCompleted}
            activeFilter={filter}
            setFilter={setFilter}
          />
        }
      >
        <OrderList
          value={filteredTasks}
          itemTemplate={(item) => (
            <ListItem item={item} oldTasksList={tasks} setTasks={setTasks} />
          )}
          header="Work to do"
          dataKey="id"
          onChange={(e) => this.setState({ filteredTasks: e.value })}
        />
      </Card>
    </main>
  )
}

export default App
