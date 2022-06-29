import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetDetails } from '../../service/getFilmes';
import { format } from 'date-fns';

function Details() {
  const params = useParams();
  const [details, setDetails] = useState({});

  const handleGetDetails = async (id) => {
    const response = await GetDetails(id);
    console.log(response);
    setDetails(response);
  };

  const handleFormatDate = (date) =>{
    if (date) {
      const formatDate = format(new Date(date), 'dd/mm/aaaa');
    return formatDate;
    }
    
  }

  useEffect(() => {
    handleGetDetails(params.id);
  }, []);

  return (
    <div>
      <h1>{details.Title}</h1>
      <h1>{handleFormatDate(details.Released)}</h1>
    </div>
  );
}

export default Details;