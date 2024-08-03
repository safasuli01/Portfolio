export const SkillColor = (percentage) => {
  if (percentage < 25) {
    return "#9370db";
  } else if (percentage < 50) {
    return "#8a2be2";
  } else if (percentage < 75) {
    return "#4b0082";
  } else if (percentage < 90) {
    return "#ba55d3";
  } else {
    return "#3b007f";
  }
};
