import './App.css';
import {useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
const App = ()=>{
	const [searchField,setSearchField] =useState('a');
	const [monsters,setMonsters] = useState([]);
	console.log('Render');
	const [filteredMonsters,setFilteredMonsters] = useState(monsters);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res=> res.json())
		.then(res=>setMonsters(res))
		.catch(err=>console.error(err))
	},[]);

	useEffect(()=>{
		const filteredMon = monsters.filter((monster)=> {
			return monster.name.toLowerCase().includes(searchField)
		});
		setFilteredMonsters(filteredMon);
		console.log("Triggers only on SearchField Change");
	},[monsters,searchField]);

	const onSearchChange = (event)=>{
 		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	}
	
	return(
		<div className="App">
 				<h1 className='app-title'>Monsters Rolodex</h1>
 				<SearchBox onSearchChange={onSearchChange} placeholder="Search Monsters" className='monsters-search-box' />
 				<CardList monsters={filteredMonsters} />
			</div>
	)
}
// class App extends Component {
// 	constructor(){
// 		super();
// 		this.state={
// 			monsters:[],
// 			searchField: '',
// 			count: 0
// 		}
// 		// console.log("constructor");
// 	}
// 	componentDidMount(){
// 		// console.log("componentDidMount");
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(res=>{return res.json()})
// 		.then(res=>{
// 			this.setState({
// 				monsters: res
// 			})
// 		}).catch(err=>{
// 			console.log(err);
// 		})
// 	}
// 	onSearchChange = (event)=>{
// 		const searchField = event.target.value.toLocaleLowerCase()
// 		this.setState(()=>{
// 			return {searchField}
// 		})
// 	}
//   	render(){
// 		const { monsters,searchField } = this.state;
// 		const {onSearchChange} = this;
// 		const filteredMon = monsters.filter((monster)=> {
// 			return monster.name.toLowerCase().includes(searchField)
// 		});
// 		return (
// 			<div className="App">
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox onSearchChange={onSearchChange} placeholder="Search Monsters" className='monsters-search-box' />
// 				{/* {
// 					filteredMon.map(monster=>{
// 						return (
// 							<div key={monster.id} >
// 								<h1>{monster.name}</h1>
// 							</div>
// 						)
// 					})
// 				} */}
// 				<CardList monsters={filteredMon} />
// 			</div>
// 		)
//   	};
// }

export default App;
