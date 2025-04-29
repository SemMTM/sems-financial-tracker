import { createContext, useContext, useState } from 'react';
import { addMonths, subMonths, isAfter, isBefore } from 'date-fns';

const CalendarContext = createContext();

const today = new Date();

export const CalendarProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Move to previous month (up to -6 months)
  const goToPreviousMonth = () => {
    const newDate = subMonths(selectedDate, 1);
    if (!isBefore(newDate, subMonths(today, 6))) {
      setSelectedDate(newDate);
    }
  };

  // Move to next month (up to +6 months)
  const goToNextMonth = () => {
    const newDate = addMonths(selectedDate, 1);
    if (!isAfter(newDate, addMonths(today, 6))) {
      setSelectedDate(newDate);
    }
  };

  // Format as YYYY-MM for query strings
  const getSelectedMonthParam = () => {
    return selectedDate.toISOString().slice(0, 7); // e.g. '2025-04'
  };

  return (
    <CalendarContext.Provider value={{
      selectedDate,
      setSelectedDate,
      goToNextMonth,
      goToPreviousMonth,
      getSelectedMonthParam,
    }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);