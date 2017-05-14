import React,{Component} from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

class Template extends Component {
  render () {
    const { location, children } = this.props;
    let header;
    if (location.pathname === prefixLink('/')) {
      header = (

          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >

          </Link>

      )
    } else {
      header = (
      <div>
          <h3
              style={{
                  fontFamily: 'Montserrat, sans-serif',
                  marginTop: 0,
              }}
          >
          </h3>
          <Menu></Menu>
      </div>

      )
    }
    return (
        <div className="containerWrap">
      <Container className="container">
        {header}
        {children}
      </Container>
            <Footer/>
        </div>

    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
