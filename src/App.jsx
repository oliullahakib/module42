import axios from "axios"
import Navbar from "./components/Navbar/Navbar"
import { Suspense } from "react"
import StudentsChart from "./components/StudentsChart/StudentsChart"
import StudentsBarChart from "./components/StudentsChart/StudentsBarChart"
const studentsDataPromiss = axios.get("studentsData.json")

function App() {

  return (
    <>
    <Navbar />
    <Suspense fallback={"loding..."}>
      <StudentsChart studentsDataPromiss={studentsDataPromiss}/>
      <StudentsBarChart studentsDataPromiss={studentsDataPromiss} />
    </Suspense>
    </>
  )
}

export default App
