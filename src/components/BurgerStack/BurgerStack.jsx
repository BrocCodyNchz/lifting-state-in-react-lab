// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul className="burger-stack">
        {stack.length === 0 ? (
            <li className="empty">No ingredients yet!</li>
        ) : (
            stack.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => removeFromBurger(ingredient.name)}>X</button>
                </li>
            ))
        )}
    </ul>
  );
};

export default BurgerStack;
