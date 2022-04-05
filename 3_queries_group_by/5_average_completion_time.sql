SELECT students.name as student, avg(duration) as average_assignment_duration
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE students.end_date IS NULL
  GROUP BY students.name
  ORDER BY avg(duration) DESC
  ;