import uuid from "uuid";

export default (state = [], action) => {
const id = uuid();

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      let index = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case "UPVOTE_QUOTE":
      return state.map(q => {
        if (q.id === action.quoteId) {
          return {
            ...q,
            votes: q.votes + 1
          };
        } else {
          return q;
        }
      });
    case "DOWNVOTE_QUOTE":
      return state.map (q => {
        if (q.id === action.quoteId) {
          if (q.votes > 0 ) {
            return {...q, votes: q.votes - 1};
          } else {
            return {...q, votes: 0};
          }
      } else {
        return q;
        }
      });

   default:
    return state

  }
}
