import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../Interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFile } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenFileBarTabs = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.fileTree
  );
  const { activeTabId } = clickedFile;
  const handleClickFile = () => {
    dispatch(
      setClickedFile({
        activeTabId: file.id,
        fileName: file.name,
        fileContent: file.content,
      })
    );
  };
  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFile([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFile(filtered));
    dispatch(
      setClickedFile({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };
  return (
    <div
      onClick={handleClickFile}
      className={`max-w-screen-md flex items-center p-2 border-b-2 border-t-blue-500 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenFileBarTabs;
