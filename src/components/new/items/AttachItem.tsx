import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from "./item.module.css";
import Image from 'next/image';

interface FileWithPreview extends File {
    preview: string;
}

const DropzoneComponent: React.FC = () => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        const filesWithPreview = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );
        setFiles(prevFiles => [...prevFiles, ...filesWithPreview]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    return (
        <div>
            <div {...getRootProps()} className={styles["dropzone"]}>
                <input {...getInputProps()} />
                <Image src="/assets/front/image/newBlog/icons/fileUpload.svg" alt="drap and drop" width={50} height={50} />
            </div>
            <div className={styles["file-preview"]}>
                {files.map((file, index) => (
                    <div className={styles["file-mosaic"]}>
                        <Image src="/assets/front/image/newBlog/icons/upload.svg" alt={file.name} width={50} height={50} />
                        <p>{file.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropzoneComponent;
