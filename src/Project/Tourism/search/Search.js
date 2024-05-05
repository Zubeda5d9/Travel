


import React, { useState } from 'react';
import './Searchstyle.css'

const Search = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  

  const handleSubmit = event => {
    event.preventDefault();
    
  };

  return (
    <div name="book">
      <form onSubmit={handleSubmit} className='booking-form'>
        <label>
            Select Destination:
            {/* <input type="date" value={startDate} onChange={handleStartDateChange} className='val'/> */}
            <select class="sel">
                <option>Choose Your Destination</option>
                <option>KeyResort</option>
                <option>WickaninnishRes</option>
                <option>BiarritzRes</option>
                <option>Reethires</option>
                <option>MiamiRes    </option>
            </select>
        </label>
        <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} className='val'/>
        </label>
        <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} className='val'/>
        </label>
      
    </form>
    </div>
  );
};

export default Search;