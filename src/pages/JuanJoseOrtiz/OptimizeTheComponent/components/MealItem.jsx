import { memo } from 'react';

const MealItem = (meal) => {
    return (
        <div style={{ width:280, height:280, margin:8 }}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width:'100%' }} />
            <h3>{meal.strMeal}</h3>
            <a href={meal.strYoutube} target="_blank">Link Youtube</a>
        </div>
    );
};

export default memo(MealItem);
