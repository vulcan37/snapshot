import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function TopNavBar() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputRef.current.value) { navigate(`/search?key=${inputRef.current.value}`) }
    }

  }
  return (
    <div className='app-header'>
      <h1 className='heading'>SnapShot</h1>
      <input type='text' className='input-bar' ref={inputRef} onKeyDown={handleKeyPress} />
      <button className='search-Icon' style={{ background: 'rgb(24, 24, 90)' }}
        onClick={() => { if (inputRef.current.value) { navigate(`/search?key=${inputRef.current.value}`); inputRef.current.value = '' } }}><SearchIcon fontSize='small' sx={{ color: 'white' }} /></button>
      <div className='search-class'>
        <p className='list-item' onClick={() => navigate('/mountains')}>Mountain</p>
        <p className='list-item' onClick={() => navigate('/Beaches')}>Beaches</p>
        <p className='list-item' onClick={() => navigate('/birds')}>Bird</p>
        <p className='list-item' onClick={() => navigate('/Food')}>food</p>
      </div>
    </div>
  )
}

export default TopNavBar