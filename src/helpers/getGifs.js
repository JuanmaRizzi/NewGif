export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}Z&limit=8&api_key=ID4lEzDkUuI7QzuF8T4LmUtegZIFNowY`;
  const resp = await fetch(url);
  const { data } = await resp.json(); //desestructuramos la data

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
getGifs();
