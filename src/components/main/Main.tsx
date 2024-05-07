"use client";
import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import MainSwiper from "./MainSwiper";
import { HeartIcon } from './HeartIcon'; 
import styles from "./main.module.css";
import Image from "next/image";

const recommended_cards = [
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
]


const Main = () => {
    const [filled, setFilled] = useState<boolean>(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilled(event.target.checked);
        console.log(filled);
      };


    return (
        <>
            <MainSwiper />
            <div className="flex justify-center font-NotoSans">
                <div className={styles["container-lg"]}>
                    <h1 className={styles["container--h1"]}>注目記事</h1>
                    <div className={styles["card-section"]}>
                    {recommended_cards.map((item: any, index: number)=>(
                        <div className={styles["card-item"]}>
                            <div className={styles["card-item-top"]}>
                                <div className={styles["card-item-top-img"]}>
                                    <Image src={item.image} height={100} width={150} alt={item.category} />
                                </div>
                                <div className={styles["card-item-top-category"]}>
                                    {item.category}
                                </div>
                                <div className={styles["card-item-top-like"]}>
                                    <Checkbox defaultSelected id={'like_check' + index.toString()} icon={<HeartIcon filled={filled} size={24} height={24} width={24} label="Heart"/>}  onChange={handleCheckboxChange} ></Checkbox>
                                </div>
                            </div>
                            <div className={styles["card-item-bottom"]}>
                                <div className={styles["card-item-bottom-title"]}>

                                </div>
                                <div className={styles["card-item-bottom-clap"]}>

                                </div>
                                <div className={styles["card-item-bottom-user"]}>
                                    <div className={styles["card-item-bottom-user-avatar"]}>

                                    </div>
                                    <div className={styles["card-item-bottom-user-name"]}>
                                        
                                    </div>
                                    <div className={styles["card-item-bottom-user-access"]}>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Main;