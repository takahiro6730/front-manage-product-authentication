import React from "react";
import Image from "next/image";

const LinkItem = () => {
    return (
        <div className="flex border bg-gray-50 border-gray-300">
            <Image src="/assets/front/image/newBlog/icons/link.svg" alt="link" width={24} height={24} className="mx-2"/>
            <input type="text" className="bg-gray-50 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="文章を入力" required />
        </div>
    )
}

export default LinkItem;