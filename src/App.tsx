import OpenFileBar from "./Components/openFileBar";
import RecursiveComponent from "./Components/RecursiveComponent";
import ResizablePanel from "./Components/ResiablPanels";
import { fileTree } from "./data/fileTree";

function App() {
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
          rightPanel={<OpenFileBar />}
        />
      </div>
    </div>
  );
}

export default App;
