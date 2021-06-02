export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item:null,
  //REMOVE after finished developing
  token:"BQB57__HL-igb5zgqBYJyno-65IqFjseVzjoKgdMKy3eA9M-5XomDKVVqmZ7gUPUVRZqhR81ydqCait-zK9AscS6yIY1AXgilzzE4eSJfM2_s_kXQw2Iig3vCGiGaFSJ0rW4KJGUTHRE8zcN9mQMO9brgKlLTIzDpXW1jS67DeSZ6h1cug",
};
// "BQB57__HL-igb5zgqBYJyno-65IqFjseVzjoKgdMKy3eA9M-5XomDKVVqmZ7gUPUVRZqhR81ydqCait-zK9AscS6yIY1AXgilzzE4eSJfM2_s_kXQw2Iig3vCGiGaFSJ0rW4KJGUTHRE8zcN9mQMO9brgKlLTIzDpXW1jS67DeSZ6h1cug"

const reducer = (state, action) => {
  console.log(action);

// Action -> type, [payload]

  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case "SET_TOKEN":
      return{
        ...state,
        token:action.token,
      }

    case 'SET_PLAYLISTS':
    return {
      ...state,
      playlists: action.playlists,
    }
    default:
      return state;
    }

};

export default reducer;