import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDun9ewFzrUXpYAojKrFZJllaf1jfQRpFg",
    authDomain: "netflix-clone-c4af5.firebaseapp.com",
    projectId: "netflix-clone-c4af5",
    storageBucket: "netflix-clone-c4af5.appspot.com",
    messagingSenderId: "479404092924",
    appId: "1:479404092924:web:60e201f3b280907f22d679"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;   //we can have only 1 default export but many explicit export