const BASE_URL = "http://localhost:8080";

// export const getCourses = async () => {
//   const res = await fetch(`${BASE_URL}/courses`);
//   return res.json();
// };

export const getCourses= async()=>{
  const res= await fetch(`${BASE_URL}/courses`);
  return res.json();
};

export const getEnrolledStudents = async () => {
  const res = await fetch(`${BASE_URL}/courses/enrolled`);
  return res.json();
};

export const registerCourse = async (data) => {
  return fetch(`${BASE_URL}/courses/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
};
