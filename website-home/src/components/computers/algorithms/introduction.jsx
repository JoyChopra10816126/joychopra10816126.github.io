import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { isAdvancedMode, isBasicMode, useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const AlgorithmsIntroduction = () => {
  const { mode } = useMode();
  let content = "";

  if (!mode) {
    content = "";
  } else if (isAdvancedMode(mode)) {
    content = (<div>
      Let <MathText>{"\\( S \\)"}</MathText> be the set of all states of a computational 
      system <MathText>{"\\( C \\)"}</MathText>.
      <br />

      Let <MathText>{"\\( I \\subseteq S \\)"}</MathText> be the set of input states
      <br />

      Let <MathText>{"\\( O \\subseteq S \\)"}</MathText> be the set of output states
      <br /><br />

      An <b>algorithm</b> <MathText>{"\\( A \\)"}</MathText> can be defined as a finite ordered sequence of
      well-defined computational steps.

      <MathText>{"$$ A = (\\delta_1, \\delta_2, \\dots, \\delta_n), $$"}</MathText>
      where <MathText>{"\\( \\delta_i : S \\to S\\)"}</MathText> are 
      the <MathText>{"\\( n \\)"}</MathText> <b>computational steps</b> of the algorithm.
      <br />

      Each computational step transitions the computational system from one state to another.
      <br /><br />

      On <b>finiteness</b> - The number of computational steps is a natural number,
      &nbsp;<MathText>{"\\( n \\in \\mathbb{N}, n \\lt \\infty  \\)"}</MathText>
      <br /><br />

      On <b>order</b> - Each computational step is applied in order as described below.
      Let <MathText>{"\\( s_i \\)"}</MathText> denote the 
      state of <MathText>{"\\( C \\)"}</MathText> 
      after <MathText>{"\\( i \\)"}</MathText>th computational step is executed.
      Further, let <MathText>{"\\( s_0 \\in I \\)"}</MathText> be the initial computational state
      and let <MathText>{"\\( s_n \\in O \\)"}</MathText> be the final 
      computational state after execution of the algorithm

      Then, we have

      <MathText>{"$$ s_{i + 1} = \\delta_i (s_i), \\;\\; i = 0, 1, 2 \\dots, n - 1 $$"}</MathText>

    </div>
    );
  }
  else if (isBasicMode(mode)) {
    content = (
      <div>
        1. An algorithm is a set of clear instructions for the computer.
        <br />
        2. An algorithm is finite. It has fixed number of instructions.
        <br />
        3. The algorithm takes input from computer and produces a output.
        <br />
        4. A good algorithm is fast, consumes less memory, and produces correct output.
        <br />
        5. An algorithm defines clear order in which instructions are to be executed.
      </div>
    )
  } else {
    content = (
      <div>
        <b>Example 1</b>
        <br />
        An algorithm to multiply a number by 2 and add 5 to the result
        <br /><br />
        <b>Input</b> - Number x
        <br />
        Step 1 - Multiple x by 2 and store as y
        <br />
        Step 2 - Add 5 to y and store as z
        <br />
        <b>Output</b> - Number z
        <br /><br />
        <b>Notes</b>
        <br />
        There are 2 instructions or steps in this algorithm. The instructions are finite and clearly
        ordered. The variable x is taken as input and variable z is returned as output.
        <br /><br />
        <b>Execution example</b>
        <br />
        Suppose input x = 7 is supplied to the algorithm.
        <br />
        Step 1 - y = 2*(7) = 14
        <br />
        Step 2 - z = y + 5 = 19
        <br />
        The algorithm returns final output as 19. This is correct output.
        <br /><br />

        <b>Example 2</b>
        <br />
        Advanced representation of above algorithm
        <br />
        Let <MathText>{"\\( S = \\mathbb{R} \\times \\mathbb{R} \\times \\mathbb{R} \\)"}</MathText>
         &nbsp;be the set of states of the computational system <MathText>{"\\( C\\)"}</MathText>. 
        <br/>
        The state is a vector with 3 dimensions. The first dimension represents the input x.
        The second dimension represents the intermediate variable y. And the third
        dimension represents the output z.
        <br/>
        So our state looks like following vector <MathText>{"\\( [x, y, z]\\)"}</MathText>.
        <br/>
        Here the input state can be represented as follows.
        <MathText>{"$$ I = \\{[x, 0, 0] \\; | \\; \\; \\forall x \\in \\mathbb{R}\\} $$"}</MathText> 
        <br/>
        After step 1 of the algorithm, the state becomes <MathText>{"\\( s_1 = [x, 2x, 0]\\)"}</MathText>
        <br/>
        After step 2 of the algorithm, the state becomes <MathText>{"\\( s_2 = [x, 2x, 2x + 5]\\)"}</MathText>
        <br/>
        The output is then returned from the 3rd dimension. 
        The output state can be represented as follows.
        <MathText>{"$$ O = \\{[x, 2x, 2x + 5] \\; | \\; \\; \\forall x \\in \\mathbb{R}\\} $$"}</MathText>
        <br/>
        Now let us take a closer look at the state transition functions or the computational steps
        of the algorithm.
        <br/>
        For the first step, we have
        <MathText>{"$$ \\delta_1 = I \\to \\mathbb{R}^3$$"}</MathText>
        <MathText>{"$$ = \\{ ((i_1, 0, 0), (i_1, 2i_1, 0)) \\; | \\; \\; \\forall i_1 \\in \\mathbb{R} \\} $$"}</MathText>
        <br/>
        Similarly, for the second step, we have
        <MathText>{"$$ \\delta_2 = \\mathbb{R}^3 \\to O$$"}</MathText>
        <MathText>{"$$ = \\{ ((i_1, i_2, i_3), (i_1, i_2, i_2 + 5)) \\; | \\; \\; \\forall i_1 \\in \\mathbb{R} \\} $$"}</MathText>
        <br/>
        And our algorithm is represented as follows
        <MathText>{"$$ A = (\\delta_1 , \\delta_2 ) $$"}</MathText>
      </div>
    );
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
