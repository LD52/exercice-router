import './../App.css';
import Nav from './Nav';
import orangeBoy from './../Images/OrangeBoy.png'; 
import Saloon from './../Images/saloon.png';
import Communication from './../Images/Communicating.png';
import {useSelector} from 'react-redux'; 

function Services (){

    const name = useSelector (state => state.nom); 
    return (
        <>
        <div className='top'>
                <Nav/>
            </div>
            <div className='Services-root'>
                <div> <h2>Services</h2></div>
                <div className='Services-border'>
                    <div className='img-card-services'>   <img src= {orangeBoy} className='services-img'/></div>
                    <div className='Services-etc'>
                    <div className="Services-title"> <h2>Measurement Service </h2></div>
                    <div className="txt-Services"> <h5>Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms.</h5></div>
                    <div className='txt-button'> <h5>LEARN MORE</h5></div>
                     </div>    
                </div>

                <div className='Services-border'>
                  
                    <div className='Services-etc expt'>
                    <div className="Services-title"> <h2>Measurement Service </h2></div>
                    <div className="txt-Services"> <h5>Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms.</h5></div>
                    <div className='txt-button'> <h5>LEARN MORE</h5></div>
                     </div>
                       <div className='img-card-services'>   <img src= {Communication} className='services-img'/></div>
                </div>  

                <div className='Services-border'>
                    <div className='img-card-services'>   <img src= {Saloon} className='services-img'/></div>
                    <div className='Services-etc'>
                    <div className="Services-title"> <h2>Interior Design </h2></div>
                    <div className="txt-Services"> <h5>Benefit from our free interior design service. Our fully qualified interior designers will provide CAD visuals to help you visualise your selected tiles before you buy.</h5></div>
                    <div className='txt-button'> <h5>LEARN MORE</h5></div>
                     </div>
                    
                </div>

            </div>
        
            <div className='gallerry'> <h3>produced by {name}</h3></div>
        
        </>
    )
}
export default Services;