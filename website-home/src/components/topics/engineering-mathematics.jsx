import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../constants/website";

const EngineeringMathematics = () => {
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
            name: "Discrete mathematics",
            // description: "Study of step-by-step problem solving",
            // url: "/computers/algorithms"
          },
          {
            name: "Linear Algebra",
            // description: "Study of program translation techniques",
            // url: "/computers/compiler-design"
          },
          {
            name: "Calculus",
            // description: "Study of program translation techniques",
            // url: "/computers/compiler-design"
          },
          {
            name: "Probability & Statistics",
            // description: "Study of program translation techniques",
            // url: "/computers/compiler-design"
          },
        ]}
      />
    </div>
  )
}

export default EngineeringMathematics;
