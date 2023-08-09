async function fetchData() {
    const res = await fetch("/data.json", {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    });
    const recipes = await res.json()

   // reformat result
    return recipes.map((recipe) => {

        // assign ingredients to array
        let ingredients = [recipe['Ingredient-1'],recipe['Ingredient-2'], recipe['Ingredient-3'], recipe['Ingredient-4'], recipe['Ingredient-5']]
        ingredients = ingredients.filter(ingredient => ingredient !== "")
        return {
                result: recipe['Result'],
                description: recipe['Description'],
                ingredients: ingredients
            }
    })
}
export default fetchData
