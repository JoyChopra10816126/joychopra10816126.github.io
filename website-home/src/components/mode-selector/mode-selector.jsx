import { SpaceBetween, Tabs } from "@cloudscape-design/components";
import { getModeFromId, Mode, useMode } from "./mode-context";

const ModeSelector = () => {
  const { mode, setMode } = useMode()

  return (
    <Tabs
      onChange={(event) => {
        const modeId = event.detail.activeTabId
        const newMode = getModeFromId(modeId)
        setMode(newMode)
      }}
      activeTabId={mode.id}
      tabs={[
        {
          label: (<SpaceBetween direction="horizontal" size="xxs">
            <img
              src={Mode.BASIC.imgSource}
              alt="B"
              width={24}
              height={24}
            />
            {Mode.BASIC.label}
          </SpaceBetween>),
          id: Mode.BASIC.id,
        },
        {
          label: (<SpaceBetween direction="horizontal" size="xxs">
            <img
              src={Mode.ADVANCED.imgSource}
              alt="A"
              width={24}
              height={24}
            />
            {Mode.ADVANCED.label}
          </SpaceBetween>),
          id: Mode.ADVANCED.id,
        },
        {
          label: (<SpaceBetween direction="horizontal" size="xxs">
            <img
              src={Mode.EXAMPLES.imgSource}
              alt="E"
              width={24}
              height={24}
            />
            {Mode.EXAMPLES.label}
          </SpaceBetween>),
          id: Mode.EXAMPLES.id,
        }, 
      ]}
    />
  );
}

export default ModeSelector;
