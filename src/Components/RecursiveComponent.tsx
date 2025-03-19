import { useState } from "react";
import { IFile } from "../Interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFile } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const handleOpenFile = () => {
    dispatch(
      setClickedFile({
        activeTabId: fileTree.id,
        fileName: fileTree.name,
        fileContent: fileTree.content,
      })
    );
    if (!doesFileObjectExist(openedFiles, fileTree.id)) {
      dispatch(setOpenedFile([...openedFiles, fileTree]));
    }
  };


  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="ml-4 mb-1">
      <div
        className={`flex items-center px-2 py-1 rounded-md transition-all 
          ${
            fileTree.isFolder
              ? "hover:bg-gray-800 text-gray-400"
              : "hover:bg-gray-700 text-gray-400"
          } cursor-pointer`}
        onClick={fileTree.isFolder ? toggle : handleOpenFile}
      >
        {fileTree.isFolder ? (
          <>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon fileName={fileTree.name} isOpen={isOpen} isFolder />
            <span className="ml-2 font-medium">{fileTree.name}</span>
          </>
        ) : (
          <>
            <RenderFileIcon fileName={fileTree.name} />
            <span className="ml-2">{fileTree.name}</span>
          </>
        )}
      </div>

      {isOpen &&
        fileTree.children?.map((file) => (
          <RecursiveComponent key={file.id} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
