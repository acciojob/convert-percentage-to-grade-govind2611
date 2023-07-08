function calculateGrade(percentage) {
  if (typeof percentage === 'number' && !isNaN(percentage)) {
    var roundedPercentage = Math.round(percentage);
    if (roundedPercentage >= 90) {
      return 'A';
    } else if (roundedPercentage >= 80) {
      return 'B';
    } else if (roundedPercentage >= 70) {
      return 'C';
    } else if (roundedPercentage >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  } else {
    return 'F';
  }
}

const percentage = parseInt(prompt('Enter Percentage.'));
alert(calculateGrade(percentage));