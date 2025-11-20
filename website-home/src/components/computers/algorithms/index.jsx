import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";

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
          { minWidth: 500, cards: 2 }
        ]}
        items={[
          {
            name: "Introduction",
            description: "Introduction to algorithms",
            url: "/computers/algorithms/introduction"
          },
          {
            name: "Time complexity",
            description: "How fast an algorithm runs?",
            url: "/computers/algorithms/time-complexity"
          },
          {
            name: "Space complexity",
            description: "How much memory an algorithm allocates?",
            url: "/computers/algorithms/space-complexity"
          },
          {
            name: "Searching",
            description: "Find what you want",
            url: "/computers/algorithms/searching"
          },
        ]}
      />
    </div>
  )
}

export default Algorithms;
