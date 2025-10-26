import { SpaceBetween, StatusIndicator, Toggle } from "@cloudscape-design/components";
import { useMode } from "./mode-context";

const ModeSelector = () => {
  const { learningMode, setLearningMode } = useMode()

  const statusDescription = learningMode ? "Formal" : "Beginner";

  return (
    <SpaceBetween direction="vertical" size="xxs">
      <SpaceBetween direction="horizontal" size="xxs">
        <img
          src="/beginner-mode.png"
          alt="B"
          width={24}
          height={24}
        />
        <Toggle
          onChange={({ detail }) =>
            setLearningMode(detail.checked)
          }
          checked={learningMode}
        />

        <img
          src="/formal-mode.png"
          alt="F"
          width={24}
          height={24}
        />
      </SpaceBetween>
      <StatusIndicator type="info">{statusDescription}</StatusIndicator>
    </SpaceBetween>
  );
}

export default ModeSelector;
