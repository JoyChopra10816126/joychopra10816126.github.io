import MathText from "../../latex/math-text";
import ContentPage from "../../content/content-page";

const Searching = () => {
  const basicContent = (
    <div>
      1. Searching is the act of finding a particular thing in a collection of things.
      <br />
      2. A search algorithm tells the computer how to look.
      <br />
      3. Searching is useful in databases to find records.
      <br />
      4. We want efficient searching so that it works fast.
      <br />
      5. Searching speed is measured using time complexity.
    </div>
  );

  const advancedContent = (
    <div>
      <b>Searching</b> is an algorithmic operation of identifying 
      an element <MathText>{"\\( x \\)"}</MathText> in a
       set of data <MathText>{"\\( S \\)"}</MathText> such that 
      a predicate <MathText>{"\\( P(x) \\)"}</MathText> is satisfied.
      A good searching algorithm optimises on time complexity and space complexity.
      <br/><br/>

      Let <MathText>{"\\( S = \\{ s_1, s_2, \\ldots, s_n \\} \\)"}</MathText> be a 
      collection of elements. Let P be a predicate such that
      <MathText>{"$$ P : S \\to \\{true, false\\}$$"}</MathText> 

      Let <MathText>{"\\( M \\)"}</MathText> be the set of matching elements 
      of <MathText>{"\\( S \\)"}</MathText> which satisfy the predicate.

      <MathText>{"$$ M = \\{ x \\in S \\; | \\; P(x) = true \\} $$"}</MathText>

      Then the <b>single search solution x</b> is as follows
      <MathText>{"$$ x = SingleSearch(S, P) = \\begin{cases} \\text{any element } " + 
      " m \\in M, & M \\neq \\phi  \\\\ " +
      " \\bot & M = \\phi" +   
      "\\end{cases} $$"}</MathText>
      
      <b>Linear search or scanning</b> - Check the 
      elements <MathText>{"\\( s_1, s_2, \\ldots, s_n \\)"}</MathText> until we 
      find <MathText>{"\\( s_i \\)"}</MathText> such 
      that <MathText>{"\\( P(s_i) = true \\)"}</MathText>. If we find 
      such <MathText>{"\\( s_i \\)"}</MathText>, then return it.
      Otherwise if no element satisfies the predicat, 
      then return <MathText>{"\\( \\bot \\)"}</MathText>
      <br/>
      Linear search takes linear time <MathText>{"\\( O(n) \\)"}</MathText>.
      If the set is ordered and we have a monotonic predicate, then we can use
      binary search. Binary search takes logarithmic 
      time <MathText>{"\\( O(log_2(n))\\)"}</MathText>
    </div>
  );

  const examplesContent = (
    <div>

    </div>
  );

  return (
    <div className="content">
      <ContentPage
        title={"Searching"}
        basicContent={basicContent}
        advancedContent={advancedContent}
        examplesContent={examplesContent}
      />
    </div>
  )
}

export default Searching;
