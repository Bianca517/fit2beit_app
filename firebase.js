import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA1XyfQcMxpi9gKESI2Usv0Q33cIyEve4",
  authDomain: "fit2beitapp2.firebaseapp.com",
  projectId: "fit2beitapp2",
  storageBucket: "fit2beitapp2.appspot.com",
  messagingSenderId: "567074951169",
  appId: "1:567074951169:web:834dc3d77e82c29d90b000",
};

let app;
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timpestampsInSnapshots: true });

export { auth, db };
