import { useState } from "react";
import bulma from "bulma/css/bulma.css";
import "./App.css";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    search(valueInput);
    debugger;
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Find Image</p>
        </div>
      </section>
      <form onSubmit={handleFormSubmit}>
        <input
          value={valueInput}
          onChange={handleChange}
          class="input is-rounded"
          type="text"
          placeholder="Search Images "
        ></input>
      </form>
    </div>
  );
}

export default SearchHeader;
