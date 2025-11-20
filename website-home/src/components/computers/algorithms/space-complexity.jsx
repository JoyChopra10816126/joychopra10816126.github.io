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

  const examplesContent = (
    <div>
      <b>Example 1</b>
      <br/>

      Consider the following algorithm <MathText>{"\\( Alg \\)"}</MathText>
      <br/>

      <b>Input</b> - An array A of n elements
      <br />
      Step 1 - Initialise a new array B of n elements
      <br />
      Step 2 - Assign B[0] = A[0] + A[1]
      <br/>
      Step 3 - Initialise a loop variable i = 1
      <br />
      Step 4 - Until i = n - 2, do the following
      <br />
      &nbsp;&nbsp;Step 4.1 - B[i] = A[i - 1] + A[i] + A[i + 1]
      <br />
      &nbsp;&nbsp;Step 4.2 - i = i + 1
      <br />
      Step 5 - Assign B[n - 1] = A[n - 2] + A[n - 1] 
      <br />
      <b>Output</b> - array B of n elements
      <br /><br />

      Let us analyse the space complexity of above algorithm.
      <br/>
      Step 1 creates a new array with n elements. So it allocates 
      &nbsp;<MathText>{"\\( S_{\\delta_1}(n) = O(n)\\)"}</MathText> memory.
      <br/>
      Step 2 is an assignment operation. It does not allocate new memory.
      <br/>
      Step 3 creates a new variable with 1 size. So it allocates
      &nbsp;<MathText>{"\\( S_{\\delta_3} = O(1)\\)"}</MathText>
      <br/>
      Steps 4 and 5 are also assignment operations. No new memory is allocated.

      Overall space occupied by the algorithm is
      <MathText>{"$$ S_{Alg}(n) = S(n) $$"}</MathText>
      <MathText>{"$$ = S_{\\delta_1}(n) + S_{\\delta_2}(n) + " + 
      "S_{\\delta_3}(n) + S_{\\delta_4}(n) + S_{\\delta_5}(n)$$"}</MathText>
      <MathText>{"$$ = O(n) + 0 + O(1) + 0 + 0 $$"}</MathText>
      <MathText>{"$$ = O(n + 1) = O(n) $$"}</MathText>

      So the algorithm occupies linear space.
    </div>
  );

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
