export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      state.push(action.quote)
      return state;
    case 'REMOVE_QUOTE':
      const indexToRemove = state.findIndex(painting => painting.id === action.quoteId)
      return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes +1}
        } else {
          return quote
        }
      });
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          if (quote.votes > 0) {
            return {...quote, votes: quote.votes -1}
          } else {
            return {...quote, votes: 0}
          }
        } else {
          return quote
        }
      });
    default:
      return state;
  }
}
