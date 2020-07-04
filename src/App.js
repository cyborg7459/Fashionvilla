import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header-component';
import SignupAndLogin from './pages/signup-login-page/signup-login';
import {auth} from './firebase/firebase.utils'

const Hats = (props) => {
  console.log(props);
  return (
    <h1>This is the hats page</h1>
  )
}

const Jackets = () => (
  <h1>This is the jackets page</h1>
)

const Mens = () => (
  <h1>This is the men's section</h1>
)

const Women = (props) => (
  <h1>This is the women's section</h1>
)

const Sneakers = () => (
  <h1>This is the sneakers page</h1>
)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/Fashionvilla/" component={Homepage}/>
            <Route exact path="/Fashionvilla/shop" component={ShopPage}/>
            <Route exact path="/Fashionvilla/shop/hats" component={Hats}/>
            <Route exact path="/Fashionvilla/shop/mens" component={Mens}/>
            <Route exact path="/Fashionvilla/shop/womens" component={Women}/>
            <Route exact path="/Fashionvilla/shop/jackets" component={Jackets}/>
            <Route exact path="/Fashionvilla/shop/sneakers" component={Sneakers}/>
            <Route exact path="/Fashionvilla/signin" component={SignupAndLogin}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
