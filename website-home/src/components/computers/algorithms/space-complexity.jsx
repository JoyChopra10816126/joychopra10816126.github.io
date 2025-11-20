import MathText from "../../latex/math-text";
import ContentPage from "../../content/content-page";

const SpaceComplexity = () => {
  const basicContent = (
    <div>
      1. Space complexity measures how much extra memory an algorithm takes.
      <br />
      2. It includes space for variables, data structures and function call stack.
      <br />
      3. Space complexity is represented using Big O notation.
      <br />
      4. Input size is not counted in space complexity.
      <br />
      5. Increasing space can reduce the time taken by the algorithm.
    </div>
  );

  const advancedContent = (
    <div>
      <b>Space complexity of an algorithm</b> is a function that represents
      the amount of extra space taken by the algorithm as a function of its input size.
      The input size is denoted using <MathText>{"\\(n \\in \\mathbb{N} \\)"}</MathText>

      <br/>

      Let <MathText>{"\\( S(n) \\)"}</MathText> denote the exact amount of words occupied
      for input of size&nbsp;
      <MathText>{"\\( n \\)"}</MathText>, then the space complexity
      of an algorithm <MathText>{"\\( A \\)"}</MathText> is represented as below
      <MathText>{"$$ S_A(n) = S(n) = O(f(n)), \\;\\; " +
        "\\exists \\, c \\gt 0, n_0 \\gt 0 \\; : \\; S(n) \\le c.f(n) \\; \\; \\forall n \\ge n_0$$"}
      </MathText>
      The above notation is <b>big O notation</b> which gives the upper bound
      for space complexity. It represents the worst case behaviour.
      <br />

      Some examples of space complexity are
          <ol>
            <li><MathText>{"\\( O(1) \\)"}</MathText> - constant space - independent of input size</li>
            <li><MathText>{"\\( O(n) \\)"}</MathText> - linear space - directly proportional to input size</li>
            <li><MathText>{"\\( O(n^2) \\)"}</MathText> - quadratic space - directly proportional to 
            square of input size</li>
          </ol>

      Similar to time complexity, space complexity can also be represented using
      omega notation and theta notation. The same simplification rules hold true 
      for space complexity.
    </div>
  );

  const examplesContent = "";

  return (
    <div className="content">
      <ContentPage
        title={"Space Complexity"}
        basicContent={basicContent}
        advancedContent={advancedContent}
        examplesContent={examplesContent}
      />
    </div>
  )
}

export default SpaceComplexity;
