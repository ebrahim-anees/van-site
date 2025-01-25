import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyAvUNBK3pWrkoPfH6bUHpd4cfU8BmVkWEE',
  authDomain: 'vanlife-52d13.firebaseapp.com',
  projectId: 'vanlife-52d13',
  storageBucket: 'vanlife-52d13.firebasestorage.app',
  messagingSenderId: '617213794343',
  appId: '1:617213794343:web:8bc25a8c1dab4f2ec05602',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');
export async function getVans() {
  const vansSnapshot = await getDocs(vansCollectionRef);
  const vansArr = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansArr;
}
export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);
  return { ...vanSnapshot.data(), id: vanSnapshot.id };
}
export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const vansSnapshot = await getDocs(q);
  const vansArr = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansArr;
}
export async function getHostVan(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);
  return { ...vanSnapshot.data(), id: vanSnapshot.id };
}
export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      msg: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
