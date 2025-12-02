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
import CompilerDesign from "../computers/compiler-design";
import ComputerNetworks from "../computers/computer-networks";
import EngineeringMathematics from "../topics/engineering-mathematics";
import ComputerOrganisationAndArchitecture from "../computers/computer-organization-and-architecture";
import Databases from "../computers/databases";
import DigitalLogic from "../computers/digital-logic";
import OperatingSystem from "../computers/operating-system";
import ProgrammingAndDataStructures from "../computers/programming-and-data-structures";
import TheoryOfComputation from "../computers/theory-of-computation";

const Content = () => {
  return (
    <div className="content">
      <SpaceBetween direction="vertical" size="s">
        <NavigationPath />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mathematics" element={<Mathematics />} />
          <Route path="/engineering-mathematics" element={<EngineeringMathematics />} />

          {/* Computers */}
          <Route path="/computers" element={<Computers />} />

          {/* Algorithms */}
          <Route path="/computers/algorithms" element={<Algorithms />} />
          <Route path="/computers/algorithms/searching" element={<Searching />} />

          {/* Compiler Design */}
          <Route path="/computers/compiler-design" element={<CompilerDesign />} />

          {/* Computer Networks */}
          <Route path="/computers/computer-networks" element={<ComputerNetworks />} />

          {/* Computer Organisation And Architecture */}
          <Route path="/computers/computer-organization-and-architecture"
            element={<ComputerOrganisationAndArchitecture />}
          />

          {/* Databases */}
          <Route path="/computers/databases" element={<Databases />} />

          {/* Digital Logic */}
          <Route path="/computers/digital-logic" element={<DigitalLogic />} />

          {/* Operating System */}
          <Route path="/computers/operating-system" element={<OperatingSystem />} />

          {/* Programming & Data Structures */}
          <Route path="/computers/programming-and-data-structures"
           element={<ProgrammingAndDataStructures />} 
           />

          {/* Theory of Computation */}
          <Route path="/computers/theory-of-computation"
           element={<TheoryOfComputation />} 
           />

          {/* Default */}
          <Route path="*" element={<NotFound />} />
 
        </Routes>
      </SpaceBetween>
    </div>
  )
}

export default Content;
