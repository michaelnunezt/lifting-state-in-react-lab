
// src/components/IngredientList.jsx

const IngredientList = ({ addToBurger, availableIngredients }) => {
  
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li 
        key={index} 
        style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
