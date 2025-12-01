import { Cards } from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import { NUM_CARDS } from "../../../constants/website";

const ComputerNetworks = () => {
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
            name: "OSI and TCP/IP protocol stacks",
            // description: "What are algorithms",
            // url: "/computers/compiler-design/lexical-analysis"
          },
          {
            name: "Packets, circuits & virtual circuits switching",
            // description: "Finding a value in a sequence",
            // url: "/computers/algorithms/searching"
          },
          {
            name: "Framing",
            // description: "Ordering data quickly",
            // url: "/computers/algorithms/sorting"
          },
          {
            name: "Error detection",
            // description: "Fast data lookup",
            // url: "/computers/algorithms/hashing"
          },
          {
            name: "Medium access control",
            // description: "Measuring algorithm cost",
            // url: "/computers/algorithms/time-space-complexity"
          },
          {
            name: "Ethernet bridging",
            // description: "Choosing best step",
            // url: "/computers/algorithms/greedy"
          },
          {
            name: "Shorted path",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Flooding",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Distance vector",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Link state routing",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Fragmentation & IP addressing",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "IPv4",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "CIDR Notation",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "IP support protocols",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Network address translation",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Flow control and congestion control",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "UDP",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "TCP",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Sockets",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "DNS",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "SMTP",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "HTTP",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "FTP",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
          {
            name: "Email",
            // description: "Solving with subproblems",
            // url: "/computers/algorithms/dynamic-programming"
          },
        ]}
      />
    </div>
  )
}

export default ComputerNetworks;
