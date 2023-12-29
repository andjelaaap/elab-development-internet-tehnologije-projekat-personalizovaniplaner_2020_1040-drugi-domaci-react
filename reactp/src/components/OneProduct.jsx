import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

function OneProduct({product, onAdd, remFromCart,inCart}) {
    
    const products = [
        {
          id: 1,
          title: "Standardni planer",
          description:
            "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
          amount: 0,
          price:"1500din"
        },
        {
          id: 2,
          title: "Biznis planer",
          description:
            "Funkcionalnost, preglednost i sveden dizajn spojeni u ovaj rokovnik koji ce biti vas najbolji saradnik u narednih godinu dana. Rokovnik sadrzi kalendar za 2 godine, mesecne i nedeljne planere za 12 meseci i vise od 30 strana za beleske.",
          amount: 0,
          price:"1500din"
        },
        {
          id: 3,
          title: "Planer za vencanje",
          description:
            "Planer za venčanje vas vodi kroz listu obaveza po mesecima informativno, a onda detaljno po sekcijama sa vama prelazi svaki segment, od odabira venčanice, cipela i aksesoara, preko kreiranja spiska gostiju i deljenja pozivnica, odabira prostora za svadbu, kupovine burmi, podele zaduženja, pa sve do najsitnijih detalja.",
          amount: 0,
          price:"1500din"
        },
        {
            id: 4,
            title: "Planer ishrane",
            description:
              "Praktican i lagan planer za sve one koji planiraju obroke unapred, prate poseban rezim ishrane ili jednostavno uzivaju u kuvanju.",
            amount: 0,
            price:"1500din"
          },
          {
            id: 5,
            title: "Studentski planer",
            description:
              "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
            amount: 0,
            price:"1500din"
          },
      ];
    
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={{margin:20, borderStyle:"double", backgroundColor: 'pink', width: '30%',justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', borderRadius: '20px'}}>
      <img src={product.url} alt="image" className="img-product" />
      <div className='card-body'>
        <h3 className='card-title'>
             {product.title}
        </h3>
        <p className='card-text' >
            {product.description}
        </p>
        <p className='card-price' >
            {product.price}
        </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>      
        {inCart === 1 ?( <><button className='btn' onClick={()=>onAdd(product.title, product.id)}>
        <BsCartPlus/>
        </button>
        <button className='btn' onClick={()=>remFromCart(product.title, product.id)}>
          <BsCartDash/>
           </button>
            </> 
            ) : (
              <h4>Amount: {product.amount}</h4>
            ) }</div>
    </div>
  );
}

export default OneProduct
