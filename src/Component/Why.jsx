import './../App.css';
import casque from './../Images/casque.png';
import three from './../Images/three.png';
import Nav from './Nav';
function Why (){
return (
    <>
       <div className='top'>
    <Nav/>
</div>
    <div className='why-root'>
        <div className='why-first'>
            <div className='why-first-left'> <img src={casque} className='why-img'/></div>
            <div className='why-first-right'>
                <h1>Why Choose Us ?</h1>
                <h4>Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.</h4>
                <h4>Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.</h4>
                <div className='why-button'><h4>LEARN MORE</h4></div>
           
           
            </div>
        </div>
       
         <div className='why-first'>
           
            <div className='why-first-left'> <img src={three} className='why-img'/></div>
            <div className='why-first-right'>
                <h4> Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant. </h4>
                <h4>Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.</h4>
                <div className='why-button'> <h4>LEARN MORE</h4></div>
            </div>
            
        </div>
    </div>
    
    </>
 
)
}
export default Why;