const firebaseConfig = {
    apiKey: "AIzaSyC_Bjx8wJez5N7Q0n7e_SA9lIwK2Mopqa4",
    authDomain: "mindspace-82463.firebaseapp.com",
    projectId: "mindspace-82463",
    storageBucket: "mindspace-82463.appspot.com",
    messagingSenderId: "529861969233",
    appId: "1:529861969233:web:843409598344e0bf8bbf70",
    measurementId: "G-QKJ77DDV2C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
