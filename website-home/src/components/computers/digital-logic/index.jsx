import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const DigitalLogic = () => {
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
            name: "Boolean algebra",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Combinational circuits",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Sequential circuits",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Minimisation",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Number representation & computer arithmetic",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Number systems",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
        ]}
      />
    </div>
  )
}

export default DigitalLogic;
