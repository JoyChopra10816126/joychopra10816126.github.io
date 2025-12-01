import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const ComputerOrganisationAndArchitecture = () => {
  return (
    <div className="content">
      <Cards
        cardDefinition={{
          header: item => (
            <Link to={item.url} fontSize="heading-m">
              {item.name}
            </Link>
          ),
          sections: [
            {
              id: "description",
              content: item => item.description
            },
          ]
        }}
        cardsPerRow={[
          { cards: 1 },
          { minWidth: 500, cards: NUM_CARDS }
        ]}
        items={[
          {
            name: "Machine instructions",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Addressing modes",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "ALU",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Data path & control unit",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Instruction pipelining",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Pipeline hazards",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Memory hierarchy",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Interrupt",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "DMA mode",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
        ]}
      />
    </div>
  )
}

export default ComputerOrganisationAndArchitecture;
