import React, {useState} from "react";
import styles from "./item.module.css";
import ImageUpload from "react-image-easy-upload";

const ImageItem = () => {
    const [uploadedImage,setUploadedImage] = useState(null)
    return (
        <div>
            <ImageUpload setImage={setUploadedImage} width={980} height={600} />
        </div>
    )
}

export default ImageItem;