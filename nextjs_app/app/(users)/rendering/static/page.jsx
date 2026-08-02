import { db } from "@/config/db.jsx";

export const revalidate = 30; // ISR (After 30 sec static page acts as dynamic page)
const StaticPage = async () => {
  const [students] = await db.execute("select * from Stud");
  console.log("static page..");
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
