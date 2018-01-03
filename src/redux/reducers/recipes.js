let recipesID = 0;

const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
    const { name, ingredients, recipes, steps } = action;
      return {
        id: recipesID++,
        name,
        ingredients,
        recipes,
        steps
      }
      break;
    default:
      return state;
      break;
  }
}

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ]
      break;
    default:
      return state;
      break;
  }
}
