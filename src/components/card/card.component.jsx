import './card.styles.css';
const Card= ({id,name,email})=>(
    <div key={id} className="card-container">
        {/* https://robohash.org/1?set=set2 */}
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)
export default Card;