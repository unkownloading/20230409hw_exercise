const firebaseConfig = {
    apiKey: "AIzaSyAdSuyiofvIku1hsCsKazy6v5nGYtBgDgU",
    authDomain: "donateme-914d4.firebaseapp.com",
    databaseURL: "https://donateme-914d4-default-rtdb.firebaseio.com",
    projectId: "donateme-914d4",
    storageBucket: "donateme-914d4.appspot.com",
    messagingSenderId: "11394645783",
    appId: "1:11394645783:web:c06ea0d724a2574a80c152"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

// ; (async () => {
//     let result = await write('BBB', 'test')
//     console.log(result)

//     let response = await read('test')
//     console.log(response)

//     listen('test', (value) => {
//         console.log(value)
//     })
// })()
