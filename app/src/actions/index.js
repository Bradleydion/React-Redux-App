import axios from 'axios';

// const headers = {
//     Accept: application/json; charset=utf-8
// }

export const fetchJoke = () => (dispatch)=> {
 dispatch ({ type:"FETCHING_JOKE_START"});
 axios.get("https://official-joke-api.appspot.com/jokes/random")
 .then(res => {
     dispatch({type:"FETCHING_JOKE_SUCCESS", payload:res.data.setup})
     dispatch({type:"FETCHING_JOKE_SUCCESS2",
     payload:res.data.punchline
    })
     console.log(res);
 })
 .catch(err=>{
     dispatch({type:"FETCHING_JOKE_ERROR", payload: err.response})
     console.log(err)
 })
}