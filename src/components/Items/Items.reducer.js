// Init state
///////////////////////////

const init = {
  expandingTo: '',
  expandingFrom: ''
};


// Actions
///////////////////////////

const actions = {
  expand: function(state, action) {
    if (state.expandingTo === '') {
      return { expandingFrom: '', expandingTo: action.expandingTo };
    }

    return { expandingFrom: state.expandingTo, expandingTo: action.expandingTo };
  },

  collapse: function(state, action) {
    return init;
  }
};


// Reducer
///////////////////////////

function reducer(state = init, action) {
  switch (action.type) {
    case 'EXPAND':
      return actions.expand(state, action);
    case 'COLLAPSE':
      return actions.collapse(state, action);
    default:
      return state;
  }
}


// Export
///////////////////////////

export default reducer;
