"use client"
import React from "react";
import styles from  "./blog.module.css"

import ThumbnailBox from "./ThumbnailBox";

export const NewBlog = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[980px]">
                <div className={styles["thumbnail-area"]}>
                    <ThumbnailBox />
                </div>
                <div className="w-full">
                    {/* <MySunEditor /> */}
                </div>
            </div>
        </div>
    );
};

export default NewBlog;
