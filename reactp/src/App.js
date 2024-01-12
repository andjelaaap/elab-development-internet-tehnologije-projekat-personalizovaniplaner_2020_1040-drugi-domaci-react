import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { useState } from 'react';
import Cart from './components/Cart';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Meni from './components/Meni';

function App() {
  const[cartNum, setCartNum] = useState(0);
  const[cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Standardni planer",
      url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/S34ne_1024x1024@2x.jpg?v=1603194973",
      description:
        "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
      amount: 0,
      price:"1500din"
    },
    {
      id: 2,
      title: "Biznis planer",
      url:"https://moj-rokovnik.myshopify.com/cdn/shop/files/standardni32ne_d67d6012-e279-49ee-b371-152535b6cfab_1024x1024@2x.jpg?v=1699527723",
      description:
        "Funkcionalnost, preglednost i sveden dizajn spojeni u ovaj rokovnik koji ce biti vas najbolji saradnik u narednih godinu dana. Rokovnik sadrzi kalendar za 2 godine.",
      amount: 0,
      price:"2000din"
    },
    {
      id: 3,
      title: "Planer za vencanje",
      url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/vencanje3da_1024x1024@2x.jpg?v=1541440724",
      description:
        "Planer za venčanje vas vodi kroz listu obaveza po mesecima informativno, a onda detaljno po sekcijama sa vama prelazi svaki segment sve do najsitnijih detalja.",
      amount: 0,
      price:"1700din"
    },
    {
        id: 4,
        title: "Planer ishrane",
        url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/planer-obroka7n_1024x1024@2x.jpg?v=1652436107",
        description:
          "Praktican i lagan planer za sve one koji planiraju obroke unapred, prate poseban rezim ishrane ili jednostavno uzivaju u kuvanju. Uz njega ce organizovanje obroka biti zanimljivo.",
        amount: 0,
        price:"1500din"
      },
      {
        id: 5,
        title: "Studentski planer",
        url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski16ne_900x.jpg?v=1660557467",
        description:
          "Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.",
        amount: 0,
        price:"1500din"
      },
      {
        id: 6,
        title: "Mini planer",
        url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski9ne_360x.jpg?v=1652448383",
        description:
          "Praktičan i lagan rokovnik koji staje u svaku torbu. Sa kalendarom, stranama za određivanje najvažnijih ciljeva i obaveza i dovoljno mesta za beleške.",
        amount: 0,
        price:"1500din"
      },
      {
        id: 7,
        title: "Planer za putovanja",
        url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/planer-putovanje2-n_360x.jpg?v=1652433318",
        description:
          "Planer za zaljubljenike u putovanja. Za lakse i efikasnije planiranje putovanja. Uz njega nijedna sitnica nece biti zaboravljena i preostaje Vam samo da uzivate.",
        amount: 0,
        price:"1500din"
      },
      {
        id: 8,
        title: "Goal-getter planer",
        url:"https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski15ne_360x.jpg?v=1660557343",
        description:
          "Planer za one kojima je potrebno više strukture i motivacije za organizaciju vremena i ostvarivanje ciljeva. Ako često ne uradiš ono što je najvažnije, ovaj planer će ti pomoći da odrediš prioritete.",
        amount: 0,
        price:"1500din"
      }
  ]);

  function refreshCart(){
  let newProducts = products.filter((prod) => prod.amount > 0);
  setCartProducts(newProducts);
  }

  function addProduct(title, id){
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
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
        <Route
          path="/products"
          element={
            <>
              <Products
                products={products}
                onAdd={addProduct}
                remFromCart={removeProduct}
              />
            </>
          }
        />
          <Route path="/" element={<Meni cartNum={cartNum}/>}/>
          <Route path="/cart" element={
          <>
          <Cart products={cartProducts}/>
          </>
          }
          />
        </Routes>
       
      
    </BrowserRouter>
  );
}

export default App;
