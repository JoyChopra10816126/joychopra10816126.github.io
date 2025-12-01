import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const CompilerDesign = () => {
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
            name: "Lexical analysis",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Parser",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Runtime environment",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Intermediate code generation",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Local optimisation",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Constant propagation",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Liveness analysis",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Common subexpression elimination",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
        ]}
      />
    </div>
  )
}

export default CompilerDesign;
