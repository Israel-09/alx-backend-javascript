/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const filter = (studentList, city) => {
    const updatedList = studentList.filter((student) => student.location === city);
    return updatedList;
  };

  const updateGrade = (student, grade) => {
    if (grade.length === 1) {
      student.grade = grade[0].grade;
      return student;
    }
    student.grade = 'N/A';
    return student;
  };

  const gradeFilt = (std, newGrade) => newGrade.filter((grade) => grade.studentId === std.id);

  let newList = filter(studentList, city);
  newList = newList.map((student) => updateGrade(student, gradeFilt(student, newGrade)));
  return newList;
}
