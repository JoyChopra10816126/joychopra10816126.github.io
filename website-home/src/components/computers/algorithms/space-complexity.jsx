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

    // } else if (isBasicMode(mode)) {

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
