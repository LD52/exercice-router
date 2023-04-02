import './../App.css';
import Logo from './../Images/Logo.png';
import Intro from './../Images/image1.png'; 
import Plug from './../Component/Plug';
function Home () {
    return (
        <>

            <div className='top'>
                <div className='Logo'>
                    <img className='logo' src={Logo} alt="logo" />
                </div>

                <div className='Menu'>
                    <div> <h6>HOME</h6></div>
                    <div> <h6>SPACES</h6></div>
                    <div><h6>PRODUCTS & SERVICES</h6></div>
                    <div><h6>SHOWROOMS</h6></div>
                    <div> <h6>COMPANY</h6></div>
                    <div><h6>MEDIA</h6></div>
                    <div><h6>Contacts</h6></div>
                </div>
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
                {props.collection.map((collect )  => {
                    return (<Plug  key={collect.id} Collection = {collect}/>)
                })}
                
            </div>






            



        </>
    

    )
}
export default Home;