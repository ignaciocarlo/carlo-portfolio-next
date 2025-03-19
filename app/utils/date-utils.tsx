export function calculateDuration(startDate : Date, endDate : Date | null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    // Calculate difference in years
    let yearDiff = end.getFullYear() - start.getFullYear();
    let monthDiff = end.getMonth() - start.getMonth();
    
    // Adjust if month difference is negative
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    
    // Format the duration text
    let durationText = '';
    if (yearDiff > 0) {
      durationText = yearDiff === 1 ? '1 year' : `${yearDiff} years`;
      if (monthDiff > 0) {
        durationText += monthDiff === 1 ? ', 1 month' : `, ${monthDiff} months`;
      }
    } else if (monthDiff > 0) {
      durationText = monthDiff === 1 ? '1 month' : `${monthDiff} months`;
    } else {
      durationText = 'Less than a month';
    }
    
    return durationText;
  }