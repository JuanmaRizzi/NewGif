// el use en el nombre de este archivo nos indica de que e sun hook; en este caso un "custom hook" Hay otro shooks por fececto, por ejemplo el useState. Recordar que los hooks son simplemente funciones

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  // setTimeout(() => {
  //   setState({
  //     data: [1, 2, 3, 4],
  //     loading: false,
  //   });
  // }, 3000);

  return state; // devuielve el data y el loading:true; el nombre(state) no es importante
};
