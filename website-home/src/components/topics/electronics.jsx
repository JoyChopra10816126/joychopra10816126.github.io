import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";

const Electronics = () => {
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
            name: "Analog Circuits",
            description: "Study of continuous signal circuits",
            url: "/electronics/analog-circuits"
          },
          {
            name: "Communications",
            description: "Study of signal transmission and reception",
            url: "/electronics/communications"
          },
          {
            name: "Control Systems",
            description: "Study of system stability and feedback",
            url: "/electronics/control-systems"
          },
          {
            name: "Digital Circuits",
            description: "Study of discrete logic-based circuits",
            url: "/electronics/digital-circuits"
          },
          {
            name: "Electromagnetics",
            description: "Study of electric and magnetic fields",
            url: "/electronics/electromagnetics"
          },
          {
            name: "Electronic Devices",
            description: "Study of semiconductors and components",
            url: "/electronics/electronic-devices"
          },
          {
            name: "Networks, Signals and Systems",
            description: "Study of signal behavior and systems",
            url: "/electronics/networks-signals-and-systems"
          }
        ]}
      />
    </div>
  )
}

export default Electronics;
