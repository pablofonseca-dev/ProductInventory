import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearChangeDataHandler = (event) => {
    const target = event.target; 
    props.onSelectedYear(target.value);
  }
  return (
      <form>
        <div className="expenses-filter">
          <div>
            <label htmlFor="filter_year" className="expenses-filter__description">
              Filter by year:
            </label>
          </div>
          <div>
            <select
              name="year"
              id="filter_year"
              className="expenses-filter__select"
              onChange={yearChangeDataHandler}
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </form>
  );
};

export default ExpensesFilter;
