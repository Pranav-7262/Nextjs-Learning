import { db } from "@/config/db.jsx";
import { cache } from "react";

export const dynamic = "force-dynamic";
const DynamicPage = async () => {
  const students = await getData();
  return (
    <>
      <h3>Total Students : {students.length}</h3>

      <br />
      <StudentList students={students} />
    </>
  );
};

export default DynamicPage;

const StudentList = async () => {
  const students = await getData();
  return (
    <>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.StudentID}>
              <span>{student.Name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const getData = cache(async () => {
  const [students] = await db.execute("select * from Stud");
  console.log("fetching data..");
  return students;
});
