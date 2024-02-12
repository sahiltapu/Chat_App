import React from 'react'
import SearchInput from './SearchInput'
import Conversiations from './Conversiations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className={"divider px-3"}></div>
      <Conversiations />
      <LogoutButton /> 
    </div>
  )
}

export default Sidebar
