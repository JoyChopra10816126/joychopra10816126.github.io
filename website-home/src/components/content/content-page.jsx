import { Container, Header } from "@cloudscape-design/components";
import ModeSelector from "../mode-selector/mode-selector";
import { isBasicMode, useMode, isAdvancedMode, isExamplesMode } from "../mode-selector/mode-context";

const ContentPage = ({
  title,
  basicContent,
  advancedContent,
  examplesContent,
}) => {
  const { mode } = useMode();

  let content = "";
  if (!mode) {
    content = "";
  } else if (isBasicMode(mode)) {
    content = basicContent;
  } else if (isAdvancedMode(mode)) {
    content = advancedContent;
  } else if (isExamplesMode(mode)) {
    content = examplesContent;
  }

  return (
    <div className="content">
      <Container
        header={
          <Header
            variant="h2"
            actions={<ModeSelector />}
          >
            {title}
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

export default ContentPage;
