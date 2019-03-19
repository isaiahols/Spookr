import React, {Component} from 'react'
import './Navigation.scss'

// Packages
import axios from 'axios'
import {connect} from 'react-redux'
import {logIn} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Navigation extends Component {

  componentDidMount () {
    axios.get('/api/user').then(res => {
      this.props.logIn(res.data)
    })
  }

  render () {
    
    const displayLogin = this.props.user ? <button>Logout</button> : <Link to='/login'><button>Login</button></Link>

    return (
      <nav>
        <div className="NavigationSecondary">
          <Link to='/' style={{ textDecoration: 'none' }}><h1>Spookr</h1></Link>
          {displayLogin}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
