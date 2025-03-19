import OpenFileBar from "./Components/openFileBar";
import RecursiveComponent from "./Components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-gray-600 border-b-[1px]">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenFileBar  />
      </div>
    </div>
  );
}

export default App;
