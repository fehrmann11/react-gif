import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    //async en efect no se puede, por lo tanto mejor es llamarlo dentro del efect como una función async 
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []) //vacía significa que se lanza solo la primera vez

    return {
        images, //images:images
        isLoading// isLoaging = isLoading
    }
}
