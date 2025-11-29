import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const Algorithms = () => {
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
            name: "Introduction",
            description: "What are algorithms",
            url: "/computers/algorithms/introduction"
          },
          {
            name: "Searching",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/searching"
          },
          {
            name: "Sorting",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/sorting"
          },
          {
            name: "Hashing",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/hashing"
          },
          {
            name: "Time and Space Complexity",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Greedy technique",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/greedy"
          },
          {
            name: "Dynamic programming technique",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Divide and Conquer technique",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/divide-conquer"
          },
          {
            name: "Graph traversal",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/graph-traversal"
          },
          {
            name: "Minimum spanning trees",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/minimum-spanning-trees"
          },
          {
            name: "Shortest paths",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/shortest-paths"
          },
        ]}
      />
    </div>
  )
}

export default Algorithms;
