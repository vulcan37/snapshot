import React from 'react'
import FetchData from './FetchData'
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const value = searchParams.get('key');
  // setSearchParams({ key: 'new-value' });
  return (
    <FetchData taggy={value} />
  )
}

export default Search