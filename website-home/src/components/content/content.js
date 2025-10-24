import { Cards, Link } from "@cloudscape-design/components";
import * as React from "react";

const Content = () => {
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Trees" }]);

  return (
    <div id="my-content">
      <Cards
        onSelectionChange={({ detail }) =>
          setSelectedItems(detail?.selectedItems ?? [])
        }
        selectedItems={selectedItems}
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
            name: "Trees",
            description: "Trees are the lifeline of our planet.",
            url: '/trees'
          },
          {
            name: "Mathematics",
            description: "Study of number, logic and patterns",
            url: '/mathematics'
          },
          {
            name: "Literature",
            description: "Collection of stories, ideas and emotions",
            url: '/literature'
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
