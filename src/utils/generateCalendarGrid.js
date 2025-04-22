export function generateCalendarGrid(year, month) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const startDay = (startDate.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0

  const daysInMonth = endDate.getDate();
  const totalSlots = 35;

  const calendar = [];

  // Add leading blank cells
  for (let i = 0; i < startDay; i++) {
    calendar.push({ type: 'placeholder' });
  }

  // Add all days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({
      type: 'day',
      date: new Date(year, month, i),
      income: 300,
      expenditure: 120,
    });
  }

  // Pad the end to reach exactly 35 cells
  while (calendar.length < totalSlots) {
    calendar.push({ type: 'placeholder' });
  }

  return calendar;
}