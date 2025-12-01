import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const OperatingSystem = () => {
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
            name: "System calls",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Processes",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Threads",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Inter-process communication",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Concurrency & synchronisation",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Deadlock",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "CPU & I/O scheduling",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Memory management & virtual memory",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "File systems",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
        ]}
      />
    </div>
  )
}

export default OperatingSystem;
