import React from 'react';
import '../index.css';

const Table = props => {
    if(props.searchData) {
        const tableContent = props.searchData.map((dataInput) => {
            return (
            <tr>
                <td>{dataInput.name}</td>
                <td>{dataInput.url}</td>
                <td>{dataInput.description}</td>
                <td>{dataInput.language}</td>
                <td>{dataInput.watchers}</td>
                <td>{dataInput.forks_count}</td>
                <td>{dataInput.open_issues_count}</td>
                <td>{dataInput.stargazers_count}</td>
            </tr>
            )
        });
        return(
            <table className="table" border='1|1'>
            <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Description</th>
            <th>Language</th>
            <th>Watchers</th>
            <th>Forks Count</th>
            <th>Open Issues Count</th>
            <th>Stargazers Count</th>
            </tr>
        {tableContent}
        </table>
        ); 
    }
    return null; 
};

export default Table;

 