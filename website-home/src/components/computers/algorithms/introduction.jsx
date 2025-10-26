import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const AlgorithmsIntroduction = () => {
  const { learningMode } = useMode();
  let content = "";
  if (!learningMode) {
    content = (<MathText>
      Let {"\\( S \\)"} be the set of all states of a computational system {"\\( C \\)"}.
      <br />

      Let {"\\( I \\subseteq S \\)"} be the set of input states
      <br />

      Let {"\\( O \\subseteq S \\)"} be the set of output states
      <br /><br />

      An <b>algorithm</b> {"\\( A \\)"} can be defined as a finite ordered sequence of
      well-defined computational steps.

      {"$$ A = (\\delta_1, \\delta_2, \\dots, \\delta_n), $$"}
      where {"\\( \\delta_i : S \\to S\\)"} are the {"\\( n \\)"} <b>computational steps</b> of the algorithm.
      <br />

      Each computational step transitions the computational system from one state to another.
      <br /><br />

      On <b>finiteness</b> - The number of computational steps is a natural number,
      &nbsp;{"\\( n \\in \\mathbb{N}, n \\lt \\infty  \\)"}
      <br /><br />

      On <b>order</b> - Each computational step is applied in order as described below.
      Let {"\\( s_i \\)"} denote the state of {"\\( C \\)"} after {"\\( i \\)"}th computational step is executed.
      Further, let {"\\( s_0 \\in I \\)"} be the initial computational state
      and let {"\\( s_n \\in O \\)"} be the final computational state after execution of the algorithm

      Then, we have

      {"$$ s_{i + 1} = \\delta_i (s_i), \\;\\; i = 0, 1, 2 \\dots, n - 1 $$"}

    </MathText>
    );
  }
  else {
    content = (
      <div>
        1. An algorithm is a set of clear instructions for the computer.
        <br/>
        2. An algorithm is finite. It has fixed number of instructions.
        <br/>
        3. The algorithm takes input from computer and produces a output.
        <br/>
        4. A good algorithm is fast, consumes less memory, and produces correct output.
        <br/>
        5. An algorithm defines clear order in which instructions are to be executed.
      </div>
    )
  }
  return (
    <div className="content">
      <Container
        header={
          <Header
            variant="h2"
            actions={<ModeSelector />}
          >
            Introduction
          </Header>
        }
      >
        <div>
          {content}
        </div>
      </Container>
    </div>
  )
}

export default AlgorithmsIntroduction;
