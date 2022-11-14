import React from "react";
import Pets from "./Pets";

function PetsList( { data, setData } ) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h4 className="ui center aligned header">Name</h4>
          </th>
          <th>
            <h4 className="ui center aligned header">Breed</h4>
          </th>
          <th>
            <h4 className="ui center aligned header">Age</h4>
          </th>
          <th>
            <h4 className="ui center aligned header">Price</h4>
          </th>
          <th>
            <h4 className="ui center aligned header">Remove</h4>
          </th>
        </tr>
        <Pets data={data} setData={setData}/>
      </tbody>
    </table>
  );
}

export default PetsList;
