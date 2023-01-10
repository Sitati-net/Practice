import React, {useState} from "react";

const Search = () => {
    const [search, setSearch] = useState("")
    const cannabis = [

  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },

];

const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
}
if (search.length > 0) {
    cannabis.filter((country) => {
        return country.name.match(search)
    });
}
    return(
        <div>
            <input 
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={search} />

<table>
  <tr>
    <th>Country</th>
    <th>Continent</th>
  </tr>

{cannabis.map((country, index) => {

<div>
  <tr>
    <td>{country.name}</td>
    <td>{country.continent}</td>
  </tr>
</div>

})}
</table>
<button type="button">Book Now</button>
        </div>
    )
}

export default Search