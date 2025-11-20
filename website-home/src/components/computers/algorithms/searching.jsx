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
      Otherwise if no element satisfies the predicate, 
      then return <MathText>{"\\( \\bot \\)"}</MathText>
      <br/>
      Linear search takes linear time <MathText>{"\\( O(n) \\)"}</MathText>.
      If the set is ordered and we have a monotonic predicate, 
      then we can use the faster algorithm
      binary search. Binary search takes logarithmic 
      time <MathText>{"\\( O(log_2(n))\\)"}</MathText>
    </div>
  );

  const examplesContent = (
    <div>
      <b>Example 1</b>
      <br/>
      The goal is to search the number 7 in following 
      list <MathText>{"\\( S = [2, 4, 5, 7, 3, 1] \\)"}</MathText>
      <br/>
      The predicate for search is <MathText>{"\\( P(x) = (x = 7) \\)"}</MathText>
      <br/>
      Now lets see how linear search works. We iterate over the collection as described below.
      <br/>
      <MathText>{"$$ x = 2, P(x) = false $$"}</MathText>
      <MathText>{"$$ x = 4, P(x) = false $$"}</MathText>
      <MathText>{"$$ x = 5, P(x) = false $$"}</MathText>
      <MathText>{"$$ x = 7, P(x) = true $$"}</MathText>
      The output of the search is x = 7. The search stops after 4th iteration.
      <br/><br/>

      <b>Example 2</b>
      <br/>
      The goal is to find a number that is divisible by 5 in following 
      list <MathText>{"\\( S = [42, 14, 15, 27, 13, 61] \\)"}</MathText>
      <br/>
      The predicate for search is <MathText>{"\\( P(x) = (x \\; \\% \\; 5 = 0) \\)"}</MathText>
      <br/>
      Lets see how linear search works in this case. 
      We iterate over the collection as described below.
      <br/>
      <MathText>{"$$ x = 42, P(x) = false $$"}</MathText>
      <MathText>{"$$ x = 14, P(x) = false $$"}</MathText>
      <MathText>{"$$ x = 15, P(x) = true $$"}</MathText>
      The output of the search is x = 15. The search stops after 3rd iteration.
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
