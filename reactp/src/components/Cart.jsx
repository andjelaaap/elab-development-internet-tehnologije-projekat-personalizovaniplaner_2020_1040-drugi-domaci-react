import React, { useState } from 'react';
import OneProduct from './OneProduct';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autotable module

const Cart = ({ products }) => {
  const generateInvoicePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Invoice', 20, 20);

    const columns = ['Product', 'Price'];
    const data = products.map((prod) => [prod.name, prod.price]);

    pdf.autoTable({
      startY: pdf.previousAutoTable.finalY + 10,
      head: [columns],
      body: data,
    });

    pdf.save('invoice.pdf');
  };

  return (
    <div className="cart-container">
      <h3>Ovo je tvoja korpa.</h3>
      {products.map((prod) => (
        <OneProduct
          product={prod}
          key={prod.id}
          inCart={0}
        />
      ))}
      <button className="btn" onClick={generateInvoicePDF}>
        Poruci
      </button>
    </div>
  );
};

export default Cart;

