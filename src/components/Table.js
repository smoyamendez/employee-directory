import React from 'react';

function makeTable(props) {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">PHOTO</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    )
};

export default makeTable;
