export function generateCalendarGrid(selectedDate) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const startDay = (startDate.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0

  const daysInMonth = endDate.getDate();
  const totalSlots = 35;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const calendar = [];

  // Add leading blank cells
  for (let i = 0; i < startDay; i++) {
    calendar.push({ type: 'placeholder' });
  }

  // Add all days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(year, month, i);
    currentDate.setHours(0, 0, 0, 0);

    calendar.push({
      type: 'day',
      date: currentDate,
      income: null,
      expenditure: null,
      isToday: currentDate.getTime() === today.getTime(),
    });
  }

  // Pad the end to reach exactly 35 cells
  while (calendar.length < totalSlots) {
    calendar.push({ type: 'placeholder' });
  }

  return calendar;
}