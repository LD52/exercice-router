 import './../App.css';

function Plug  (props) {
    return(
        <>
<div className='card-root'>
     <div className='card-img'> {props.collection.img}
        </div>
        <div className='card-title'>
           <h3> {props.collection.title} </h3> 
        </div>
        <div className='card-more'> {props.collection.text}</div>
        <div className='card-button'> 
        
            <h3>  {props.collection.button} </h3>
       
        </div>
</div>
       

        </>
        

    )
}
 export default Plug; 