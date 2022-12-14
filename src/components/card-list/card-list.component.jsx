import Card from "../card/card.component";
import './card-list.styles.css';
const CardList = ({monsters})=>(
    <div className="card-list">
        {monsters.map(({id,name,email})=>{
            return <Card id={id} name={name} email={email}/>
            
        })}
    </div> 
)
export default CardList;