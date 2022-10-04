import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one piece'])

    const onAddCategory = (newCategory) => {
        //new category viene de addCategory formateado
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                onNewCategory={onAddCategory} />

            {/* lista de gif */}

            {categories.map(category => (<GifGrid key={category} category={category} />))}

        </>
    )
}
