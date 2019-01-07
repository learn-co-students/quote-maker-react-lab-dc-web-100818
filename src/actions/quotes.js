// TODO: Create action creators as defined in tests
const ADD_QUOTE = 'ADD_QUOTE'
const REMOVE_QUOTE = 'REMOVE_QUOTE'
const UPVOTE_QUOTE = 'UPVOTE_QUOTE'
const DOWNVOTE_QUOTE = 'DOWNVOTE_QUOTE'

const addQuote = quote => ({type: ADD_QUOTE, quote})
const removeQuote = quoteId => ({type: REMOVE_QUOTE, quoteId})
const upvoteQuote = quoteId => ({type: UPVOTE_QUOTE, quoteId})
const downvoteQuote = quoteId => ({type: DOWNVOTE_QUOTE, quoteId})

export { addQuote, removeQuote, upvoteQuote, downvoteQuote };
