import React from 'react';
import './FeaturedWork.css';


const FeaturedWork = () => {
  return (
    <div>
       
{/* featured work with arrows  */}

            <div className='container-fluid'>


                 {/* making the featured works of the website */}



                    <div className='row'>
                        <div className='in col-lg-10 '>
                            <p><span className='left'>FEATURED </span ><span className='left works col-lg-1'>WORKS</span><span className='works right col-lg-1 d-md-inline'>← →</span> </p>
                            <div >
                                
                            </div>
                        </div>
                    </div>



{/* <div className='row'>
  <div className='in col-lg-12 col-md-6'>
    <p className='d-flex justify-content-between align-items-center'>
      <span className='left'>FEATURED</span>
      <span className='works'>
        WORKS
        <span className='d-md-none ml-2'>&#8594;</span>
        <span className='d-none d-md-inline'>&#8592; &#8594;</span>
      </span>
    </p>
  </div>
</div> */}



                <div className='row'>
                    <div className='col-lg-3 ml-4 col-md-6'>
                        <img src="./images/moby.png" alt="" />
                    </div>
                    <div className='col-lg-3 ml-4 col-md-6'>
                        <img src="./images/20000.png" alt="" />
                    </div>
                    <div className='col-lg-3 ml-4 col-md-6'>
                        <img src="./images/thewar.png" alt="" />
                    </div>
                    <div className='col-lg-1 ml-4 col-md-6' >
                        <img src="./images/half.png" alt="" />
                    </div>
                </div>
            </div>
    </div>
    
 
  )
}

export default FeaturedWork
