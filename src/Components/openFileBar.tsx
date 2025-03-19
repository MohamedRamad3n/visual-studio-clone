import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenFileBarTabs from "./OpenFileBarTabs";
import FileSyntaxHighlighter from "./content-syntax-highlighter";

const OpenFileBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree
  );
  console.log(clickedFile);
  
  /*  // Detect file type for syntax highlighting
   const getFileLanguage = (fileName: string) => {
     if (fileName.endsWith(".tsx") || fileName.endsWith(".ts")) return "typescript";
     if (fileName.endsWith(".js")) return "javascript";
     if (fileName.endsWith(".css")) return "css";
     if (fileName.endsWith(".html")) return "html";
     if (fileName.endsWith(".json")) return "json";
     return "plaintext"; // Default
   }; */
  return (
    <div>
      <div className="flex">
        {openedFiles.map((file) => (
          <OpenFileBarTabs key={file.id} file={file} />
        ))}
      </div>

      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
};

export default OpenFileBar;
