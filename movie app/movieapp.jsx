//never make it a smart component unless it needs to know about state
function Poster(props){
	return(
		<h1>Poster</h1> 
	)
}


function Application(props){
	
	getInitialState: function() {
		//we use brackets here b/c it's an object
		return{
			moviesToShow:[1,2,3,4,5]

		}
	},

	componentDidMount: function() {
		console.log("The application component has loaded")


		
	},

	render: function(){
		var imagePath = "http://image.tmdb.org/t/p/w300"
		return(
			//a new div created to render the image; so it's a mini html/dom 
			<div className = "container">
				<div className = "row">
					<h1>MOVIE App</h1>
					<div className = "col-sm-12">
						{/* Posters go here?*/}
						//looping through moviesToShow through map()
						{this.state.moviesToShow.map((movie, index)=>{
							//index use by react to keep tabs of things as they change
							//past source value of image as property to the poster
							var moviePoster = imagePath + movie.poster_path
							return <Poster key={index} poster={moviePoster}/>

						})}


					</div> 

				</div>
				
			</div> 		

		)
	}
	
}



ReactDOM.render(
	// <h1>Hello, world!</h1>,
	<Application />,
		document.getElementById('root')
);