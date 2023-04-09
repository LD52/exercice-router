import './../App.css';


function Card (props){
    return <>
    <div className="Duplicate">
<div className='txt-card'>  {props.element.title}</div>
        <div className='card-text'>{props.element.etc}</div>
        <div className='medias-button'> <h3> {props.element.button} </h3></div>

    </div>


    </>
}





export default Card ; 