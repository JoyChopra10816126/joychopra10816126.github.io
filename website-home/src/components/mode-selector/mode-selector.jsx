import { SpaceBetween, StatusIndicator, Toggle } from "@cloudscape-design/components";
import { useMode } from "./mode-context";

const ModeSelector = () => {
  const { isFormalMode, setIsFormalMode } = useMode()

  const statusDescription = isFormalMode ? "Formal" : "Beginner";

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
            setIsFormalMode(detail.checked)
          }
          checked={isFormalMode}
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
