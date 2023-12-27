import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

function OneProduct({product, onAdd}) {
    
    const products = [
        {
          id: 1,
          title: "Standardni planer",
          description:
            "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
          amount: 0,
        },
        {
          id: 2,
          title: "Biznis planer",
          description:
            "Funkcionalnost, preglednost i sveden dizajn spojeni u ovaj rokovnik koji ce biti vas najbolji saradnik u narednih godinu dana. Rokovnik sadrzi kalendar za 2 godine, mesecne i nedeljne planere za 12 meseci i vise od 30 strana za beleske.",
          amount: 0,
        },
        {
          id: 3,
          title: "Planer za vencanje",
          description:
            "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
          amount: 0,
        },
        {
            id: 4,
            title: "Planer ishrane",
            description:
              "Praktican i lagan planer za sve one koji planiraju obroke unapred, prate poseban rezim ishrane ili jednostavno uzivaju u kuvanju.",
            amount: 0,
          },
          {
            id: 5,
            title: "Studentski planer",
            description:
              "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
            amount: 0,
          },
      ];

    //   function onAdd(title){
    //   console.log("Dodat proizvod:" + title);
    //   }
    
  return (
    <div className='card' style={{margin:20, borderStyle:"double"}}>
      <img src="https:/picsum.photos/200" alt="Neka slika" />
      <div className='card-body'>
        <h3 className='card-title'>
             {product.title}
        </h3>
        <p className='card-text' >
            {product.description}
        </p>
      </div>
      <button className='btn' onClick={()=>onAdd(product.title)}><BsCartPlus/></button>
      <button className='btn'><BsCartDash/></button>
    </div>
  )
}

export default OneProduct
