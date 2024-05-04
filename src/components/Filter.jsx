import React from 'react'

export default function Filter() {
  return (
    <div>
      <select className="px-2 border-black border-2 rounded-md" name="" id="">
        <option hidden="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
