import css from './SearchBox.module.scss';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input className={css.searchField}
        type="text"
        placeholder='Search name...'
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
export default SearchBox; 