import './search-box.styles.css';
const SearchBox = ({className, onSearchChange,placeholder})=>(<input onChange={onSearchChange} className={`search-box ${className}`} type='search' placeholder={placeholder}  />)
export default SearchBox;