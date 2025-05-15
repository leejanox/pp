import { Routes, Route } from "react-router-dom"
import Page from "@pages/page"
import Demo1 from "@previews/Demo1"
import Demo2 from "@previews/Demo2"
import Demo3 from "@previews/Demo3"


const Approuter = () => {
  return (
    <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/demo1" element={<Demo1/>}/>
        <Route path="/demo2" element={<Demo2/>}/>
        <Route path="/demo3" element={<Demo3/>}/>
        <Route path="*" element={<Page/>}/>
    </Routes>
  )
}

export default Approuter