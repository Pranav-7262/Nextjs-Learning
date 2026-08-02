import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [students] = await db.execute("select * from Stud");
  console.log(students);
  return (
    <>
      <h1>HII </h1>

      <br />
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

export default StaticPage;
