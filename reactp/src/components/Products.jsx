import React, { useState } from 'react';
import OneProduct from './OneProduct';
import ReactPaginate from 'react-paginate';

const Products = ({ products, onAdd, remFromCart }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const productsPerPage = 5;

  const getProductsForCurrentPage = () => {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    return products.slice(startIndex, endIndex);
  };

  const renderProducts = () => {
    if (currentPage === 0) {
      // Ako se nalazim na prvoj stranici, podelite proizvode u dva reda
      const firstRow = getProductsForCurrentPage().slice(0, 3);
      const secondRow = getProductsForCurrentPage().slice(3, 5);

      return (
        <>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {firstRow.map((prod) => (
              <OneProduct
                product={prod}
                key={prod.id}
                onAdd={onAdd}
                remFromCart={remFromCart}
                inCart={1}
              />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {secondRow.map((prod) => (
              <OneProduct
                product={prod}
                key={prod.id}
                onAdd={onAdd}
                remFromCart={remFromCart}
                inCart={1}
              />
            ))}
          </div>
        </>
      );
    } else {
      // Inače, prikaži standardni broj proizvoda po stranici
      return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {getProductsForCurrentPage().map((prod) => (
            <OneProduct
              product={prod}
              key={prod.id}
              onAdd={onAdd}
              remFromCart={remFromCart}
              inCart={1}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className='all-products'>
      {renderProducts()}

      <div>
        <ReactPaginate
          className='pagination'
          pageCount={Math.ceil(products.length / productsPerPage)}
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