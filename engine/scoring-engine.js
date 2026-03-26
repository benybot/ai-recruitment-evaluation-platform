function evaluate(candidate, role, weights) {
  const skillMatch = role.required_skills.filter(skill =>
    candidate.skills.includes(skill)
  ).length / role.required_skills.length;

  const experienceScore = candidate.experience_years >= role.min_experience ? 1 : 0.5;

  const videoScore = candidate.video_score / 10;
  const assessmentScore = candidate.assessment_score / 10;

  return (
    skillMatch * weights.skills +
    experienceScore * weights.experience +
    videoScore * weights.video +
    assessmentScore * weights.assessment
  );
}

module.exports = { evaluate };
