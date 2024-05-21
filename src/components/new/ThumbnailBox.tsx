import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop";
import imageCompression from 'browser-image-compression';
import styles from './blog.module.css';
import { Range } from 'react-range';
import Modal from "./Modal";


const ThumbnailBox = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);
    const crop_size = { width: 560, height: 300 }

    const onDrop = useCallback(async (acceptedFiles: any) => {
        const file = acceptedFiles[0];

        // Options for image compression
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(file, options);
            console.log('Compressed File:', compressedFile);

            // Read the compressed file and convert it to a data URL
            const reader = new FileReader();
            reader.onload = (e: any) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(compressedFile);
            setShowModal(true)
        } catch (error) {
            console.error('Error compressing file:', error);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleZoomChange = (value: number[]) => {
        setZoom(value[0]);
    };

    const onCropComplete = useCallback(async (croppedArea: Area, croppedAreaPixels: Area) => {
        // console.log("0000000000000000cropCompleate")
        // const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        // console.log(croppedImage)
        // // setCroppedImage(croppedImage);
        if (!imageSrc) {
            console.error('Image source is not loaded');
            return;
          }
      
          try {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            // setCroppedImage(croppedImage);
          } catch (error) {
            console.error('Error cropping image:', error);
          }
    }, [imageSrc]);

    const getCroppedImg = (imageSrc: any, crop: any) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = imageSrc;
          image.crossOrigin = 'anonymous'; // To avoid CORS issues
    
          image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            if (!ctx) {
              reject(new Error('Canvas context is not available'));
              return;
            }
    
            canvas.width = crop.width;
            canvas.height = crop.height;
    
            ctx.drawImage(
              image,
              crop.x,
              crop.y,
              crop.width,
              crop.height,
              0,
              0,
              crop.width,
              crop.height
            );
            console.log(ctx);
            console.log(canvas);
    
            canvas.toBlob((blob) => {
                console.log(blob)
              if (blob) {
                const url = URL.createObjectURL(blob);
                resolve(url);
              } else {
                reject(new Error('Canvas is empty'));
              }
            }, 'image/jpeg');
          };
    
          image.onerror = (error) => reject(error);
        });
      };

    return (
        <div className="App">
            <div className={styles["dropzone"]} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={styles["dropify-form-group"]} id="dropify_image_path">
                    <div className={styles["dropify-wrapper"]}>
                        <div className="dropify-message">
                            <p>画像をアップロード(推奨サイズ:720×378px以上)</p>
                        </div>
                    </div>
                </div>
            </div>
            {croppedImage && (
        <div className={styles["previewContainer"]}>
          <h3>Preview</h3>
          <img src={croppedImage} alt="Cropped" className={styles["previewImage"]} />
        </div>
      )}
            <div>
                {showModal &&
                    <Modal onClose={() => setShowModal(false)} onConfirm={() => onCropComplete(crop as Area, crop as Area)}>
                        <div className={styles["crop-modal"]}>
                            {imageSrc && (
                                <div className={styles["cropContainer"]}>
                                    <Cropper
                                        image={imageSrc}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={4 / 3}
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        cropSize={crop_size}
                                    />
                                </div>
                            )}
                            <div className={styles["sliderContainer"]}>
                                <Range
                                    step={0.1}
                                    min={1}
                                    max={3}
                                    values={[zoom]}
                                    onChange={handleZoomChange}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '6px',
                                                width: '100%',
                                                backgroundColor: '#ccc',
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            key={'range'}
                                            style={{
                                                ...props.style,
                                                height: '20px',
                                                width: '20px',
                                                backgroundColor: '#999',
                                                borderRadius: '50%',
                                                outline: 'none',
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </Modal>
                }
            </div>

        </div>
    );
};

export default ThumbnailBox;
