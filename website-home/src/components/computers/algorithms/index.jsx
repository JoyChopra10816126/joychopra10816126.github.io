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
        ]}
      />
    </div>
  )
}

export default Algorithms;
