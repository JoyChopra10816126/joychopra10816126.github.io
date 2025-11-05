import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const SpaceComplexity = () => {
  const { isFormalMode } = useMode();
  let content = "";
  if (isFormalMode) {
    content = (<MathText>
      

    </MathText>
    );
  }
  else {
    content = (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
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
