//our first component; a variable that contains some jsx
//return a single html element


//The return can only take one wrapper tag or else jsx will fail. 
//so the Application is the very top of the tree with lower functions acting as branches 
//you'll be able to add a react router that can move you from page to page 


// {hello} // to switch to javascript so {} wax on wax off 
//{/* hello */} making comments 

function Application(){
	//this is a regular js comment 
	// return is when things go jsx
	var name = "Carla";
	console.log(React);
	return(
		<div id = "parent">
			<div id = "sibling">
				<Message name = "Shane" gender = "M" />
				<Message name = "Carla" />
				<Message name = "Hayes" />
				<Message name = "Irene"/>
			</div>
			<div id = "sibling">
				<h2>I will rule the world. Your beloved leader, {name}</h2>
			</div>	
		</div> 
	)
}

//so can use component in other components 
//props allow you to pass in elemets in the the components

function Message(props){
	return(

		<div>
			<h1>Bonjour, {props.name}!</h1>
		</div>
	)
}

// ReactDom is available b/c we include reactDom.js
// The .render function needs React (react.js) and takes 2 arguments
// 1.) the component to render
// 2.) where to render it 
// When reactdom 


// ReactDom.render(ReactElement, DOMElement, callback)

ReactDOM.render(
	// <h1>Hello, world!</h1>,
	<Application/>,
		document.getElementById('container')
);


