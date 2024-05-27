import React, { useState } from "react";
import ItemBox from "./ItemBox";

export type CompType = 'TEXT' | 'IMAGE' | 'TABLE' | 'LIST' | 'HEADER' | 'LINK' | 'ATTACH';

interface Item {
    id: string;
    type: CompType;
}

interface JsonData {
    setJsonData: () => void;
    [key: string]: any;
  }

interface ItemGroupProps {
    jsonData: JsonData;
    setJsonData: (data: JsonData) => void;
}

interface ItemsData {
    [key: string]: any;
}
const ItemGroup = ({ jsonData, setJsonData }: ItemGroupProps) => {

    const [itemsData, setItemsData] = useState<ItemsData>()

    const saveItems = () => {
        setJsonData({...jsonData, itemsData: itemsData})
    }

    const [items, setItems] = useState<Item[]>([{ id: "firstItem", type: 'TEXT' }]);

    const handleClickNewItem = (newType: CompType, index: number) => {
        const newItem = {
            id: Date.now().toString(),
            type: newType
        };
        const updatedItems = [...items];
        updatedItems.splice(index + 1, 0, newItem);
        setItems(updatedItems);
        saveItems()
    };

    const swapElement = (arr: Item[], i: number, j: number) => {
        if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
            console.log("Invalid index number");
            return;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    const handleClickUpItem = (index: number) => {

        const updatedItems = [...items];
        swapElement(updatedItems, index, index - 1);
        setItems(updatedItems);
        saveItems()
    };

    const handleClickDownItem = (index: number) => {
        const updatedItems = [...items];
        swapElement(updatedItems, index, index + 1);
        setItems(updatedItems);
        console.log(items)
        saveItems()
    };

    const handleDeleteItem = (id: string) => {
        if (items.length == 1) return;
        setItems(items.filter(item => item.id !== id));
        saveItems()
    };

    return (
        <div className="pb-40">
            {items.map((item: Item, index: number) => (
                <ItemBox
                    // itemsData={itemsData} setItemsData={setItemsData}
                    key={item.id}
                    onClickNewItem={handleClickNewItem}
                    onDeleteItem={() => handleDeleteItem(item.id)}
                    onClickUpItem={handleClickUpItem}
                    onClickDownItem={handleClickDownItem}
                    item={item}
                    item_num={index}
                />
            ))}
        </div>
    )
}

export default ItemGroup;
