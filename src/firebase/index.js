import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// const config = {
//   apiKey: 'AIzaSyAzuFlMWF_1u9A_Squ4b_Z5q5cFRh68Ajk',
//   authDomain: 'simple-react-trello.firebaseapp.com',
//   databaseURL: 'https://simple-react-trello.firebaseio.com',
//   projectId: 'simple-react-trello',
//   storageBucket: 'simple-react-trello.appspot.com',
//   messagingSenderId: '522397619012',
// }
const config = {
  apiKey: 'AIzaSyBE2bQuSR0gus8_IWXjj4Mc5qcxEbslarA',
  authDomain: 'trello-gatsbyjs.firebaseapp.com',
  databaseURL: 'https://trello-gatsbyjs.firebaseio.com//',
  projectId: 'trello-gatsbyjs',
  storageBucket: 'trello-gatsbyjs.appspot.com',
  messagingSenderId: '281987900577',
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      firebase.initializeApp(config)
      this.auth = firebase.auth()
      this.database = firebase.database()
    }
  }
}

export default new Firebase()
