const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const queryString = `
SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1 
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`;
const cohortName = process.argv[2];

const values = [`%${cohortName}%`];

pool.query(queryString, values).then((res) => {
  res.rows.forEach((row) => {
    console.log(`${row.cohort} : ${row.teacher}`);
  });
});
