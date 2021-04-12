import React from 'react';

function makeTable(props) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">PHOTO</th>
                    <th onClick={() => props.filterByProp()} scope="col">NAME</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            {props.results.map(result => (
                <tbody key={result.id.value}>

                    <th scope="row"><img src={result.picture.thumbnail} alt="employee-img"></img></th>
                    <td>{result.name.first} {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{new Date(result.dob.date).getMonth() + 1}/{new Date(result.dob.date).getDate()}/{new Date(result.dob.date).getFullYear()}</td>

                </tbody>
            ))}
        </table>
    )
};

export default makeTable;
