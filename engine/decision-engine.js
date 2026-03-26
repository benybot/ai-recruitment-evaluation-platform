function decision(score) {
  if (score >= 0.8) return "Strong Hire";
  if (score >= 0.6) return "Consider";
  return "Reject";
}

module.exports = { decision };
