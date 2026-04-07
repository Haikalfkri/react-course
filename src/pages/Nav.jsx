import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/posts">Posts</Link> */}
            <Link to="/">Home</Link>
            <Link to="/users/kyle">Kyle</Link>
            <Link to="/users/sandra">Sandra</Link>
            <Link to="/users/emma">Emma</Link>
        </nav>
    )
}

export default Nav