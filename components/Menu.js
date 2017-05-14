/**
 * Created by Roman on 11.05.2017.
 */
import React,{Component} from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Menu extends Component{
    render () {
        return(
                <div className="menuTop">
                    <div className="menuInner">
                    <Link to={prefixLink("/")} style={{fontWeight:"bold", fontFamily:"Montserrat,sans-serif"}}>Roman Ivanitskyi</Link>
                    <Link to={prefixLink("/experience/")} activeClassName="active">Experience</Link>
                    <Link to={prefixLink("/hobbies/")} activeClassName="active">Hobbies</Link>
                    <Link to={prefixLink("/technologies/")} activeClassName="active">Technologies</Link>
                    <Link to={prefixLink("/recommendations/")} activeClassName="active">Recommendations</Link>
                    </div>
                    <div className="contacts">
                        <p style={{fontFamily:"Montserrat,sans-serif"}}>Contacts</p>
                        <p>skype: rizvan_ua</p>
                        <p>rizvanua@gmail.com</p>
                    </div>
                </div>
        )
    }
}

export default Menu;