import React from 'react'

function Header() {


    let image= 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1696396193~exp=1696396793~hmac=377cbdd9293ff1ba69e4ee634bfc9c6f4ea00c5ae12315323d4b555410db3c53'
  return (
    <>
    <header className='header'>
        <div className="header-logo">
            <img src={image} alt="" />
        </div>
        <div className="header-links">
            <ul>
                <li>Home</li>
                <li>logo</li>
                <li>chdv</li>
                <li>Home</li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Header