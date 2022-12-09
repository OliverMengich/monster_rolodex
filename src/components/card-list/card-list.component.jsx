import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";
class CardList extends Component{
    render(){
        // components will also re-render when props change. Whenever props is different, 
        // console.log("Render in CardList Component");
        // console.log(this.props.monsters,"in Card_list");
        const { monsters} = this.props;
        return(
            <div className="card-list">
                {monsters.map(({id,name,email})=>{
                    return( 
                        <Card id={id} name={name} email={email}/>
                    )
                })}
            </div>
        )
    }
}
export default CardList;