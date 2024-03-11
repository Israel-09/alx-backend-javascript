export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const studentId = list.map((student) => student.id);
    return studentId;
  }
  return [];
}
