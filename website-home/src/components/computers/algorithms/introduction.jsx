import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../../mode-selector/mode-selector";

const AlgorithmsIntroduction = () => {
  return (
    <div className="content">
      <Container
        header={
          <Header 
          variant="h2"
          actions={<ModeSelector />}
        >
            Introduction
          </Header>
        }
      >

      </Container>
    </div>
  )
}

export default AlgorithmsIntroduction;
