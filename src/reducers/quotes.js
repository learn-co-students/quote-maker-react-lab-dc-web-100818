export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(q => action.quoteId !== q.id)
    case 'UPVOTE_QUOTE':
      return state.map(q => {
        if(q.id === action.quoteId){
          return {...q, votes: q.votes + 1}
        } else {
            return q
        }
      })
    case 'DOWNVOTE_QUOTE':
    return state.map(q => {
      if(q.id === action.quoteId && q.votes > 0){
        return {...q, votes: q.votes - 1}
      } else {
          return q
      }
    })
    default:
      return state;
  }
}
