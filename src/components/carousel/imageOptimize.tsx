import Image from "next/image";

interface ImageSrcProps {
    name: string;
    images: string;
}
const ImageResolution = ({name, images}: ImageSrcProps) => {
    return (
        <>
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

export default ImageResolution;