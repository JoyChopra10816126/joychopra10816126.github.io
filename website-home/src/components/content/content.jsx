import { 
  Routes,
  Route, 
} from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";
import NavigationPath from "../navigation-path/navigation-path";
import Computers from "../topics/computers";

const Content = () => {
  return (
    <div className="content">
      <NavigationPath/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/computers" element={<Computers />} />
            {/* <Route path="/" element={<Electronics />} /> */}
            <Route path="/mathematics" element={<Mathematics/>} />
        </Routes>
    </div>
  )
}

export default Content;
