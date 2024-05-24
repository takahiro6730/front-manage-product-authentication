import React from "react";
import styles from "./item.module.css";

const TextItem = () => {
    return (
        <div>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 outline-none" placeholder="文章を入力" required />
        </div>
    )
}

export default TextItem;