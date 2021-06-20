import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      let quote = { id: uuid(), content: action.content, author: action.author }
      return { ...state, quotes: [...state.quotes, quote] }
    case 'REMOVE_QUOTE':
      let quotes = state.quotes.filter( quote => quote.id !== action.id )
      return { quotes }
    case 'UPVOTE_QUOTE':
      return 
    case 'DOWNVOTE_QUOTE':
      return 
    default:
      return state
  }
}
