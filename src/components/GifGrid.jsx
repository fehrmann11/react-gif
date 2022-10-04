import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {/* destructuración de array images*/}
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}//las propiedades de image las estoy esparciendo (id,url,title)
                    />
                ))}
            </div>
        </>
    )
}
