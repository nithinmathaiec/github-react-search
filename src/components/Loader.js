import React from 'react';
import '../index.css';

const Loader = props => {
    if(props.loading) {
        return (<div className="loader"><div className="spinner-border" /></div>);
    }
    return null; 
};

export default Loader;
