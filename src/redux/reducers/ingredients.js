let ingredientsID = 0;

const ingredient = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const { name, price, allergens } = action;
      return {
        id: ingredientsID++,
        name,
        price,
        allergens
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
    case 'ADD_INGREDIENT':
      return [
        ...state,
        ingredient(undefined, action)
      ]
      break;
    default:
      return state;
      break;
  }
}
