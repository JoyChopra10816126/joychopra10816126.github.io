import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const ProgrammingAndDataStructures = () => {
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
            name: "Programming in C",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Recursion",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Arrays",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Stacks",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Queues",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Linked lists",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Trees",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Binary search trees",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Binary heaps",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Graphs",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
        ]}
      />
    </div>
  )
}

export default ProgrammingAndDataStructures;
