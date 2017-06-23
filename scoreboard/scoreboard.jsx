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
					<div className = "team-name col-sm-12">Braves</div>
					<div className = "counter">
					<div className = "score"> </div>
						<button>+</button>
						<button>-</button>
				</div>
			</div>
		</div>	

	)
}

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
				return <Team name = {team.name} gamesBack = {team.gamesBack} city = {team.city} />


			})}
		

		</div> 
	)
}



ReactDOM.render(
	// <h1>Hello, world!</h1>,
	<Application title = "Braves Scoreboard" teams = {teams} />,
		document.getElementById('container')
);
