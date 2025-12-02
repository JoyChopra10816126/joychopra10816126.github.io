import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const TheoryOfComputation = () => {
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
            name: "Regular expressions",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Finite automata",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Context-free grammar",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Push down automata",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Regular language",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Context-free language",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Pumping lemma",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Turing machine",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Undecidability",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
        ]}
      />
    </div>
  )
}

export default TheoryOfComputation;
