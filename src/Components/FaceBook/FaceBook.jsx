import React, { useState } from 'react'
import profiles from '../../data/berlin.json'
import './FaceBook.css'

const FaceBook = () => {

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [sortBy, setSortBy] = useState('none')
  const [searchQuery, setSearchQuery] = useState('')

  const handleClick = (country) => {
    setSelectedCountry(country)
  }

  const handleSortClick = (sortMethod) => {
    setSortBy(sortMethod)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSortBy('none')
    setSelectedCountry(null)
  }

  const countries = Array.from(new Set(profiles.map((profile) => profile.country)))
    .filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()))

  let sortedProfiles = profiles.slice()

  if (sortBy === 'firstName') {
    sortedProfiles.sort((a, b) => a.firstName.localeCompare(b.firstName))
  } else if (sortBy === 'lastName') {
    sortedProfiles.sort((a, b) => a.lastName.localeCompare(b.lastName))
  }

  sortedProfiles = sortedProfiles.filter((profile) => {
    return searchQuery === '' ||
      profile.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="FaceBook">

      <div className='SearchArea'>
        <div className='SearchAndSort'>
          <input type='text' value={searchQuery} onChange={handleSearchChange} placeholder='Search by names...' />        
          <button onClick={handleReset}>
            Reset
          </button>
          <button onClick={() => handleSortClick('firstName')}>
            Sort by First Name
          </button>
          <button onClick={() => handleSortClick('lastName')}>
            Sort by Last Name
          </button>
        </div>
          <hr></hr>    
        <div className='SearchByCountry'>{countries.map((country, index) => (
          <button key={index} onClick={() => handleClick(country)}>
            {country}
          </button>
        ))}
        </div>
      </div>

      <div className="ProfileInfos">
      {sortedProfiles.map((profile, index) => (
        <div key={index} style={{ backgroundColor: profile.country === selectedCountry ? 'lightblue' : 'white' }} className="profile">
            <img src={profile.img} alt="Profile" />
            <div className="details">
              <p><span>First name:</span> {profile.firstName}</p>
              <p><span>Last name:</span> {profile.lastName}</p>
              <p><span>Country:</span> {profile.country}</p>
              <p><span>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaceBook
