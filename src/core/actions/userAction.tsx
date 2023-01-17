import {
  collection,
  doc,
  query,
  where,
  getDocs,
  DocumentData,
  addDoc,
  updateDoc,
  arrayRemove,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase/firebaseConfig";
import { v4 } from "uuid";

const getUserId = async (user: any) => {
  const docQuery = query(collection(db, "users"), where("uid", "==", user.uid));
  let response = await getDocs(docQuery);
  let id = response.docs[0].id;
  return id;
};

const imageUpload = async (imageUpload: File, user: Document) => {
  if (imageUpload !== null) {
    const fileName = imageUpload.name + v4();
    const imageRef = ref(storage, `posts/${fileName}`);
    uploadBytes(imageRef, imageUpload).then(async (res) => {
      const URL = `https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2F${fileName}?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b`;
      getUserId(user).then(async (id: any) => {
        const uploadedPic = await addDoc(collection(db, `users/${id}/posts`), {
          src: [URL],
        });
        const updateDocID = await updateDoc(
          doc(db, `users/${id}/posts/${uploadedPic.id}`),
          { doc_ID: uploadedPic.id }
        );
        const postsCollection = await addDoc(collection(db, "userPosts"), {
          user: user,
          src: [URL],
          doc_ID: uploadedPic.id,
          timestamp: Date.now(),
          comments: [],
          likes: [],
        });
      });
    });
  }
};

const addLike = async (docID: any, userID: any) => {
  const docQuery = query(
    collection(db, "userPosts"),
    where("doc_ID", "==", docID)
  );
  let response = await getDocs(docQuery);

  let documentID = response.docs[0].id;
  let documentData = response.docs[0].data().likes;

  const updatedDoc = updateDoc(doc(db, `userPosts/${documentID}`), {
    likes: [...documentData, userID],
  });
};

const addComment = async (dataObj: {
  docID: any;
  userID: any;
  name: string;
  dp: string;
  comment: string;
}) => {
  const docQuery = query(
    collection(db, "userPosts"),
    where("doc_ID", "==", dataObj.docID)
  );
  let response = await getDocs(docQuery);
  let documentID = response.docs[0].id;
  let documentData = response.docs[0].data().comments;

  const commentData = dataObj;

  updateDoc(doc(db, `userPosts/${documentID}`), {
    comments: [...documentData, commentData],
  });
};

const postDislike = async (docID: any, userID: any) => {
  const docQuery = query(
    collection(db, "userPosts"),
    where("doc_ID", "==", docID)
  );
  let response = await getDocs(docQuery);
  let documentID = response.docs[0].id;
  const updatedDoc = updateDoc(doc(db, `userPosts/${documentID}`), {
    likes: arrayRemove(userID),
  });
};

const setDisplayPicture = async (imageUpload: File, user: Document) => {
  if (imageUpload !== null) {
    const fileName = imageUpload.name + v4();
    const imageRef = ref(storage, `posts/${fileName}`);
    uploadBytes(imageRef, imageUpload).then(async (res) => {
      const URL = `https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2F${fileName}?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b`;
      getUserId(user).then(async (id: any) => {
        const uploadedPic = await updateDoc(doc(db, `users/${id}`), {
          dp: URL,
        });
      });
    });
  }
  return true;
};

interface userPostsInterface {
  dp: string;
  email: string;
  name: string;
  uid: string;
  post: {};
}
const getUsers = async () => {
  let userPosts: userPostsInterface[] = [];
  const usersQuery = query(collection(db, "users"));
  const querySnapshot = await getDocs(usersQuery);
  querySnapshot.forEach((doc: any) => {
    userPosts = [...userPosts, doc.data()];
  });
  return userPosts;
};

const getPosts = async () => {
  let userPosts: DocumentData[] = [];
  const usersQuery = query(
    collection(db, "userPosts"),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = await getDocs(usersQuery);
  querySnapshot.forEach((doc) => {
    userPosts = [...userPosts, doc.data()];
  });
  return userPosts;
};
const addnotification = async (n: any) => {
  console.log(n);

  const docQuery = query(
    collection(db, "users"),
    where("uid", "==", n?.user_uid)
  );
  let response = await getDocs(docQuery);
  let documentID = response.docs[0].id;
  let documentData = response.docs[0].data().notifications;

  const updatedDoc = updateDoc(doc(db, `users/${documentID}`), {
    notifications: [...documentData, n],
  });
};

const fetchNotifications = async (user_id: string) => {
  const docQuery = query(
    collection(db, "users"),
    where("uid", "==", user_id || "")
  );
  let response = await getDocs(docQuery);
  let documentData = await response.docs[0]?.data();
  return documentData;
};

const userActions = {
  imageUpload,
  getPosts,
  setDisplayPicture,
  getUsers,
  addLike,
  postDislike,
  addComment,
  addnotification,
  fetchNotifications,
};

export default userActions;
