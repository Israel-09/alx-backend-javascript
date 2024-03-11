export default function getStudentsByLocation(studentList, city) {
  if (Array.isArray(studentList)) {
    const students = studentList.filter((student) => student.location === city);
    return students;
  }
  return [];
}
