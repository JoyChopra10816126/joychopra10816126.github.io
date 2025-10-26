import { 
  Routes,
  Route, 
} from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";
import NavigationPath from "../navigation-path/navigation-path";

const Content = () => {
  return (
    <div className="content">
      <NavigationPath/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mathematics" element={<Mathematics/>} />
            {/* <Route path="/" element={<Electronics />} /> */}
            {/* <Route path="/" element={<Computers />} /> */}
        </Routes>
    </div>
  )
}

export default Content;
