import { useState } from 'react';

const SearchBar = ({ handleTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTermSubmit(searchTerm);
  }

  return (
    <div>
      <form className="search-bar ui segment !bg-black !px-0" onSubmit={handleSubmit}>
        <div className="ui form">
          <label className='!text-white !text-[24px] font-bold !mb-7'> Youtube Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className='!text-[17px]'
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
