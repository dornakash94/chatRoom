"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require('firebase');
var firebaseConfig = {
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
    constructor() {
        this.writeToData = (ref, data) => {
            firebase.database().ref(ref).set(data);
        };
        this.readData = (ref) => __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield firebase.database().ref(ref).get();
            return snapshot.val();
        });
        this.readLastData = (ref, count, orderBy) => __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield firebase.database().ref(ref).orderByChild(orderBy).limitToLast(count).get();
            return snapshot.val();
        });
        this.hasData = (ref) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.readData(ref);
            return !!result;
        });
    }
}
exports.default = DataBase;
//# sourceMappingURL=database.js.map