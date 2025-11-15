import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { isAdvancedMode, isBasicMode, useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const TimeComplexity = () => {
  const { mode } = useMode();

  let content = "";
  if (!mode) {
    content = "";
  } else if (isAdvancedMode(mode)) {
    content = (<div>
      <b>Time complexity of an algorithm</b> is a function that represents the amount of time
      taken by algorithm as a function of its input size.
      The input size is denoted using <MathText>{"\\( n \\in \\mathbb{N}\\)"}</MathText>
      <br /><br />

      Let <MathText>{"\\( T(n) \\)"}</MathText> denote the exact number of computations
      done for input of size&nbsp;
      <MathText>{"\\( n \\)"}</MathText>, then the time complexity
      of an algorithm <MathText>{"\\( A \\)"}</MathText> is represented as below
      <MathText>{"$$ T_A(n) = T(n) = O(f(n)), \\;\\; " +
        "\\exists \\, c \\gt 0, n_0 \\gt 0 \\; : \\; T(n) \\le c.f(n) \\; \\; \\forall n \\ge n_0$$"}
      </MathText>
      The above notation is <b>big O notation</b> which gives the upper bound
      for time complexity. It represents the worst case behaviour.
      <br />

      Some examples of time complexity are
      <ol>
        <li><MathText>{"\\( O(1) \\)"}</MathText> - constant time - independent of input size</li>
        <li><MathText>{"\\( O(n) \\)"}</MathText> - linear time - directly proportional to input size</li>
        <li><MathText>{"\\( O(2^n) \\)"}</MathText> - exponential time - very slow, time is exponentially growing with input size</li>
      </ol>

      Time complexity can also be measured using <b>omega notation</b>.
      It represents the best case behaviour.

      <MathText>
        {"$$T(n) = \\Omega(f(n)), \\;\\; " +
          "\\exists \\, c \\gt 0, n_0 \\gt 0 \\; : \\; T(n) \\ge c.f(n) \\; \\; \\forall n \\ge n_0$$"}
      </MathText>
      Finally, <b>theta notation</b> can be used to represent a tight bound as described below.
      <MathText>
        {"$$T(n) = \\theta(f(n)), \\;\\; " +
          "\\exists \\, c_1, c_2 \\gt 0, n_0 \\gt 0 \\; : \\; c_1.f(n) \\le T(n) \\le c_2.f(n) \\; \\; \\forall n \\ge n_0$$"}
      </MathText>
      Now let us discuss simplification in time complexity formulas.
      The following rules hold true for time complexity formulas
      <ol class="spaced-list">
        <li><MathText>{"\\( O(c.f(n)) = O(f(n)) \\)"}</MathText> where c is a natural number</li>
        <li><MathText>{"\\( O(f_1(n) + f_2(n)) = O(f_1(n)) \\; \\text{if}" + 
        "\\; \\; \\forall i \\in \\mathbb{N}, \\; f_1(i) \\geq f_2(i)\\)"}</MathText></li>
        <li><MathText>{"\\( O(f_1(n)) + O(f_2(n)) = O(f_1(n) + f_2(n)) \\)"}</MathText></li>
      </ol>
      Similar rules hold true for <MathText>{"\\( \\Omega(n) \\)"}</MathText>
      &nbsp;and <MathText>{"\\( \\theta(n) \\)"}</MathText>
    </div>
    );
  }
  else if (isBasicMode(mode)) {
    content = (
      <div>
        1. Time complexity measures how fast an algorithm runs.
        <br />
        2. It is represented in terms of input size.
        <br />
        3. It is expressed using Big O notation.
        <br />
        4. Time complexity helps in comparing 2 algorithms objectively for a given task.
        <br />
        5. We want lower time complexity. Lower time complexity means faster algorithm.
      </div>
    )
  } else {
    content = (
      <div>
        <b>Example 1</b>
        <br />
        Consider the following algorithm.
        <br/>
        <b>Input</b> - An array a[i] of n elements
        <br/>
        Step 1 - Initialise a loop variable i = 0
        <br/>
        Step 2 - Until i = n - 1, do the following
        <br/>
        &nbsp;&nbsp;Step 2.1 - a[i] = 2 * a[i]
        <br/>
        &nbsp;&nbsp;Step 2.2 - i = i + 1
        <br/>
        <b>Output</b> - array a[i] with updated values
        <br/><br/>

        Let us analyse the time complexity for above algorithm.
        <br/>
        Step 1 does one assignment operation. This is independent of input size.
        Hence it takes <MathText>{"\\( T_{\\delta_1}(n) = O(1) \\)"}</MathText> or constant time.
        <br/>
        Step 2 is a loop. Inside the loop, step 2.1 and 2.2 are again assignment operations.
        So we have 2 operations for one iteration of loop.
        The loop runs from i = 0 till i = n - 1.
        So the loop performs n iterations. Each iteration executes 2 operations.
        Hence step 2 takes <MathText>{"\\( T_{\\delta_2}(n) = O(2n) \\)"}</MathText> or linear time
        <br/>
        Overall time taken by the algorithm A is as follows 
        <br/>
        <MathText>{"$$ T_A(n) = T_{\\delta_1}(n) + T_{\\delta_2}(n)$$"}</MathText>
        <MathText>{"$$ = O(2n) + O(1) $$"}</MathText>
        <MathText>{"$$ = O(2n + 1) = O(n) $$"}</MathText>

        <b>Example 2</b>
        <br />
        Let us now go through examples on simplification
        <br/>
        <ol class="spaced-list">
        <li><MathText>{"\\( O(100) = O(1) \\)"}</MathText></li>
        <li><MathText>{"\\( O(n^2 + 50n + 5) = O(n^2) \\)"}</MathText></li>
        <li><MathText>{"\\( O(100n) + O(300n) = O(n) \\)"}</MathText></li>
        </ol>
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
            Time Complexity
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

export default TimeComplexity;
