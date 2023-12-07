import Navbar from "./Navbar/Navbar"
import './Header.css'
import Topbar from "./TopBar/Topbar"
import HeadLine from "./HeadLine/HeadLine"
const Header = () => {
  return (
    <>
      <header>
        <Topbar />
        <Navbar />
        <HeadLine/>
      </header>
    </>
  )
}

export default Header