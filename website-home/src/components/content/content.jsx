import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";
import NavigationPath from "../navigation-path/navigation-path";
import Computers from "../topics/computers";
import Electronics from "../topics/electronics";
import { SpaceBetween } from "@cloudscape-design/components";
import NotFound from "../not-found/not-found";
import Algorithms from "../computers/algorithms";
import Searching from "../computers/algorithms/searching";

const Content = () => {
  return (
    <div className="content">
      <SpaceBetween direction="vertical" size="s">
        <NavigationPath />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mathematics" element={<Mathematics />} />

          {/* Computers */}
          <Route path="/computers" element={<Computers />} />

          {/* Algorithms */}
          <Route path="/computers/algorithms" element={<Algorithms />} />
          <Route path="/computers/algorithms/searching" element={<Searching />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </SpaceBetween>
    </div>
  )
}

export default Content;
