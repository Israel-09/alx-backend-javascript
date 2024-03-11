export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    const idsSum = studentList.reduce((sum, current) => sum + current.id, 0);
    return idsSum;
  }
  return 0;
}
