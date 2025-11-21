import MathText from "../../latex/math-text";
import ContentPage from "../../content/content-page";

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
