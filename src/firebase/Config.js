import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyDFrkTCz9fgOyu5wCl4q2g00dTh9hoL-bU",
    authDomain: "react-js-desires.firebaseapp.com",
    projectId: "react-js-desires",
    storageBucket: "react-js-desires.firebasestorage.app",
    messagingSenderId: "475307765818",
    appId: "1:475307765818:web:2dcbeb3e06eb1cfa8e8503",
    measurementId: "G-8Q40QPBLN1"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
export async function ResetUserPassword(email) {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export async function checkEmail(email) {
    let success = true;
    try {
        await firebase
            .auth()
            .fetchSignInMethodsForEmail(email)
            .then((res) => {
                if (res && res.length > 0) {
                    success = true;
                } else {
                    success = false;
                }
            })
            .catch(function (error) {
                success = false;
            });
    } catch (error) {
        success = false;
        console.error("Error:", error);
    }
    return success;
}
export async function signUp(email, password) {
    let success = true;
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (user) => {
            success = user;
        })
        .catch(function (error) {
            success = false;
        });
    return success;
}
export async function signIn(email, password) {
    let success = false;
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (user) => {
            success = { res: true, user: user.user.uid };
        })
        .catch(function (error) {
            success = { res: false, error: error.message };
        });
    return success;
}
export async function getUserById(userId, collection) {
    try {
        if (!userId) {
            return {
                success: false,
                error: "User ID is missing , Please Create your account !",
            };
        }

        const userDoc = await firebase
            .firestore()
            .collection(collection)
            .doc(userId)
            .get();

        if (!userDoc.exists) {
            return { success: false, error: "User not found" };
        }

        const userData = userDoc.data();

        return { success: true, user: userData };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
export async function getCurrentUserId() {
    var user = await firebase.auth().currentUser;

    if (user != null) {
        return user.uid;
    } else {
        // toast.show("Seccion Expired Please Login Again");
    }
}
export async function getCurrentUser() {
    var user = await firebase.auth().currentUser;

    if (user != null) {
        return user;
    } else {
        // toast.show("Seccion Expired Please Login Again");
    }
}
export async function logoutUser() {
    await firebase.auth().signOut();
    return true;
}
export async function saveData(collection, doc, jsonObject) {
    let success = null;
    await firebase
        .firestore()
        .collection(collection)
        .doc(doc)
        .set(jsonObject, { merge: true })
        .then(async function () {
            success = true;
        })
        .catch(function (error) {
            success = false;
        });
    return success;
}
export async function addElementToNestedArray(collection, doc, array, obj) {
    let db = firebase.firestore();

    db.collection(collection)
        .doc(doc)
        .update({
            [array]: firebase.firestore.FieldValue.arrayUnion(obj),
        });
}
export async function removeItemfromArray(collection, doc, array, index) {
    let docRef = await firebase.firestore().collection(collection).doc(doc);
    let docData = await docRef.get();

    if (docData.exists && docData.data()[array][index] != undefined) {
        docRef.update({
            [array]: firebase.firestore.FieldValue.arrayRemove(
                docData.data()[array][index]
            ),
        });
    }
}
export const uploadProfileImage = (img, folderName) => {
    return new Promise((resolve, reject) => {
        const uploadTask = firebase
            .storage()
            .ref(`${folderName}/${img?.name}`)
            .put(img);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                alert(error.message);
                reject(error.message);
            },
            async () => {
                try {
                    const url = await firebase
                        .storage()
                        .ref(`${folderName}`)
                        .child(img?.name)
                        .getDownloadURL();
                    resolve(url);
                } catch (error) {
                    console.error("Error getting download URL:", error);
                    reject(error);
                }
            }
        );
    });
};
export async function uploadImage(img, folderName) {
    return new Promise((resolve, reject) => {
        const uploadTask = firebase
            .storage()
            .ref(`${folderName}/${img?.name}`)
            .put(img);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                alert(error.message);
                reject(error.message);
            },
            async () => {
                try {
                    const url = await firebase
                        .storage()
                        .ref(`${folderName}`)
                        .child(img?.name)
                        .getDownloadURL();
                    resolve(url);
                } catch (error) {
                    console.error("Error getting download URL:", error);
                    reject(error);
                }
            }
        );
    });
}
export async function uploadBase64Labels(img, folderName, ext) {
    const id = uniqueID();
    return new Promise((resolve, reject) => {
        const uploadTask = firebase
            .storage()
            .ref(`${folderName}/${id}.${ext}`)
            .putString(img, "base64", { contentType: ext === "pdf" ? 'application/pdf' : `image/${ext}` });

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                alert(error.message);
                reject(error.message);
            },
            async () => {
                try {
                    const url = await firebase
                        .storage()
                        .ref(`${folderName}`)
                        .child(`${id}.${ext}`)
                        .getDownloadURL();
                    resolve(url);
                } catch (error) {
                    console.error("Error getting download URL:", error);
                    reject(error);
                }
            }
        );
    });
}
export async function getAllOfCollection(collection) {
    let data = [];
    let querySnapshot = await firebase.firestore().collection(collection).get();
    querySnapshot.forEach(function (doc) {
        if (doc.exists) {
            data.push(doc.data());
        } else {
        }
    });
    return data;
}
export async function getAllOfCollectionCopy(collection) {
    let data = [];
    let querySnapshot = await firebase.firestore().collection(collection).get();
    querySnapshot.forEach(function (doc) {
        if (doc.exists) {
            if (doc.data()._id) {

            } else {
                console.log(doc.id)
                deleteDocument(collection, doc.id)
            }
            // data.push(doc.data());
        } else {
        }
    });
    return data;
}
export async function uploadMultipleImages(file, name) {
    try {
        const storageRef = firebase.storage().ref(name);
        await storageRef.put(file, { contentType: "image/jpeg" });

        const url = await storageRef.getDownloadURL();
        return url;
    } catch (err) {
        throw err;
    }
}
export async function uploadingImages(arr, folderName) {
    let images;
    try {
        if (arr?.length === 0) {
            toast.error("Upload your items photos.");
            return false;
        }
        let docId = uniqueID();
        let urls = await Promise.all(
            arr.map(async (item, index) => {
                let uri;

                if (typeof item?.image?.src === "object" && !undefined) {
                    uri = await uploadMultipleImages(
                        item.image.src,
                        `${folderName}/${docId}/Image_${index}`
                    );
                } else {
                    return item?.image?.src || "";
                }
                return uri;
            })
        );
        images = urls;
        return images;
    } catch (error) {
        toast.error(error?.message);
    }
}
export async function uploadMultipleFiles(file, name) {
    try {
        const storageRef = firebase.storage().ref(name);
        console.log("Uploading file:", file);
        console.log("Upload path:", name);

        await storageRef.put(file, { contentType: "application/pdf" });

        const url = await storageRef.getDownloadURL();
        return url;
    } catch (err) {
        console.error("Error uploading file:", err);
        throw err;
    }
}

export async function uploadingFiles(arr, folderName) {
    let images;
    try {
        if (arr?.length === 0) {
            toast.error("Upload your Labels");
            return false;
        }

        let urls = await Promise.all(
            arr.map(async (item, index) => {
                let uri;

                if (item instanceof File) { // check if item is a File object
                    uri = await uploadMultipleFiles(item, `${folderName}/${index}`);
                } else {
                    return item || "";
                }
                return uri;
            })
        );
        images = urls;
        return images;
    } catch (error) {
        console.error("Error in uploading files:", error);
        toast.error(error?.message);
    }
}

export async function getData(collection, doc, objectKey) {
    if (objectKey === undefined) {
        return firebase
            .firestore()
            .collection(collection)
            .doc(doc)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    return doc.data();
                } else {
                    return false;
                }
            });
    } else {
        return firebase
            .firestore()
            .collection(collection)
            .doc(doc)
            .get()
            .then(function (doc) {
                if (doc.exists && doc.data()[objectKey] != undefined) {
                    return doc.data()[objectKey];
                } else {
                    return false;
                }
            });
    }
}
export const getDocById = async (collectionName, id) => {
    let docRef = await firebase?.firestore()?.collection(collectionName)?.doc(id);
    let document = await docRef?.get();
    if (document?.exists) return document?.data();
    else return {};
};
export async function getDocByKeyValue(collection, key, value) {
    let data = [];
    let querySnapshot = await firebase
        .firestore()
        .collection(collection)
        .where(key, "==", value)
        .get();
    await querySnapshot.forEach(function (doc) {
        data.push(doc.data());
    });
    return data;
}
export function uniqueID() {
    function chr4() {
        return Math.random().toString(16).slice(-4);
    }
    return (
        chr4() +
        chr4() +
        "-" +
        chr4() +
        "-" +
        chr4() +
        "-" +
        chr4() +
        "-" +
        chr4() +
        chr4() +
        chr4()
    );
}
export async function getDocWithIdByKeyValue(collection, key, value) {
    try {
        let data = [];
        let querySnapshot = await firebase
            .firestore()
            .collection(collection)
            .where(key, "==", value)
            .get();
        querySnapshot.forEach(function (doc) {
            let obj = doc.data();
            obj.id = doc.id;
            data.push(obj);
        });

        return data;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
export async function getApplicantsData(applicants) {
    if (applicants?.length > 0) {
        try {
            const snapshot = await firebase
                .firestore()
                .collection("Users")
                .where(firebase.firestore.FieldPath.documentId(), "in", applicants)
                .get();

            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}
export const getAllFriends = async (collection, key, value) => {
    let querySnapshot = await firebase
        .firestore()
        .collection(collection)
        .where(key, "array-contains", value)
        .get();
    let data = await querySnapshot?.docs?.map((doc) => {
        return doc.data();
    });
    return data;
};
export async function addToArrayCustom(collection, doc, array, value) {
    let success = true;
    let docRef = await firebase.firestore().collection(collection).doc(doc);
    let docData = await docRef.get();

    if (docData.exists && docData.data()[array] != undefined) {
        docRef.update({
            [array]: firebase.firestore.FieldValue.arrayUnion(value),
            last_message_time: value.createdAt,
        });
        success = true;
    } else {
        success = false;
    }
    return success;
}
export async function updateArray(collection, doc, array, value, index) {
    let docRef = await firebase.firestore().collection(collection).doc(doc);
    let docData = await docRef.get();

    if (docData.exists && docData.data()[array][index] != undefined) {
        docRef
            .update({
                [array]: firebase.firestore.FieldValue.arrayRemove(
                    docData.data()[array][index]
                ),
            })
            .then(async () => {
                let docRef1 = await firebase
                    .firestore()
                    .collection(collection)
                    .doc(doc);
                let docData1 = await docRef1.get();
                if (docData1.exists && docData1.data()[array] != undefined) {
                    docRef1.update({
                        [array]: firebase.firestore.FieldValue.arrayUnion(value),
                    });
                }
            });
    }
}
export const addToArray = async (collection, doc, array, value) => {
    let success = true;
    let docRef = await firebase.firestore().collection(collection).doc(doc);
    let docData = await docRef.get();

    if (docData.exists && docData.data()[array] != undefined) {
        docRef.update({
            [array]: firebase.firestore.FieldValue.arrayUnion(value),
        });
        success = true;
    } else {
        saveData(collection, doc, { [array]: [value] });
        success = false;
    }
    return success;
};
export async function deleteDocument(collection, doc, field) {
    let db = await firebase.firestore();

    db.collection(collection)
        .doc(doc)
        .delete()
        .then(function () { })
        .catch(function (error) { });
}
export async function deleteAccount(userId) {
    let success = true;
    await firebase
        .auth()
        .currentUser.delete()
        .then(async (res) => {
            if (userId) {
                await firebase
                    .firestore()
                    .collection("Users")
                    .doc(userId)
                    .delete()
                    .then(async () => {
                        success = true;
                    })
                    .catch((error) => {
                        success = error.message;
                    });
            } else {
                toast.error("Something went wrong!");
            }
        })
        .catch((error) => {
            success = error.message;
        });

    return success;
}
export async function generateCustomID(collection) {
    const db = firebase.firestore();
    const counterRef = db.collection("counters").doc(collection);

    try {
        // Run an atomic transaction to increment the counter
        const newID = await db.runTransaction(async (transaction) => {
            const counterDoc = await transaction.get(counterRef);

            if (!counterDoc.exists) {
                // Initialize the counter if it doesn't exist
                transaction.set(counterRef, { currentID: 1 });
                return "1";
            }

            // Get the current ID and increment it
            const currentID = counterDoc.data().currentID;
            const newID = (currentID + 1).toString();

            // Update the counter document with the new ID
            transaction.update(counterRef, { currentID: currentID + 1 });

            return newID;
        });

        console.log("✌️ New Custom ID:", newID);
        return newID;
    } catch (error) {
        console.error("Error generating custom ID:", error);
        throw error;
    }
}
export async function uploadPDFBlob(pdfBlob, filename) {
    if (pdfBlob) {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const pdfRef = storageRef.child(filename);
        await pdfRef.put(pdfBlob);
        const downloadURL = await pdfRef.getDownloadURL();

        return downloadURL;
    } else {
        console.log("PDF Blob not available.");
    }
}
export { firebaseConfig };
