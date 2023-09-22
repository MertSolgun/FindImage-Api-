import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");
  const handleForSubmit = (event) => {
    search(valueInput);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };
  return (
    <div className="SearchDiv">
      <form onSubmit={handleForSubmit}>
        <label>Ne Ariyorsun</label>
        <input onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SearchHeader;
