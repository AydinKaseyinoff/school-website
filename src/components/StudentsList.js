import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmNyPuwQps8IbT_R3FaezUPGkPBAeohAU",
    authDomain: "istambekov-e6576.firebaseapp.com",
    projectId: "istambekov-e6576",
    storageBucket: "istambekov-e6576.appspot.com",
    messagingSenderId: "892550047847",
    appId: "1:892550047847:web:1b5b32ab2d92cb1abb0cc2",
    measurementId: "G-6ED26BFXV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(db, "students");
        const snapshot = await getDocs(studentsCollection);
        const studentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  const handleSaveStudent = async () => {
    try {
      await addDoc(collection(db, "students"), {
        firstName: firstName,
        lastName: lastName
      });
      console.log("Student added successfully!");
      // Очищаем поля после добавления студента
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
      <h2>Add New Student</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSaveStudent}>Save Student</button>
    </div>
  );
};

export default StudentsList;

