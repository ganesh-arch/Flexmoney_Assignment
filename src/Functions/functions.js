
// import {db} from './firebaseconfig.js'
// Import the functions you need from the SDKs you need
import { getDocs,collection, addDoc, query, where } from 'firebase/firestore'
import 'firebase/firestore'
import { db } from '../Firebase/firebaseconfig'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
async function loginExisting(data){
    const usersRef = collection(db, "Users");

    const q = query(usersRef, where("email", "==", data[0]));
    const querySnapshot = await getDocs(q);
    var flg = false;
    //console.log(querySnapshot)
    var user =  {};
    var uid=''
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        flg = true
        uid=doc.id
        user=doc.data()
       // console.log(doc.id, " => ", doc.data());
    });
    if (flg) {
       if(user.monthOfPayment===data[2] && user.yearOfPayment===data[3]) {
        alert('already registered for this month . Please note that you cant change your batch')
       }
       else{
        db.collection("Users").doc(uid).update({
            monthOfPayment:data[2],
            yearOfPayment:data[3]
          }).then(function() {
            alert('Registered for this month successfully!')
            
          });
       }
        // return false

    }
    else{
        alert('not a registered user, please sign in .')
    }
}
async function sendData(data) {
    try {

        const usersRef = collection(db, "Users");

        const q = query(usersRef, where("email", "==", data[0]));
        const querySnapshot = await getDocs(q);
        var flg = false;
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            flg = true;
            // console.log(doc.id, " => ", doc.data());
        });

        if (flg) {
            alert('You have already signed in once, please login using the existing Email ID')
            // return false
        }
        else {
            const docRef = await addDoc(collection(db, "Users"), {
                email: data[0],
                name: data[1],
                phone: data[2],
                age: data[3],
                batch: data[4],
                monthOfPayment: data[5],
                yearOfPayment: data[6]
            });
            console.log("Document written with ID: ", docRef.id);
            alert('successful sign in')
            // return true;
        }
    }
    catch (e) {
        alert('some error occured please try again once again')
        console.log(e);
        // return false;
    }

}
function validateEmail(email) {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email === undefined) return false;
    if (email.match(mailformat)) {
        return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
}

function validateName(name) {

    // var flag = true;
    if (name === undefined) return false;

    if (name.length > 150) return false;
    for (let i = 0; i < name.length; i++) {
        if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') ||(name[i]===' '))) return false;
    }
    return true;
}

function validatePhone(phone) {
    if (phone === undefined) return false;
    if (phone.length !== 10) return false;
    for (let i = 0; i < phone.length; i++) {
        if (!(phone[i] >= '0' && phone[i] <= '9')) return false;
    }
    return true;
}
function validateAge(age) {
    if (age === undefined) return false;

    if (age.length > 2) return false;
    for (let i = 0; i < age.length; i++) {
        if (!(age[i] >= '0' && age[i] <= '9')) return false;
    }
    var ageInt = parseInt(age)
    return ageInt >= 18 && ageInt <= 65;
}

export { validateAge, validateEmail, validateName, validatePhone, sendData,loginExisting }