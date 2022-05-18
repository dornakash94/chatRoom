import express from 'express'
var firebase = require('firebase');

var firebaseConfig =
{
    apiKey: "AIzaSyAtyFwaJ5bhlR46Up-y42TzdJ5kdq6s0l8",
    authDomain: "dor1-6279b.firebaseapp.com",
    databaseURL: "https://dor1-6279b-default-rtdb.firebaseio.com",
    projectId: "dor1-6279b",
    storageBucket: "dor1-6279b.appspot.com",
    messagingSenderId: "67640078807",
    appId: "1:67640078807:web:d4d0b826003725c9505b92",
    measurementId: "G-7DD7B17Y52"
};

firebase.initializeApp(firebaseConfig);

class DataBase {
    public writeToData = (ref, data) => {
        firebase.database().ref(ref).set(data);
    };

    public readData = async (ref) => {
        const snapshot = await firebase.database().ref(ref).get();
        return snapshot.val();
    };

    public readLastData = async (ref, count, orderBy) => {
        const snapshot = await firebase.database().ref(ref).orderByChild(orderBy).limitToLast(count).get();
        return snapshot.val();
    };

    public hasData = async (ref) => {
        const result = await this.readData(ref);
        return !!result;
    };
}
export default DataBase;