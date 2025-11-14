import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { isAdvancedMode, isBasicMode, useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const TimeComplexity = () => {
  const { mode } = useMode();

  let content = "";
   if(!mode){
      content = "";
  } else if (isAdvancedMode(mode)) {
    content = (<MathText>
      <b>Time complexity of an algorithm</b> is a function that represents the amount of time
      taken by algorithm as a function of its input size.
      The input size is denoted using {"\\( n \\in \\mathbb{N}\\)"}
      <br/><br/>

      Let {"\\( T(n) \\)"} denote the exact number of computations done for input of size&nbsp;
      {"\\( n \\)"}, then the time complexity of an algorithm {"\\( A \\)"} is represented as below
      {"$$ T_A(n) = T(n) = O(f(n)), \\;\\; " + 
      "\\exists \\, c \\gt 0, n_0 \\gt 0 \\; : \\; T(n) \\le c.f(n) \\; \\; \\forall n \\ge n_0$$"}
      
      The above notation is <b>big O notation</b> which gives the upper bound 
      for time complexity. It represents the worst case behaviour.
      <br/>

      Some examples of time complexity are
      <ol>
        <li>{"\\( O(1) \\)"} - constant time - independent of input size</li>
        <li>{"\\( O(n) \\)"} - linear time - directly proportional to input size</li>
        <li>{"\\( O(2^n) \\)"} - exponential time - very slow, time is exponentially growing with input size</li>
      </ol>

      Time complexity can also be measured using <b>omega notation</b>. 
      It represents the best case behaviour.

      {"$$T(n) = \\Omega(f(n)), \\;\\; " + 
      "\\exists \\, c \\gt 0, n_0 \\gt 0 \\; : \\; T(n) \\ge c.f(n) \\; \\; \\forall n \\ge n_0$$"}

      Finally, <b>theta notation</b> can be used to represent a tight bound as described below.

      {"$$T(n) = \\theta(f(n)), \\;\\; " + 
      "\\exists \\, c_1, c_2 \\gt 0, n_0 \\gt 0 \\; : \\; c_1.f(n) \\le T(n) \\le c_2.f(n) \\; \\; \\forall n \\ge n_0$$"}


    </MathText>
    );
  }
  else if (isBasicMode(mode)){
    content = (
      <div>
        1. Time complexity measures how fast an algorithm runs.
        <br/>
        2. It is represented in terms of input size.
        <br/>
        3. It is expressed using Big O notation.
        <br/>
        4. Time complexity helps in comparing 2 algorithms objectively for a given task.
        <br/>
        5. We want lower time complexity. Lower time complexity means faster algorithm.
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
