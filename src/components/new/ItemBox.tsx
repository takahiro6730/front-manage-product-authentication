import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TextItem from "./items/TextItem";
import HeaderItem from "./items/HeaderItem";
import ImageItem from "./items/ImageItem";
import styles from "./itemgroup.module.css";


export type CompType = 'TEXT' | 'IMAGE' | 'TABLE' | 'LIST' | 'HEADER';

const plus_area = [
    { svg: "text.svg", text: "文章", type: "TEXT" },
    { svg: "header.svg", text: "見出し", type: "HEADER" },
    { svg: "list.svg", text: "リスト", type: "LIST" },
    { svg: "quote.svg", text: "引用", type: "QUOTE" },
    { svg: "code.svg", text: "コード", type: "CODE" },
    { svg: "table.svg", text: "テーブル", type: "TABLE" },
    { svg: "image.svg", text: "画像", type: "IMAGE" },
    { svg: "attach.svg", text: "ファイル", type: "ATTACH" },
    { svg: "link.svg", text: "リンクカード", type: "LINK" },
    { svg: "payline.svg", text: "有料エリア境界線", type: "PAYLINE" },
];

interface Item {
    id: string;
    type: CompType;
}

interface Props {
    onClickNewItem: (newType: CompType) => void;
    onDeleteItem: () => void;
    item: Item;
}

const ItemBox = ({ onClickNewItem, onDeleteItem, item }: Props) => {
    const [addItemShow, setAddItemShow] = useState<boolean>(false);
    const addItemBoxRef = useRef<HTMLDivElement>(null);
    const [editItemShow, setEditItemShow] = useState<boolean>(false);
    const editItemBoxRef = useRef<HTMLDivElement>(null);

    const openAddItemBox = () => setAddItemShow(true);

    const handleClickOutside = (event: MouseEvent) => {
        if (addItemBoxRef.current && !addItemBoxRef.current.contains(event.target as Node)) {
            setAddItemShow(false);
        }
    };

    useEffect(() => {
        if (addItemShow) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [addItemShow]);

    const openEditItemBox = () => setEditItemShow(true);

    const handleEditClickOutside = (event: MouseEvent) => {
        if (editItemBoxRef.current && !editItemBoxRef.current.contains(event.target as Node)) {
            setEditItemShow(false);
        }
    };

    useEffect(() => {
        if (editItemShow) {
            document.addEventListener("mousedown", handleEditClickOutside);
        } else {
            document.removeEventListener("mousedown", handleEditClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleEditClickOutside);
        };
    }, [editItemShow]);

    const addNewItem = (type: CompType) => () => {
        onClickNewItem(type);
        setAddItemShow(false);
    };

    return (
        <div className="relative">
            <div className="absolute -left-16 top-4 flex">
                <div className="relative">
                    <div onClick={openAddItemBox}>
                        <Image src="/assets/front/image/newBlog/icons/plus.svg" alt="plus" width={24} height={30} />
                    </div>
                    {addItemShow && (
                        <div className={styles["item-group__box"]} ref={addItemBoxRef}>
                            <div className={styles["popover-items"]}>
                                {plus_area.map((item, index) => (
                                    <div className={styles["popover-item"]} data-type={item.type} key={index} onClick={addNewItem(item.type as CompType)}>
                                        <div className={styles["popover-item__icon"]}>
                                            <Image src={`/assets/front/image/newBlog/icons/${item.svg}`} alt="textsvg" width={24} height={24} />
                                        </div>
                                        <div className={styles["popover-item__title"]}>{item.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <div onClick={openEditItemBox}>
                        <Image src="/assets/front/image/newBlog/icons/reference.svg" width={24} height={30} alt="reference" />
                    </div>
                    {editItemShow && (
                        <div className={styles["item-group__box"]} ref={editItemBoxRef}>
                            <div className={styles["popover-items"]}>
                                <div className={styles["popover-item"]} id="move-up">
                                    <div className={styles["popover-item__icon"]}>
                                        <Image src="/assets/front/image/newBlog/icons/arrowUp.svg" alt="arrowUp" width={24} height={24} />
                                    </div>
                                    <div className={styles["popover-item__title"]}>上に移動</div>
                                </div>
                                <div className={styles["popover-item"]} id="move-delete" onClick={onDeleteItem}>
                                    <div className={styles["popover-item__icon"]}>
                                        <Image src="/assets/front/image/newBlog/icons/delete.svg" alt="delete" width={24} height={24} />
                                    </div>
                                    <div className={styles["popover-item__title"]}>削除</div>
                                </div>
                                <div className={styles["popover-item"]} data-item-name="move-down">
                                    <div className={styles["popover-item__icon"]}>
                                        <Image src="/assets/front/image/newBlog/icons/arrowDown.svg" alt="arrowDown" width={24} height={24} />
                                    </div>
                                    <div className={styles["popover-item__title"]}>下に移動</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div key={item.id}>
                {item.type === 'TEXT' && <TextItem />}
                {item.type === 'HEADER' && <HeaderItem />}
                {item.type === 'IMAGE' && <ImageItem />}
            </div>
        </div>
    );
};

export default ItemBox;
