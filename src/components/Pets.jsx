import React from "react";
import Button from 'react-bootstrap/Button';

function Pets( { data, setData } ) {
    const handleDelete = e => {
        // console.log(data)
          const filteredPet = data.filter(d => {
            return ((d.id.toString() !== e.currentTarget.value.toString()))
          })
          // setFavourite([...favourite, ...filteredPets])
          // console.log(filteredPet)
          setData(filteredPet) //!!
        };


    return (
        data.map(data => (
            <tr>
            <td>{data.name}</td>
            <td>{data.breed}</td>
            <td>{data.age}</td>
            <td>{data.price}</td>
            <td>
            <Button gap={1} onClick={handleDelete} value={data.id}>
              Remove
            </Button>
            </td>
        </tr>))
    );
}

export default Pets;
