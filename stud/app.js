const express = require('express');
const admin = require("firebase-admin");
const firebase = require("firebase");
(function() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAf8-xe1bw3lmJSEFuysuvImJpjDbtSFUo",
    authDomain: "libre-user-database.firebaseapp.com",
    databaseURL: "https://libre-user-database.firebaseio.com",
    projectId: "libre-user-database",
    storageBucket: "libre-user-database.appspot.com",
    messagingSenderId: "598875096985"
  };
  firebase.initializeApp(config);

  // get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });
}());
