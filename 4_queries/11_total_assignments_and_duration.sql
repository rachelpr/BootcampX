SELECT day, count(assignments.id) as number_of_assignments, sum(duration) as duration
  FROM assignments
  GROUP BY assignments.day
  ORDER BY day ASC
  ;