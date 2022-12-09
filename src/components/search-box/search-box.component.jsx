import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component{
    render(){
        const {onSearchChange} = this.props;
        return(
            <input onChange={onSearchChange} className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeholder}  />
        )
    }
}
export default SearchBox;