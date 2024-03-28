import { useState, useEffect } from 'react';

const useFormattedDate = (dateString) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatDate = (dateString) => {
        if (!dateString) return '';
      const date = new Date(dateString);
  
      // Format the date
      const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
      const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

      return formattedDate
    };

    setFormattedDate(formatDate(dateString));
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;