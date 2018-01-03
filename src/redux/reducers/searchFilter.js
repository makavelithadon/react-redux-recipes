export default (
  state = '',
  action
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
      break;
    default:
      return state;
      break;
  }
}
