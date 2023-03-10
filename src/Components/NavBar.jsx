import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
<div class='body'>
  <div class='navbar'>
    <nav class="navbar navbar-expand-lg ml-5">
      <a class="navbar-brand" href="#"><img src="./images/Frame.png" alt="" /></a>
      <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-5" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ml-5">
            <a class="nav-link myclass" href="#">About <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active ml-5">
            <a class="nav-link myclass" href="#">Authors</a>
          </li>
          <li class="nav-item active ml-5">
            <a class="nav-link myclass " href="#">Team</a>
          </li>
          <li class="nav-item active ml-5 mt-2">
            <button class="myclass connect" href="#">CONNECT WALLET</button>
          </li>
        </ul>
      </div>
    </nav>


    <main className='main'>
    <section class="bookchain ">
      <div className='myblockchain'>
      <h1>Your books<pre></pre>on-chain</h1>
      <p>The storefront you need to publish and sell books as NFTs</p>
      <br /><br />
      <div class="buttons">
        <button className=' mr-5 explore'>Explore</button>
        <button className='publish'>Publish</button>
      </div>
      </div>
      <div>
      <img src="./images/bookrank.png" alt="" class='books' />
      </div>
    </section>
  </main>
    
  </div>
</div>
  )
}

export default NavBar
