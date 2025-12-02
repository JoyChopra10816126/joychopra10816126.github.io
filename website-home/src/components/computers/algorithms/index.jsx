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
            name: "Searching",
            description: "Finding a value in a sequence",
            url: "/computers/algorithms/searching"
          },
          {
            name: "Sorting",
            description: "Arranging elements of a sequence",
            url: "/computers/algorithms/sorting"
          },
          {
            name: "Hashing",
            // description: "Fast data lookup",
            url: "/computers/algorithms/hashing"
          },
          {
            name: "Time and Space Complexity",
            // description: "Measuring algorithm cost",
            url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Greedy technique",
            // description: "Choosing best step",
            url: "/computers/algorithms/greedy"
          },
          {
            name: "Dynamic programming technique",
            // description: "Solving with subproblems",
            url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Divide and Conquer technique",
            // description: "Breaking into parts",
            url: "/computers/algorithms/divide-conquer"
          },
          {
            name: "Graph traversal",
            // description: "Exploring graph nodes",
            url: "/computers/algorithms/graph-traversal"
          },
          {
            name: "Minimum spanning trees",
            // description: "Lowest-cost connections",
            url: "/computers/algorithms/minimum-spanning-trees"
          },
          {
            name: "Shortest paths",
            // description: "Finding minimal routes",
            url: "/computers/algorithms/shortest-paths"
          },
        ]}
      />
    </div>
  )
}

export default Algorithms;
