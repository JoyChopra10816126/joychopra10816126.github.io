import { Cards, Link } from "@cloudscape-design/components";

const Mathematics = () => {
  return (
    <div class="content">
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
            name: "Arithmetic",
            description: "Basic operations with numbers",
            url: '/mathematics/arithmetic'
          },
          {
            name: "Algebra",
            description: "Symbols and equations for relations",
            url: '/mathematics/algebra'
          },
        ]}
      />
    </div>
  )
}

export default Mathematics;
