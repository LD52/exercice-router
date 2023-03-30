import './../App.css';
import Logo from './../Images/Logo.png';

function Home () {
    return (
        <div className='top'>
            <div className='Logo'>
                <img src={Logo} alt="logo"/>
            </div>

            <div className='Menu'></div>
        </div>

    )
}
export default Home;