var Coin = React.createClass(
	//passing an object, member variable, so it's like a dictionary
	{
		sides: [
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
		],

		getInitialState() {
			return{
				image: this.sides[0]
			}
					
		},

		flipCoin: function(){
			 var newSide;
			 let randomSide = Math.round(Math.random());
			 if(randomSide == 0){
			 	 //the user flipped tails
			 	 newSide = this.sides[randomSide]
			 	 console.log("Tails")
			 }else{
			 	newSide = this.sides[randomSide]
			 	console.log("Heads")
			 }
			 //dont ever do this
			 // this.state.image = newSide

			 //to change the state of an element use setState
			 this.setState({
			 	image: newSide 
			 })

		},

		
		render: function(){
			console.log("Rendering Coin component...")
			return(
				<div>
					<button onClick = {this.flipCoin}>Click To Flip</button>
					<img src = {this.state.image} />
				</div>
 
			)

		}

	}
);




function Application(props){
	return(
		<div>
			<Coin />
			<Coin />
		</div> 
		

	)
	
}



ReactDOM.render(
	// <h1>Hello, world!</h1>,
	<Application />,
		document.getElementById('root')
);