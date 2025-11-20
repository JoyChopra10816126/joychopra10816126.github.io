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
      <br/>
      4. We want efficient searching so that it works fast.
      <br/>
      5. Searching speed is measured using time complexity.
    </div>
  );

  const advancedContent = (
    <div>
      
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
