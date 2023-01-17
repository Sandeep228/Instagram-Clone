import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import UserRegisterInterface from "../../interface/UserRegisterInterface";
import UserLoginInterface from "../../interface/UserLoginInterface";

const userCollection = collection(db, "users");

const UserRegister = async (user: UserRegisterInterface) => {
  const res = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  if (res) {
    const newUser = {
      name: user.username,
      email: res.user.email,
      uid: res.user.uid,
      notifications: [],
    };
    const createUserRes = await addDoc(userCollection, newUser);
    const getUserDoc = await getDoc(doc(db, "users", createUserRes.id));
    const userDoc = getUserDoc.data();
    return userDoc;
  }
};

const UserSignIn = async (user: UserLoginInterface) => {
  const res = await signInWithEmailAndPassword(
    auth,
    user.loginId,
    user.loginPassword
  );
  const docQuery = query(
    collection(db, "users"),
    where("uid", "==", res.user.uid)
  );
  let response = await getDocs(docQuery);
  return response.docs[0].data();
};

const UserLogout = async () => {
  const res = await signOut(auth);
};

const authActions = {
  UserRegister,
  UserSignIn,
  UserLogout,
};
export default authActions;
