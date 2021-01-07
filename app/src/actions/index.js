import axios from 'axios';

export const fetchJoke = () => (dispatch)=> {
 dispatch ({ type:"FETCHING_JOKE_START"});
 axios.get("https://official-joke-api.appspot.com/random_joke")
 .then(res => {
     dispatch({type:"FETCHING_JOKE_SUCCESS", payload:res})
     console.log(res);
 })
 .catch(err=>{
     dispatch({type:"FETCHING_JOKE_ERROR", payload: err.response})
     console.log(err)
 })
}