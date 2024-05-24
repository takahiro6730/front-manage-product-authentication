"use client"
import React from "react";
import styles from "./blog.module.css"

import ThumbnailBox from "./ThumbnailBox";
import ItemGroup from "./ItemGroup";

export const NewBlog = () => {
    return (
        <div className="w-full flex justify-center bg-white py-10 min-h-[800px]">
            <div className="w-full max-w-[980px]">
                <div className={styles["thumbnail-area"]}>
                    <ThumbnailBox />
                </div>
                <div className="w-full">
                    <input type="text" id="blog_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 outline-none" placeholder="タイトルを入力" required />
                </div>
                <ItemGroup />
            </div>
            
        </div>
    );
};

export default NewBlog;
