import { AiFillGithub } from 'react-icons/ai'
import { MdTimer } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className="main">
            <MdTimer color={'#5D3FD3'} size={'50px'}/>
            <a href="#">
                <AiFillGithub color={'#5D3FD3'} size={'50px'} />
            </a>
        </nav>
    )
}

export default Navbar;