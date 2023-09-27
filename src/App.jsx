import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CreateToDo from "./components/CreateToDo"
import UpdateToDo from "./components/UpdateToDo"


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<CreateToDo></CreateToDo>}></Route>
        <Route path="/update/:id" element={<UpdateToDo></UpdateToDo>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
