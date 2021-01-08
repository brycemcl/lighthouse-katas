const organizeInstructors = function(instructors) {
  let returnObject = {};
  for (let instructor of instructors) {
    if (!returnObject[instructor.course]) {
      returnObject[instructor.course] = [];
    }
    returnObject[instructor.course].push(instructor.name);
  }
  return returnObject;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ])
);
