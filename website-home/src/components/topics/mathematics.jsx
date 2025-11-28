import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../constants/website";

const Mathematics = () => {
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
            name: "Algebra",
            description: "Study of symbols and equations",
            url: '/mathematics/algebra'
          },
          {
            name: "Calculus",
            description: "Study of change and motion",
            url: '/mathematics/calculus'
          },
          {
            name: "Complex Analysis",
            description: "Study of complex-valued functions",
            url: "/mathematics/complex-analysis"
          },
          {
            name: "Functional Analysis",
            description: "Study of function spaces and operators",
            url: "/mathematics/functional-analysis"
          },
          {
            name: "Linear Algebra",
            description: "Study of vectors and transformations",
            url: "/mathematics/linear-algebra"
          },
          {
            name: "Linear Programming",
            description: "Study of linear optimization problems",
            url: "/mathematics/linear-programming"
          },
          {
            name: "Numerical Analysis",
            description: "Study of computational approximation methods",
            url: "/mathematics/numerical-analysis"
          },
          {
            name: "Ordinary Differential Equations",
            description: "Study of single-variable derivatives",
            url: "/mathematics/ordinary-differential-equations"
          },
          {
            name: "Partial Differential Equations",
            description: "Study of multi-variable derivatives",
            url: "/mathematics/partial-differential-equations"
          },
          {
            name: "Real Analysis",
            description: "Study of real number functions",
            url: "/mathematics/real-analysis"
          },
          {
            name: "Topology",
            description: "Study of space and continuity",
            url: "/mathematics/topology"
          }
        ]}
      />
    </div>
  )
}

export default Mathematics;
