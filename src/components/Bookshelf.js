import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = props => {
  const { books, onShelfChange } = props;
  let shelf;
  switch (props.shelf) {
    case 'currentlyReading':
      shelf = 'Currently Reading';
      break;
    case 'wantToRead':
      shelf = 'Want To Read';
      break;
    case 'read':
      shelf = 'Read';
      break;
    default:
      break;
  }
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map(
            (book) =>
              book.shelf === props.shelf && (
                <li key={book.id}>
                  <Book book={book} onShelfChange={onShelfChange} />
                </li>
              )
          )}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Bookshelf;
