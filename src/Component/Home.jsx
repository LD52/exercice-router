import './../App.css';
import Intro from './../Images/Intro.png'; 
import Nav from './Nav';
import {useSelector} from 'react-redux'; 
import Plug from './../Component/Plug';
function Home (props) {

    const name = useSelector (state => state.nom); 

    return (
        <>

            <div className='top'>
                <Nav/>
            </div>

            <div className='middle'>
                <div className='text-left'>
                    <div className='premier'> <h1>New generation Ceramic tile</h1></div>
                    <div className='second'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, mollitia inventore? Pariatur molestiae officiis perspiciatis doloremque a, expedita cupiditate dicta laudantium molestias totam reprehenderit quam inventore magnam facilis fugit blanditiis!</div>
                    <div className='troisieme'>LEARN MORE</div>
                </div>
                <div className='img-right'>
                    <img src={Intro} className="intro" alt="intro"/>
                </div>
             
            </div>

            <div className='collection'>
                {props.collection.map((collection)  => {
                    return (<Plug  key={collection.id} collection = {collection}/>)
                })}
                
            </div>

            <div className='gallerry'> <h3>produced by {name}</h3></div>
        </>
    

    )
}
export default Home;