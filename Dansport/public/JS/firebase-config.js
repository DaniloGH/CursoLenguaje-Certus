const firebaseConfig = {
  apiKey: "AIzaSyC1W36v_h5ayWDr9LI2SH80e0TIGmdYU_s",
  authDomain: "fir-lenguaje-3f157.firebaseapp.com",
  projectId: "fir-lenguaje-3f157",
  storageBucket: "fir-lenguaje-3f157.firebasestorage.app",
  messagingSenderId: "923752298220",
  appId: "1:923752298220:web:f25575b75c30b8b992d7c9"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore(); // 🔥 Firestore