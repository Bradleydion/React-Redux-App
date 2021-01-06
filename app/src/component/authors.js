import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAuthor} from "../actions"

const Author = ({title, author, isFetching, error}) =>{
    return(
        <>
        <h1>{title}</h1>
        <h2>Featuerd Author {author}</h2>
        
        <button>Get New Author!</button>
        </>
    );
}
const mapStateToProps = (state) => {
    return{
        title: state.title,
        author: state.author,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {fetchAuthor};

export default connect(mapStateToProps, mapDispatchToProps)(Author);

