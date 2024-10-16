// `src/components/BurgerStack.jsx`

import Ingredient from "./Ingredient";

const BurgerStack = ( {stack, removeFromBurger} ) => {

  
  return (
  <ul>
    {stack && stack.length > 0 ? (
           stack.map((ingredient,index) => (
            <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(ingredient)}
            buttonLabel="X"
            />
    ) )): ( 
      <p>No Ingredients</p>
      )
    }
  </ul>
  );
};

export default BurgerStack;
