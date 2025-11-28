import MathText from "../../latex/math-text";
import ContentPage from "../../content/content-page";
import MathTextInline from "../../latex/math-text-inline";
import MathTextFormula from "../../latex/math-text-formula";

const LinearSearch = () => {
  const basicContent = (
    <div>
      1. Linear search checks each element one by one.
      <br />
      2. It does not require any structure in the data.
      <br />
      3. It is the simplest search algorithm.
      <br />
      4. It takes O(n) or linear time and O(1) or constant space.
      <br />
      5. It works for any predicate.
    </div>
  );

  const advancedContent = (
    <div>
      Let <MathTextInline>{"A_{LS}"}</MathTextInline> denote the linear
      search algorithm.

      Let <MathText>{"\\( S = \\{ s_1, s_2, \\ldots, s_n \\} \\)"}</MathText> be a
      collection of n elements. Let P be a predicate such that
      <MathText>{"$$ P : S \\to \\{true, false\\}$$"}</MathText>

      Let <MathTextInline>{"U"}</MathTextInline> denote the universe for
      the elements in the collection.
      So we have <MathTextInline>{"S \\subseteq U"}</MathTextInline>
      <br />

      Further, let <MathText>{"\\( S_{LS} \\)"}</MathText> denote the set of
      computational space for the algorithm <MathText>{"\\( A_{LS} \\)"}</MathText>.
      Then we have
      <MathText>{"$$ S_{LS} = \\{(x_1, x_2)  \\; | \\; x_1 \\in \\{ 0, 1, \\dots, n \\}," +
        "x_2 \\in U \\cup \\{ \\bot \\} \\} $$"}</MathText>

      Here <MathTextInline>{"x_1"}</MathTextInline> denotes the current index
      during the search procedure.
      And <MathTextInline>{"x_2"}</MathTextInline> denotes the resultant
      element of the search procedure.
      <br /><br />

      Then the <b>linear search algorithm</b> is defined as follows
      <MathText>{"$$ A_{LS} = (\\delta_1, \\delta_2, \\dots, \\delta_n ) $$"}</MathText>
      The input set of the algorithm is defined as below
      <MathTextFormula>
        {"I = \\{ (0, \\bot) \\}"}
      </MathTextFormula>
      The output set is defined as below
      <MathTextFormula>
        {"O = \\{ (n, s^*) \\; | \\; s^* \\in S \\cup \\{ \\bot \\}"}
      </MathTextFormula>
      And the computational steps are defined as described below.
      <MathTextFormula>
        {
          "\\delta_i(x_1, x_2) = \\begin{cases} (x_1 + 1, x_2) & P(s_i) = \\text{false} " +
          "\\\\ (n, s_i) & P(s_i) = \\text{true} " +
          "\\end{cases}"
        }
      </MathTextFormula>

      The first case represents the situation when the index is updated but result remains
      the same. This happens when the ith element is not the matching element.

      The second case represents the situation when the result is updated.
      This happens when the ith element is a matching element. The algorithm
      halts in this state.

      <br /><br />
      Now let us analyse the <b>time complexity</b> for linear search algorithm.
      The time complexity of an algorithm is sum of time complexity of its computation
      steps. Each step in the linear search algorithm does 2 variable assignment operations.
      And in the worst case, there are n computational steps. Hence the worst case
      time complexity is as follows

      <MathTextFormula>
        {"T_{A_{LS}}(n) = T_{\\delta_1}(n) + T_{\\delta_1}(n) \\dots + T_{\\delta_{n}}(n)"}
      </MathTextFormula>
      <MathTextFormula>
        {"= 2 + 2 \\dots + 2 \\; (n \\; \\text{times})"}
      </MathTextFormula>
      <MathTextFormula>
        {"= 2n = O(n)"}
      </MathTextFormula>

      Now let us analyse the <b>space complexity</b> of the linear search algorithm.
      There are 2 variables allocated in the algorithm. They
      are <MathTextInline>{"x_1"}</MathTextInline> and <MathTextInline>{"x_2"}</MathTextInline>.
      Hence the space occupied is 2 units or O(1).

      <b />
      Hence, the time complexity of linear search is O(n) and space complexity is O(1).

    </div>
  );

  const examplesContent = (
    <div>
      <b>Example 1</b>
      <br />

      The goal is to search the number 7 in the following
      list <MathTextInline>{"S = [2, 4, 5, 7, 3, 1]"}</MathTextInline>
      <br />

      The predicate for search is <MathText>{"\\( P(x) = (x = 7) \\)"}</MathText>
      <br />

      Let us go over the state transitions for linear search algorithm.
      The input state is <MathTextInline>{"s_0 = (0, \\bot)"}</MathTextInline>.
      And then we have the following
      <br/>
      Step 1
      <MathTextFormula>
        {"P(s_0) = (2 = 7) = false"}
      </MathTextFormula>
      <MathTextFormula>
        {"s_1 = \\delta_1(s_0) = (1, \\bot)"}
      </MathTextFormula>
      Step 2
      <MathTextFormula>
        {"P(s_1) = (4 = 7) = false"}
      </MathTextFormula>
      <MathTextFormula>
        {"s_2 = \\delta_2(s_1) = (2, \\bot)"}
      </MathTextFormula>
      Step 3
      <MathTextFormula>
        {"P(s_2) = (5 = 7) = false"}
      </MathTextFormula>
      <MathTextFormula>
        {"s_3 = \\delta_3(s_2) = (3, \\bot)"}
      </MathTextFormula>
      Step 4
      <MathTextFormula>
        {"P(s_3) = (7 = 7) = true"}
      </MathTextFormula>
      <MathTextFormula>
        {"s_4 = \\delta_4(s_3) = (6, 7) \\in O"}
      </MathTextFormula>
      The algorithm halts at step 4 as the matching element is found.
    </div>
  );

  return (
    <div className="content">
      <ContentPage
        title={"Linear Search"}
        basicContent={basicContent}
        advancedContent={advancedContent}
        examplesContent={examplesContent}
      />
    </div>
  )
}

export default LinearSearch;
