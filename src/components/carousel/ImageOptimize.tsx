import Image from "next/image";

interface ImageSrcProps {
    name: string;
    src: string;
}
const ImageOptimize = ({name, src}: ImageSrcProps) => {
    return (
        <>
            {/* image width, height should be edited responsively */}
            <Image src={src}
                   alt={name}
                   width={360}
                   height={156}
                   layout={"intrinsic"}
                   unoptimized
            />
        </>
    )
}

export default ImageOptimize;