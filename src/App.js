import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignupAndLogin from './pages/signup-login-page/signup-login';

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
