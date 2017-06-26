//never make it a smart component unless it needs to know about state
function Poster(props){
	return(
		<div className = "col-sm-6 col-md-4 col-lg-3">
			<img src = {props.poster}/>
		</div> 
	)
};


//we use brackets here b/c it's an object

function Application(){
	
	getInitialState: function() {
		
		return{
			moviesToShow:[1,2,3,4,5]

		}
	},

	//do Ajax request using componentDidMount 
	componentDidMount: function() {
		console.log("The application component has loaded")
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, function(movieData){
			console.log(this);
			var nowPlayingArray =  [];
			for(let i = 0; i < movieData.results.length; i++){
				nowPlayingArray.push(movieData.results[i]);
			}
			this.setState({
				moviesToShow: nowPlayingArray
			});

		}.bind(this));	
		//this ajax request will create it's own this 
		//bind the this that we want to use to 


		
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