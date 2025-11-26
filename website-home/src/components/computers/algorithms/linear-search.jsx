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
      <br/>

      Further, let <MathText>{"\\( S_{LS} \\)"}</MathText> denote the set of 
      computational space for the algorithm <MathText>{"\\( A_{LS} \\)"}</MathText>.
      Then we have
      <MathText>{"$$ S_{LS} = \\{(x_1, x_2)  \\; | \\; x_1 \\in \\{ 0, 1, \\dots, n \\}," +
      "x_2 \\in U \\cup \\{ \\bot \\} \\} $$"}</MathText>

      Here <MathTextInline>{"x_1"}</MathTextInline> denotes the current index 
      during the search procedure. 
      And <MathTextInline>{"x_2"}</MathTextInline> denotes the resultant 
      element of the search procedure.
      <br/><br/>

      Then the <b>linear search algorithm</b> is defined as follows
      <MathText>{"$$ A_{LS} = (\\delta_1, \\delta_2, \\dots, \\delta_{n + 1} ) $$"}</MathText>
      The input set of the algorithm is defined as below
      <MathTextFormula>
        {"I = \\{ (0, \\bot) \\}"}
      </MathTextFormula>
      The output set is defined as below
      <MathTextFormula>
        {"O = \\{ (n + 1, s^*) \\; | \\; s^* \\in S \\cup \\{ \\bot \\}"}
      </MathTextFormula>
      And the computational steps are defined as described below.
      <MathTextFormula>
        {
        "\\delta_i(x_1, x_2) = \\begin{cases} (x_1 + 1, x_2) & P(s_i) = \\text{false} \\;" + 
        " \\text{or} \\; x_2 \\neq \\bot \\\\ (x_1 + 1, s_i) & P(s_i) = \\text{true}" + 
        " \\; \\text{and} \\; x_2 = \\bot \\end{cases}"
        }
      </MathTextFormula>

      The first case represents the situation when the index is updated but result remains
      the same. This happens in 2 cases - first, if the ith element is not the matching element
      or if a matching element is already found.

      The second case represents the situation when the result is updated.
      This happens when the ith element is a matching element and no other matching 
      element is found till now.
    </div>
  );

  const examplesContent = (
    <div>

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
