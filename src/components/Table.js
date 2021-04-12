import React from 'react';

function makeTable(props) {
    const filterCursor = event => {
        event.target.style.cursor = "pointer"
    }
    
   
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">PHOTO</th>
                    <th onClick={() => props.filterByProp()} onMouseOver={filterCursor} scope="col">NAME</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map(result => (
                <tr  key={result.id.value} >
                <th scope="row"><img src={result.picture.thumbnail} alt="employee-img"></img></th>
                <td>{result.name.first} {result.name.last}</td>
                <td><a href={`tel:${result.phone}`}>{result.phone}</a></td>
                <td><a href={`mailto:${result.email}`}>{result.email}</a></td>
                <td>{new Date(result.dob.date).getMonth() + 1}/{new Date(result.dob.date).getDate()}/{new Date(result.dob.date).getFullYear()}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default makeTable;
