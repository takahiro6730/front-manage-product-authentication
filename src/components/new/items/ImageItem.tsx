import React, { useState, useEffect } from "react";
import styles from "./item.module.css";
import { useDropzone } from 'react-dropzone';
import Image from "next/image";

interface FileWithPreview extends File {
    preview: string;
}

const ImageItem = () => {
    const [file, setFile] = useState<FileWithPreview | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        const acceptedFile = acceptedFiles[0];
        if (acceptedFile) {
            const fileWithPreview = Object.assign(acceptedFile, {
                preview: URL.createObjectURL(acceptedFile)
            });
            setFile(fileWithPreview);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false // Disable multiple file uploads
    });

    useEffect(() => {
        // Revoke the data uri to avoid memory leaks
        return () => {
            if (file) {
                URL.revokeObjectURL(file.preview);
            }
        };
    }, [file]);

    return (
        <div>
            {(!file) ? (
                <div {...getRootProps()} className={styles.dropzone}>
                    <input {...getInputProps()} />
                    <Image src="/assets/front/image/newBlog/icons/fileUpload.svg" alt="drag and drop" width={50} height={50} />
                </div>
            ) : (
                <div {...getRootProps()} className={styles["file-preview"]}>
                    <div className={styles["file-mosaic"]}>   
                        <img src={file.preview} alt={file.name} />
                        <p>{file.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageItem;
