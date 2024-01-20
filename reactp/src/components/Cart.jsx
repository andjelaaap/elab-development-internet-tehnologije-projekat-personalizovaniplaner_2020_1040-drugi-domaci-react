import React from 'react';
import OneProduct from './OneProduct';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Cart = ({ products }) => {
  const generateInvoicePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Vasa narudzbina je primljena, u prilogu Vam je dostavljen racun', 20, 20);
  
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
  
    const columns = ['Prizvod', 'Cena', 'Broj stranica', 'Format', 'Beleske', 'Stikeri'];
    const data = products.map((prod) => [prod.name, prod.price, prod.page_number, prod.size, prod.notes, prod.stickers]); 
  
    const columnWidths = [30, 30, 30, 30, 30, 30];
    const startY = 30;
  
  pdf.autoTable({
      startY,
      head: [columns],
      headStyles: {
        fillColor: [216, 112, 147],
        textColor: [255, 255, 255], 
      },  
      body: data,
      columnStyles: { 0: { cellWidth: columnWidths[0] }, 1: { cellWidth: columnWidths[1], halign: 'right' } },
    });
  
    pdf.save('racunnarudzbine.pdf');
  };

  return (
    <div className="cart-container" style={{display:'flex', flexDirection:'column'}}>
      <h3>Ovo je tvoja korpa.</h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {products.map((prod) => (
        <OneProduct
          product={prod}
          key={prod.id}
          inCart={0}
        />
      ))}
      </div>
      
      <button className="btn" style={{width: "15%", justifyContent:'center', alignItems:'center', marginTop:'15px'}} onClick={generateInvoicePDF}>
        Poruci
      </button>
    </div>
  );
};

export default Cart;

