
// State.
// Props are immutable. They do not change.
//State is a piece of data, that DOES change. 
//State has:
// 1.) An initial value
// 2.) (Infinit number of) changed values
// In the case of the nl east, all gamesback start at 0, some kind of mutation occurs(namely, someone loses or wins a game)

// In ES5, to use state, React provides a component for us to use. It takes an object as a param.
// ANYTIME STATE CHANGES...THE COMPONENT WILL RE-RENDER  


function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}


function Team(props){
	return(
		<div className = "row">
			<div className = "col-sm-8 col-sm-offset-2 team">
				<div className = "team-name col-sm-12">{props.city} {props.name}</div>	
				<Counter gamesBack = {props.gamesBack}/>
			</div>
		</div>
		
	)
}

// var with name of the Component
//the only REQUIRED property, is render 
//whenever you want to do something dynamic, you want to createClass through var; use it when we need state
//necessary when we need stuff to change  

var Counter = React.createClass({

	// A set React property (like render), is getInitialState(){}
	getInitialState: function() {
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;
		
	},

	addGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack + 1
		})

	},

	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack - 1
		})


	},

	//these are properties of an object 


	render: function(){
		return(
			<div className = "counter">
				<button onClick={this.addGame} className = "btn btn-success">+</button>
					<div>
						<div className = "team-score">{this.state.gamesBack}</div>
					</div>
				<button onClick = {this.loseGame} className = "btn btn-danger">-</button>
			</div> 

		)
	}
})

var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Florida"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]

//keys helps manage the teams; react uses it internally to manage an array to render correctly 



function Application(props){
	return(
		// Use map to loop thorugh teams array. we not longer need teams 
		// 	<Team name ="Braves" score = "0"/>
		// 	<Team name ="Brewers" score = "0"/>
		// props.teams is an array, with team objects
		// send Team the team object, in map, ES6 style 

		<div className = "container">
			<Header title = {props.title}/>
			{props.teams.map((team, index)=>{
				return <Team key = {index} name = {team.name} gamesBack = {team.gamesBack} city = {team.city} />

			})}
		

		</div> 
	)
}



ReactDOM.render(
	// <h1>Hello, world!</h1>,
	<Application title = "Braves Scoreboard" teams = {teams} />,
		document.getElementById('container')
);