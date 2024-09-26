import React from 'react';
import {connect} from 'react-redux';
import {fetchJoke} from "../actions"

const Joke = ({title, joke, isFetching, error, fetchJoke}) =>{
    return(
        <>
        <h1>{title}</h1>
        <h2>{joke}</h2>
        <button onClick={fetchJoke}>Get New Joke!</button>
        </>
    );
}
const mapStateToProps = (state) => {
    return{
        title: state.title,
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {fetchJoke};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);

