import Image from "next/image";

interface ImageSrcProps {
    name: string;
    images: string;
}
const ImageOptimize = ({name, images}: ImageSrcProps) => {
    return (
        <>
            {/* image width, height should be edited responsively */}
            <Image src={images}
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