import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClickedFile, setOpenedFile } from "../app/features/fileTreeSlice";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickedOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };

    window.addEventListener("click", handleClickedOutSide);

    return () => {
      window.removeEventListener("click", handleClickedOutSide);
    };
  }, [setShowMenu]);

  const handleCloseAllActions = () => {
    dispatch(setOpenedFile([]));
  };

  const handleCloseFileActions = (selectedId: string) => {
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
        fileName: name,
        fileContent: content,
      })
    );
  };
  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        {openedFiles.map((file) => (
          <li
            key={file.id}
            onClick={() => handleCloseFileActions(file.id)} // Pass file id correctly
            className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          >
            Close {file.name}
          </li>
        ))}
        <li
          onClick={handleCloseAllActions}
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
