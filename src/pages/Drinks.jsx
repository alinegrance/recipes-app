import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import RecipeCard from '../components/Recipes';

function Drinks() {
  const { data } = useContext(AppContext);
  const MAX_SIZE = 12;
  const renderData = data.length > MAX_SIZE ? data.slice(0, MAX_SIZE) : data;

  return (
    <div>
      <Header title="Drinks" />
      {data.length > 1 && renderData
        .map((drink, index) => (<RecipeCard
          index={ index }
          key={ drink.idDrink }
          name={ drink.strDrink }
          src={ drink.strDrinkThumb }
        />))}
      <Footer />
    </div>
  );
}

export default Drinks;
