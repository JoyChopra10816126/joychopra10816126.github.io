import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";

const Content = () => {
  return (
    <div id="my-content">
      <HashRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/mathematics" element={<Mathematics/>} />
            {/* <Route path="/" element={<Electronics />} /> */}
            {/* <Route path="/" element={<Computers />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default Content;
