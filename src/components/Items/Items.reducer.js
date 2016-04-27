// Helpers
///////////////////////////

const help = {
  initState: {
    expandingTo: '',
    expandingFrom: ''
  },

  expand: function(state, action) {
    if (state.expandingTo === '') {
      return { expandingFrom: '', expandingTo: action.expandingTo };
    }

    return { expandingFrom: state.expandingTo, expandingTo: action.expandingTo };
  },

  collapse: function(state, action) {
    return this.initState;
  }
};


// Reducer
///////////////////////////

function AppReducer(state = help.initState, action) {
  switch (action.type) {
    case 'EXPAND':
      return help.expand(state, action);
    case 'COLLAPSE':
      return help.collapse(state, action);
    default:
      return state;
  }
}


// Export
///////////////////////////

export default AppReducer;
