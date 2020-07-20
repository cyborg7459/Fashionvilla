import React from 'react';  // All the functionalities like class componenet and Render methods come with this
import {connect} from 'react-redux';  // Function is to pass in redux state as props to components and DOM events on components as actions to state
import {Route, Switch, Redirect} from 'react-router-dom'; // All 3 have diffrent important functions in routing

import './App.css';   // Importing the CSS file

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header-component';
import SignupAndLogin from './pages/signup-login-page/signup-login';
import {selectCurrentUser} from './redux/user/user.selectors';  // Importing selector from the user selectors file
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';   // Redux action imported to be used later

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
            <Route exact path="/" component={Homepage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/signin" render={() => 
              this.props.currentUser? (<Redirect to='/'/>) : (<SignupAndLogin/>)
            }/>
            <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({   // This is one of the 4 parameters to be passed in connect function, and is used to call in state elements as props 
  currentUser : selectCurrentUser(state),    // Defining that the currentUser in App.js would refer to whatever is returned by selectCurrentUser(state) which is a selector, and returns the currentUser from the redux user state
})

const mapDispatchToProps = dispatch => ({   // Second of the 4 parameters, which passes DOM events as actions to the redux reducers
  setCurrentUser: user => dispatch(setCurrentUser(user))  // Specifying that when setCurrentUser is called on user in App.js, it would dispatch the setCurrentUser function on user in the redux ations
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// JSX Part explanation :-
// 1) Switch :  Ensures that in case multiple targets match the given Route, only the first one is rendered rather than all
// 2) exact : Makes sure that a component is rendered only when the exact path is matched 
// 3) component : The component to render when that path is opened 
// 4) Redirect : Used to specify where to redirect the user in case it is needed to redirect somewhere
