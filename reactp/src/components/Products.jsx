import React, { useState } from 'react';
import OneProduct from './OneProduct';
import ReactPaginate from 'react-paginate';
import usePagination from './usePagination';

const Products = ({ products, onAdd, remFromCart }) => {
  const itemsPerPage = 6;
  const { currentPage, handlePageChange, getItemsForCurrentPage, getPageCount } = usePagination(itemsPerPage);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(filter.toLowerCase())
  );

  const paginatedProducts = getItemsForCurrentPage(filteredProducts);

  const rows = [];
  for (let i = 0; i < paginatedProducts.length; i += 3) {
    rows.push(paginatedProducts.slice(i, i + 3));
  }

  const renderProducts = () => {
    return (
      <>
        {rows.map((row, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
            {row.map((prod) => (
              <OneProduct
                product={prod}
                key={prod.id}
                onAdd={onAdd}
                remFromCart={remFromCart}
                inCart={1}
              />
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='all-products'>
      <div className='filter'>
        <label htmlFor='filter'>Pretraga: </label>
        <input className='input'
          type='text'
          id='filter'
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      {renderProducts()}

      <div>
        <ReactPaginate
          className='pagination'
          pageCount={getPageCount(filteredProducts.length)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Products;