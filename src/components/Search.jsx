import React, { useEffect, useState } from "react";

function Search( { data, setData } ) {
  const [ searchValue, setSearchValue ] = useState("")

//   const initData = data

  useEffect(() => {
    const filteredPets = data.filter(d => {
      const lowerPet = d.description.toLowerCase()
      return lowerPet.includes(searchValue.toLowerCase())
      })
      setData(filteredPets)
  }, [searchValue]);

  const onChange = (e) => setSearchValue(e.target.value)

//   console.log(data)

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchValue}
        placeholder="Search for friends"
        onChange={onChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
