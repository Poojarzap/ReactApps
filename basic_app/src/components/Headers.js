import images from '../logo192.png';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <div className='imgTitle'>
        <img src={images} className='nav-logo'/>
        <h3 className='title'>ReactProject</h3>
        </div>
        <div>
        <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>

  )
}

export default Header;