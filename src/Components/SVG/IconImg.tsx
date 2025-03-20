interface IProps {
  src: string;
  className?: string;
}
const IconImg = ({ src, className = "w-7 h-7" }: IProps) => {
  return <img src={src} className={className} />;
};

export default IconImg;
