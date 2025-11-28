import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../constants/website";

const Computers = () => {
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
            name: "Algorithms",
            description: "Study of step-by-step problem solving",
            url: "/computers/algorithms"
          },
          {
            name: "Compiler Design",
            description: "Study of program translation techniques",
            url: "/computers/compiler-design"
          },
          {
            name: "Computer Networks",
            description: "Study of data communication systems",
            url: "/computers/computer-networks"
          },
          {
            name: "Computer Organization and Architecture",
            description: "Study of computer structure and design",
            url: "/computers/computer-organization-and-architecture"
          },
          {
            name: "Databases",
            description: "Study of data storage and retrieval",
            url: "/computers/databases"
          },
          {
            name: "Digital Logic",
            description: "Study of logic gates and circuits",
            url: "/computers/digital-logic"
          },
          {
            name: "Operating System",
            description: "Study of system resource management",
            url: "/computers/operating-system"
          },
          {
            name: "Programming and Data Structures",
            description: "Study of coding and data organization",
            url: "/computers/programming-and-data-structures"
          },
          {
            name: "Theory of Computation",
            description: "Study of computational models and limits",
            url: "/computers/theory-of-computation"
          }
        ]}
      />
    </div>
  )
}

export default Computers;
