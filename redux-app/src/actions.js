import axios from 'axios';

export const getJoke = ()=>dispatch=>{
    dispatch({ type: "FETCH_JOKE_START" })
    axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw")
    .then(res=>{
        dispatch({ type: "FETCH_JOKE_SUCCESS", payload: res.data})
    })
    .catch(drama=>{
        dispatch({ type: "FETCH_JOKE_FAIL", payload: drama})
    })
}