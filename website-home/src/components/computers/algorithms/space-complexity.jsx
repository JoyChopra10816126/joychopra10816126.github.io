import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { isBasicMode, useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const SpaceComplexity = () => {
  const { mode } = useMode();
  let content = "";
  if (!mode) {
      content = "";
    // } else if (isAdvancedMode(mode)) {

    } else if (isBasicMode(mode)) {
      content = (
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
    } else {

    }

  return (
    <div className="content">
      <Container
        header={
          <Header
            variant="h2"
            actions={<ModeSelector />}
          >
            Space Complexity
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

export default SpaceComplexity;
