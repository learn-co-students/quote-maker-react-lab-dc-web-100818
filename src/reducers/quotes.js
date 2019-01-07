function quotesReducer(state = [], action){
  let idx;
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, {
        content: action.quote.content,
        author: action.quote.author,
        id: action.quote.id,
        votes: action.quote.votes
      }];
    case 'REMOVE_QUOTE':
      const quote = state.find(q => q.id === action.quoteId)
      idx = state.indexOf(quote);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':
      const upvotedQuote = state.find(q => q.id === action.quoteId)
      upvotedQuote.votes = upvotedQuote.votes + 1
      return [...state]
    case 'DOWNVOTE_QUOTE':
      const downvotedQuote = state.find(q => q.id === action.quoteId)
      if (downvotedQuote.votes === 0){
        return state
      } else {
        downvotedQuote.votes = downvotedQuote.votes - 1
        return [...state]}
    default:
      return state

  }
}

export default quotesReducer;
