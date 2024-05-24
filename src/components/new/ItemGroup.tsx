import React, { useState } from "react";
import ItemBox from "./ItemBox";

export type CompType = 'TEXT' | 'IMAGE' | 'TABLE' | 'LIST' | 'HEADER';

interface Item {
    id: string;
    type: CompType;
}

const ItemGroup = () => {
    const [items, setItems] = useState<Item[]>([{id: "firstItem", type: 'TEXT'}]);

    const handleClickNewItem = (newType: CompType) => {
        const newItem = {
            id: Date.now().toString(),
            type: newType
        };
        console.log(newItem)
        setItems([...items, newItem]);
    };

    const handleDeleteItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            {items.map((item: Item) => (
                <ItemBox 
                    key={item.id} 
                    onClickNewItem={handleClickNewItem}
                    onDeleteItem={() => handleDeleteItem(item.id)}
                    item={item} 
                />
            ))}
        </div>
    )
}

export default ItemGroup;
