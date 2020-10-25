import firebase from 'firebase'
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCB_UG-X93TmYqn3G6cYgbcU5pFh36iiRQ",
    authDomain: "hacktx-queue.firebaseapp.com",
    databaseURL: "https://hacktx-queue.firebaseio.com",
    projectId: "hacktx-queue",
    storageBucket: "hacktx-queue.appspot.com",
    messagingSenderId: "209570179615",
    appId: "1:209570179615:web:99eecea144c44e0ddf032a"
};
const fire = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default fire;