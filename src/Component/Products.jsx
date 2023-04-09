import React from 'react';
import Projets from './Projets';
import Nav from './Nav';

function Products (props) {
return (
    <>

<div className='top'>
                <Nav/>
            </div>

    <div className='Product-root'>
        <div className='product-title'>
            <h2> Products</h2>
        </div>
        <div className='product-body'>
            <div className='product-left'>
                <div className='pro-bottom'> <h2>Bedroom Tiles</h2></div>
                <div> <h5>Ante mus blandit sapien sociosqu per consequat ad.</h5></div>      
            </div>
            <div className='product-right'>
                <div className='product-right-top'>
                    <div className='product-right-top-left'>
                    <div className='pro-bottom'> <h2>Bathroom Tiles</h2></div>
                <div> <h5>Ante mus blandit sapien sociosqu per consequat ad.</h5></div>  
                    </div>
                    <div className="product-right-top-right">
                    <div className='pro-bottom'> <h2>Outdoor Tiles</h2></div>
                <div> <h5>Ante mus blandit sapien sociosqu per consequat ad.</h5></div>  
                    </div>

                </div>
                <div className='product-right-bottom'>
                <div className='pro-bottom'> <h2>Kitchen Tiles</h2></div>
                <div> <h5>Ante mus blandit sapien sociosqu per consequat ad.</h5></div>  
                </div>
            </div>
        </div>
        <div className='project'>
            <div className='under-project'>
                <div className='left-project'> < h1>Projects</h1></div>
                <div className='right-project'>ALL PROJECTS</div>
            </div>
            {props.projects.map((goals) => {
                return ( <Projets key={goals.id} goals = {goals}/>)
            }
             )}
        </div>






    </div>
    
    </>
)
}
























export default Products;