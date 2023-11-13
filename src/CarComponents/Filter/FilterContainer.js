import handleFilterByYear from './HandaleFilterByYear';
const FilterContainer = () =>{
   return(
      <div className="filter-container">
      <button onClick={() => handleFilterByYear(2021)} >2021</button>
      <button onClick={() => handleFilterByYear(2022)}>2022</button>
      <button onClick={() => handleFilterByYear(2023)} >2023</button>
      <button onClick={() => handleFilterByYear(0)} >Show All</button>
    </div>
   ) 
}
export default FilterContainer;