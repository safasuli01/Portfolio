export const SkillColor = (percentage) => {
    if (percentage < 30) {
      return "#9370db";
    } else if (percentage < 60) {
      return "#8a2be2";
    } else {
      return "#4b0082";
    }
  };
  