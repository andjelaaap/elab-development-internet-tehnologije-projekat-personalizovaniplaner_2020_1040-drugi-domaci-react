import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { useState } from 'react';
import Cart from './components/Cart';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  const[cartNum, setCartNum] = useState(0);
  const[cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Standardni planer",
      url:"https://www.mininoplaneri.com/pub/catalog/17023084255994_make-it-happen.jpg",
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
  ]);

  function refreshCart(){
  let newProducts = products.filter((prod) => prod.amount > 0);
  setCartProducts(newProducts);
  }

  function addProduct(title, id){
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    //console.log(cartNum);
    products.forEach((prod)=>{
    if(prod.id === id){
      prod.amount++;
    }
    })
    refreshCart();
  }

  function removeProduct(title, id){
    products.forEach((prod)=> {
      if(prod.id === id){
        if(prod.amount > 0){
          prod.amount--;
          setCartNum(cartNum-1);
        }
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
     
        <NavBar cartNum={cartNum}/>
        <Routes>
          <Route path="/" element={<Products products={products} onAdd={addProduct} remFromCart={removeProduct}/>}/>
          <Route path="/cart" element={<Cart products={cartProducts}/>}/>
        </Routes>
       
        
    </BrowserRouter>
  );
}

export default App;
