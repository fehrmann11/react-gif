export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aeqfW78jiiBBbqQHIbYeCuPtTRgOJfD4&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    //recorre la data (gigante) y en la constante gifs guarda id, title y url de data.
    const gifs = data.map(img =>
    ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}