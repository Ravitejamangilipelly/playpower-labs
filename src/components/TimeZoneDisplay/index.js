import React from 'react';


const TimeZoneDisplay = ({ timeZone, currentTime, onDelete }) => {
  const timeInZone = currentTime.tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  
  return (
    <div className="timezone-display">
      <span>{timeZone}: {timeInZone}</span>
      <button className="delete-btn" onClick={onDelete}>X</button>
    </div>
  );
};

export default TimeZoneDisplay;
