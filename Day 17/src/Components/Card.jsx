import "./card.css";

const Card = ({title,cal}) => {
    return(
            <div className="card">
                <h1> {title || "Title"} </h1>
                <h2> You've consumed {cal || "0"} calories today </h2>
            </div>
    )
}


export default Card;
