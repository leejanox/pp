import { Routes, Route } from "react-router-dom"
import Page from "./pages/page"

const Approuter = () => {
  return (
    <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="*" element={<Page/>}/>
    </Routes>
  )
}

export default Approuter