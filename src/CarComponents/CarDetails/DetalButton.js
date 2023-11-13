import handleShowDetails from './HandleShowDetails'

  const DatailButton = ({year}) =>{
    return (
        <div>
           <button onClick={()=> handleShowDetails(year)}>Details</button>
        </div>
    )
}
export default DatailButton;