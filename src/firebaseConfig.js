const firebaseConfig = {
    apiKey: "AIzaSyDMI19EluzoZ_QE9vMnHutSIqyKMQs_1ZM",
    authDomain: "safespace-9b00e.firebaseapp.com",
    projectId: "safespace-9b00e",
    storageBucket: "safespace-9b00e.appspot.com",
    messagingSenderId: "884438897602	",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
