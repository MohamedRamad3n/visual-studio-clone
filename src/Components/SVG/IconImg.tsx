interface IProps {
    src: string
}
const IconImg = ({ src }: IProps) => {
    return (
        <img src={src} className="w-7 h-7" />
    )
}

export default IconImg