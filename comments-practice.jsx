//this is a component 
//create class is a smart component 

var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

function UserInfo(props){
  return(
    <div className = "UserInfo">
      <img className = "Avatar"
        src = {props.author.avatarUrl}
        alt = {props.author.name}
      />
      <div className = "UserInfo-name">
        {props.author.name}
      </div>
    </div> 

  )
}


function CommentBody(props){
  return(
    <div className="Comment-body">
      <h1>{props.commentHeading}</h1>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {(props.date)}
      </div>
    </div>
  )

}

function UserBadges(props){
  return(
    <div className="UserBadges">
      <div className="badge">{props.userBadge[0]}</div>
      <div className="badge">{props.userBadge[1]}</div>
      <div className="badge">{props.userBadge[2]}</div>
    </div>

  )
}



function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author = {props.author} />

      <CommentBody commentHeading = {props.commentHeading} date = {props.date} />

      <UserBadges  userBadge = {props.userBadge}/>    
   
    </div>
  );
}

//don't forget {} are handle bars for javascript

function Application(props){
  console.log(props)
  var commentsArray = [];
  props.data.map((comment, index)=>{
    commentsArray.push(<Comment key = {index} author={comment.author} userBadge = {comment.userBadge} text={comment.text} commentHeading={comment.commentHeading} date={comment.date} />)
  })
  return(
      <div className="container">
        <h1>Some Facebook Post</h1>
        {commentsArray}
      </div>
  )
}



ReactDOM.render(
  //no comma needed between variables
  //here the {} represent an object 
  <Application data = {data}  />,
    document.getElementById('root')
);