import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";

const Home = () => {
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
            name: "Mathematics",
            description: "Study of number, logic and patterns",
            url: '/mathematics'
          },
          {
            name: "Computers",
            description: "Study of computation and automation",
            url: '/computers'
          },
          {
            name: "Electronics",
            description: "Study of circuits and devices",
            url: '/electronics'
          },
        ]}
      />
    </div>
  )
}

export default Home;
