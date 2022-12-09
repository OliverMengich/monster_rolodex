import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
	constructor(){
		super();
		this.state={
			monsters:[],
			searchField: '',
			count: 0
		}
		// console.log("constructor");
	}
	componentDidMount(){
		// console.log("componentDidMount");
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res=>{return res.json()})
		.then(res=>{
			this.setState({
				monsters: res
			})
		}).catch(err=>{
			console.log(err);
		})
	}
	onSearchChange = (event)=>{
		const searchField = event.target.value.toLocaleLowerCase()
		this.setState(()=>{
			return {searchField}
		})
	}
  	render(){
		const { monsters,searchField } = this.state;
		const {onSearchChange} = this;
		const filteredMon = monsters.filter((monster)=> {
			return monster.name.toLowerCase().includes(searchField)
		});
		return (
			<div className="App">
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox onSearchChange={onSearchChange} placeholder="Search Monsters" className='monsters-search-box' />
				{/* {
					filteredMon.map(monster=>{
						return (
							<div key={monster.id} >
								<h1>{monster.name}</h1>
							</div>
						)
					})
				} */}
				<CardList monsters={filteredMon} />
			</div>
		)
  	};
}

export default App;
