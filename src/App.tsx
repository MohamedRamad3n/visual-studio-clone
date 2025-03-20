import { useSelector } from "react-redux";
import RecursiveComponent from "./Components/RecursiveComponent";
import ResizablePanel from "./Components/ResiablPanels";
import Preview from "./Components/Review";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./Components/Welcome";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
