import  handleCloseDetails from './HandleCloseDetails';
const   CloseDatailButton = ({year}) =>{
    return (
        <div className="delet-button-container">
           <button className="delet-button" onClick={()=>handleCloseDetails(year)}> Remove Detail</button>
        </div>
    )
}
export default CloseDatailButton;