
const mealdb = async(id) =>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json();
    return data.meals[0]
}

const page = async ({params}) => {
    
    const {strInstructions,strMeal} = await mealdb(params.id)
    return (
        <div>
            <h1 className="text-center my-2 text-3xl">Food Description : </h1>
            <h1 className="text-lg px-11 font-bold">{strMeal}</h1>
            <h1 className="px-11">{strInstructions}</h1>
        </div>
    );
};

export default page;