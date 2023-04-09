import Nav from './Nav';
import Endroit from './../Images/paysage.png';
import Card from './Card';



function Medias ( props){
return (
    <>
     <div className='top'>
                <Nav/>
            </div>
    <div className='medias-root'>
        <div className='medias-top'> <h2> Latest Media </h2> </div>
        <div className='medias-middle'> 
        <div className='medias-middle-left'>
            <div className='medias-img'> <img src={Endroit} className='img-medias'/></div>
        <div className='txt-bold'>  Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion </div>
        <div className='txt-classic'>Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.</div>
        <div className='medias-button'> <h3> READ MORE </h3></div>
            
             </div>
    <div className='medias-middle-right'>
        {props.Card.map((element) => {
            return ( <Card key={element.id}  element ={element} />)
        })}
     </div>
        </div>
        
        

    </div>
    </>
)
}
export default Medias;