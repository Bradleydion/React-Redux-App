import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const Author = ({author, isFetching, error}) =>{
    return(
        <>
        <h2>Featuerd Author {author}</h2>
        
        <button>Get New Author!</button>
        </>
    );
}
const mapStateToProps = (state) => {
    return{
        title: title
    }
}

map

export default connect(mapStateToProps)(Author);

