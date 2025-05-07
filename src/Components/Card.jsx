import "./Card.css"

function Card(props){
    // console.log(props.children,props);
    return (
        <div id="card" className="">
            <h4>{props.title}</h4>
            <p>Lorem ipsum dolor sit amet cocto! </p>
            {props.children}  
        </div>
    )
}
export default Card