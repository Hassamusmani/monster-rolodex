import './search-box.styles.css';

export const SearchBox = ({ placeHolder, handleChange, type }) => (
  <input 
    className='search'
    type={type}
    placeholder={placeHolder}
    onChange={handleChange} 
    />
)