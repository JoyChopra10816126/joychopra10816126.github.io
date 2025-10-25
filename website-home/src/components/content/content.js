import { Cards, Link } from "@cloudscape-design/components";
import * as React from "react";

const Content = () => {
  return (
    <div id="my-content">
      <Cards
        cardDefinition={{
          header: item => (
            <Link href={item.url} fontSize="heading-m">
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
            description: "Smart machines for the modern life",
            url: '/computers'

          },
          {
            name: "Electronics",
            description: "Science of hardware",
            url: '/electronics'
          },
        ]}
      />
    </div>
  )
}

export default Content;
