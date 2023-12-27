import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
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

  return (
    <div className="App">
     
        <NavBar/>
        <Products products={products}/>
        
    </div>
  );
}

export default App;
