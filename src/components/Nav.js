import React ,{PureComponent} from 'react';
import {
    Link
  } from "react-router-dom";
class Nav extends PureComponent{

render(){
    return(
        <div>
 <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/list'>Product List</Link>

        <Link to='/'>Login</Link>        </div>
    )
}

}
export default Nav;