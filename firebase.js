const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login(){
  auth.signInWithEmailAndPassword(
    email.value, password.value
  ).then(()=>location.href="admin.html")
  .catch(e=>alert(e.message));
}

function logout(){
  auth.signOut().then(()=>location.href="index.html");
}
