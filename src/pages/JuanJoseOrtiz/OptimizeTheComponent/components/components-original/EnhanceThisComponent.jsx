import { useEffect, useState }          from 'react';

const EnhanceThisComponent = () => {
    const [      meals, setMeals]       = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const getRecipeResults = async () => {
            try {
                const result = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
                const data   = await result.json();
                setMeals(data.meals);
            } catch(error) {
                console.log(error);
            }
        };
        getRecipeResults();
    });

    console.log(meals);

    return (
        <div style={{ width:'100%' }}>
            <h2>Enhance this component</h2>
            <div style={{ display:'flex', alignItems:'flex-start' }}>
                <input type="text" value={searchValue} onChange={({ target:{value} }) => setSearchValue(value)} style={{ width:250, padding:'10px', marginBottom:'10px' }} />
                <button type="button" style={{ marginLeft:8 }} onClick={async () => {
                    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
                    const data   = await result.json();
                    setMeals(data?.meals);
                }}>Search</button>
            </div>

            <div style={{ display:'flex', flexWrap:'wrap' }}>
                {meals?.map((meal, index) => {
                    <div key={index} style={{ width:280, height:280, margin:8 }}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width:'100%' }} />
                        <h3>{meal.strMeal}</h3>
                        <a href={meal.strYoutube} target="_blank">Link Youtube</a>
                    </div>
                })}
            </div>
        </div>
    );
};

export default EnhanceThisComponent;
