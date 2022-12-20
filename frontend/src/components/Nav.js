import React from 'react';
import {Link , useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">hello</Link></li>
                {/* <li>{ auth ?<Link to="/Signup">signUp here</Link>:<Link to="/logout">Logot here</Link>}</li> */}
                {/* <li>{ auth ?<Link onClick={logout} to="/signup">Logot here</Link>:<Link to="/Signup">signUp here</Link>}</li>
                <li><Link to="/login">Login</Link></li> */}
                {
                    auth ? <li><Link onClick={logout} to="/signup">Logot here</Link></li>
                    :<>
                  <li> <Link to="/Signup">signUp here</Link></li>
                  <li> <Link to="/login">Login</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Nav;