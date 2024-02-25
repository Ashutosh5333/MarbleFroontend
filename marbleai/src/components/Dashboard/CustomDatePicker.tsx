import  { useState, useEffect } from 'react';

const CustomDatePicker = ({ onDateRangeChange, defaultStartDate, defaultEndDate }:any) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  useEffect(() => {
     onDateRangeChange(startDate, endDate);
  }, [startDate, endDate]);

  const handleStartDateChange = (event: { target: { value: any; }; }) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: { target: { value: any; }; }) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input type="month" id="startDate" value={startDate} onChange={handleStartDateChange} />
      <label htmlFor="endDate">End Date:</label>
      <input type="month" id="endDate" value={endDate} onChange={handleEndDateChange} />
    </div>
  );
};

export default CustomDatePicker;
