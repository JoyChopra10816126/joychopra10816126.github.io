import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";
import { useMode } from "../../mode-selector/mode-context";
import MathText from "../../latex/math-text";

const TimeComplexity = () => {
  const { learningMode } = useMode();
  let content = "";
  if (!learningMode) {
    content = (<MathText>
      
    </MathText>
    );
  }
  else {
    content = (
      <div>
        
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
            Time Complexity
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

export default TimeComplexity;
