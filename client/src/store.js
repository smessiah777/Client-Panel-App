import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer  } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyBybOwB3gC8Cg4cIrnG3-rmLD9UHzFjUns",
    authDomain: "reactclientpanel-9789f.firebaseapp.com",
    databaseURL: "https://reactclientpanel-9789f.firebaseio.com",
    projectId: "reactclientpanel-9789f",
    storageBucket: "reactclientpanel-9789f.appspot.com",
    messagingSenderId: "1098588451114",
    appId: "1:1098588451114:web:b6965814e990ca58"
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  };

  // Init Firebase instance
  firebase.initializeApp(firebaseConfig);

  // Init firestore
//   const firestore = firebase.firestore();

  // Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)

  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  });

  // Create intial state
  const initalState = {};

  // Create store
  const store = createStoreWithFirebase(rootReducer, initalState, compose(reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  export default store;


