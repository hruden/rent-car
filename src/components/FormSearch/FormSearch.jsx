import { useState } from "react";

export default function FormSearch() {
    const [brand,setBrand] = useState('')
    const [prise, setPrise] = useState(Number())

const handleSubmit = (e) => {
    e.preventDefault();
}
const handleChange = (e) => {
    if(e.target.name === 'brand')
{    if(e.target.value === "Select brand"){
        return setBrand('')
    }
    return setBrand(e.target.value)
}
else {
    return setPrise(e.target.value )
}
}

const handle = `to ${prise.value} $`

// console.log(`brand=${brand}`);
// console.log(`prise=${prise}`);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Car brand</label>
        <select name='brand' value={brand.value} onChange={handleChange}>
            <option value="Select brand">Select brand</option>
            <option value="lg">LG</option>
        </select>
        <label>Price/ 1 hour</label>
        <select value={handle} onChange={handleChange}>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <label>Car mileage / km</label>
        <input />
        <input/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
