import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";

const Content = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mathematics" element={<Mathematics/>} />
            {/* <Route path="/" element={<Electronics />} /> */}
            {/* <Route path="/" element={<Computers />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Content;
