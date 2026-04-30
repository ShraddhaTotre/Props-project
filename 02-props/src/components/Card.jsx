

const Card = (props) => {
    
  return (
    <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum harum architecto voluptates. At autem veritatis commodi voluptates eos. Quia, sunt sed? Mollitia nulla cumque consectetur eveniet in corrupti.</p>
        <button>View Profile</button>

      </div>
  )
}

export default Card
