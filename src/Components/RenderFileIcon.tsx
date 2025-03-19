import FileIcon from "./SVG/File";
import IconImg from "./SVG/IconImg";

interface IProps {
  fileName: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const extensionIconPaths: Record<string, string> = {
  /*Files */
  tsx: "/icons/react_ts",
  html: "/icons/html",
  json: "/icons/json",
  vite: "/icons/vite",
  css:"/icons/css",
  md:"/icons/mdx",
  node_modules: "/icons/folder-node",
  public: "/icons/folder-public",
  src: "/icons/folder-src",
  data: "/icons/folder-database",
  components: "/icons/folder-components",
};
const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }
  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
