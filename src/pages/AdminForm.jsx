import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import PetsList from "../components/PetsList";

function AdminForm( {data, setData} ) {

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    price: "",
    image: ""
  })

  // const [formData, setFormData] = useState(data)

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(data);

    setData(
      [
      formData,
      ...data
    ]
    )
  }
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({
      ...formData, 
      [key]: value
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          {/* <label htmlFor="username">Name</label> */}
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />

          {/* <label htmlFor="breed">Breed</label> */}
          <input
            type="text"
            id="breed"
            placeholder="Breed"
            value={data.breed}
            onChange={handleChange}
          />

          {/* <label htmlFor="age">Age</label> */}
          <input
            type="number"
            id="age"
            placeholder="Age"
            value={data.age}
            onChange={handleChange}
          />

          {/* <label htmlFor="price">Price</label> */}
          <input
            type="number"
            id="price"
            value={data.price}
            placeholder="Price"
            step="0.01"
            onChange={handleChange}
          />

          {/* <label htmlFor="price">Image</label> */}
          <input
            type="text"
            id="image"
            value={data.image}
            placeholder="Image url"
            onChange={handleChange}
          />
        <Button gap={1} value={data.id} type="submit" className="add-pet-button">
          Add Pet
        </Button>
        </div>
      </form>
      <PetsList data={data} setData={setData}/>
    </div>

  );
}

export default AdminForm;
