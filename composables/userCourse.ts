export const userCourse = (courseSlug: string) => {
  const { courses } = useCourses();
  const course = courses.find(course => course.courseSlug === courseSlug)
  return {
    course,
  }
}