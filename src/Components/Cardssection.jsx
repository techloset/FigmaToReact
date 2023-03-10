import React from 'react'
import './Cardssection.css'
// import { HiPencilSquare } from 'react-icons/fa';
const Cardssection = () => {
  return (
    <div className='page'>
       <div>
            <h1 className='h'>DISCOVER THE<span className='bene'> BENEFITS</span></h1>
       </div>
       <br />

       <div className='cards'>

<div className="row justify-content-center " >
  <div className="col-md-3">
    <div className="card">
    <img src="/images/Edit.png" className="card-img-top" alt="Your Image"/>

      {/* <p><HiPencilSquare/></p> */}
      <div className="card-body">
        <h5 className="card-title">Author Cohorts</h5>
        <p className="card-text">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem. Nullam in mauris sit amet quam efficitur aliquam vel accumsan elit.</p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
    <img src="/images/Send.png" className="card-img-top" alt="Your Image"/>
      <div className="card-body">
        <h5 className="card-title">Author Cohorts</h5>
        <p className="card-text">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem. Nullam in mauris sit amet quam efficitur aliquam vel accumsan elit.</p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
    <img src="/images/Document.png" className="card-img-top" alt="Your Image"/>
      <div className="card-body">
        <h5 className="card-title">Author Cohorts</h5>
        <p className="card-text">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem. Nullam in mauris sit amet quam efficitur aliquam vel accumsan elit.</p>
      </div>
    </div>
    <br />
  </div>

    <div className='row justify-content-center'>
    <div className="col-md-3">
    <div className="card">
      <img src="/images/Edit Square.png" className="card-img-top" alt="Your Image"/>
    {/* <img src="/images/Edit.png" className="card-img-top" alt="Your Image"/> */}

      {/* <p><HiPencilSquare/></p> */}
      <div className="card-body">
        <h5 className="card-title">Author Cohorts</h5>
        <p className="card-text">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem. Nullam in mauris sit amet quam efficitur aliquam vel accumsan elit.</p>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card"  >
      <img src="/images/Paper.png" className="card-img-top" alt="Your Image"/>
    {/* <img src="/images/Edit.png" className="card-img-top" alt="Your Image"/> */}

      {/* <p><HiPencilSquare/></p> */}
      <div className="card-body">
        <h5 className="card-title">Author Cohorts</h5>
        <p className="card-text">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem. Nullam in mauris sit amet quam efficitur aliquam vel accumsan elit.</p>
      </div>
    </div>
  </div>
    </div>

</div>


       </div>
    </div>
  )
}

export default Cardssection
