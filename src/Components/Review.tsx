import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenFileBar from "./openFileBar";
import FileSyntaxHighlighter from "./content-syntax-highlighter";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ fileTree }: RootState) => fileTree);

  return (
    <>
      <OpenFileBar />
      <FileSyntaxHighlighter content={fileContent} />
    </>
  );
};

export default Preview;
