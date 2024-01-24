import React, { useState} from 'react';
import OneProduct from './OneProduct';
import ReactPaginate from 'react-paginate';
import usePagination from './usePagination';

const Products = ({ products, addProduct, removeProduct }) => {
  const itemsPerPage = 6;
  const { handlePageChange, getItemsForCurrentPage, getPageCount } = usePagination(itemsPerPage);

  const [filteri, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(filteri.toLowerCase())
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
                addProduct={addProduct}
                removeProduct={removeProduct}
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
          value={filteri}
          onChange={handleFilterChange}
        />
      </div>

      {renderProducts()}

      <div>
        <ReactPaginate
          className='pagination'
          pageCount={filteredProducts ? getPageCount(filteredProducts.length) : 0}
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