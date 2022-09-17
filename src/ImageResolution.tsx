import Image from "next/image";

interface ImageSrcProps {
    key: number;
    name: string;
    images: string;
}
const ImageResolution = ({key, name, images}: ImageSrcProps) => {
    return (
        <>
            <div key={key}>
                <Image src={images}
                       alt={name}
                       width={360}
                       height={156}
                       layout={"intrinsic"}
                       objectFit={'contain'}
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       unoptimized/>
            </div>
        </>
    )
}

export default ImageResolution;