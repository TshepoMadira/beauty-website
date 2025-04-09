// // src/contexts/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, db } from '../firebase';
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function signup(email, password, additionalData) {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         email,
//         createdAt: new Date(),
//         ...additionalData
//       });
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async function login(email, password) {
//     try {
//       return await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       throw error;
//     }
//   }

//   function logout() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const docRef = doc(db, "users", user.uid);
//         const docSnap = await getDoc(docRef);
//         setUserData(docSnap.exists() ? docSnap.data() : null);
//       } else {
//         setUserData(null);
//       }
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     userData,
//     signup,
//     login,
//     logout,
//     loading // Expose loading state
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }