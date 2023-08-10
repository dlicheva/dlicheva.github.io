async function fetchData(game) {
    let res
    if(game === 'divinity') {
        res = await fetch("/divinity.json", {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    if(game === 'bg') {
        res = await fetch("/bg.json", {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    let recipes = await res.json()
    recipes = recipes.filter((recipe)=> recipe["Ingredient-1"] !=="N/A")
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
