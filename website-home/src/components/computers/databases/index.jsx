import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const Databases = () => {
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
            name: "ER model",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Relational algebra",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Tuple calculus",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "SQL, integrity constraints",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Normal forms, file organisation",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Indexing",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Transactions & concurrency control",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
        ]}
      />
    </div>
  )
}

export default Databases;
