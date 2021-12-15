const ADD_MESSAGE = "ADD-MESSAGE";

let defaultState = {
  messagesData: [
    { name: "Me", date: "24 Nov 14:16", message: "It's me. Who it's here?" },
  ],
  friendsData: [
    {
      name: "Pavel Ivanov",
      id: "1",
      photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Alex Vaber",
      id: "2",
      photo: "https://wl-adme.cf.tsp.li/resize/728x/jpg/79e/c49/44a2895f18b7659744e7edf1a5.jpg"
    },
    {
      name: "Igor Rapinskiy",
      id: "3",
      photo: "https://happypik.ru/wp-content/uploads/2019/09/kartinki-sobak-s-nadpisjami13.jpg"
    },
    {
      name: "Olga Tarasova",
      id: "4",
      photo: "https://www.purinaone.ru/dog/sites/default/files/2020-07/zuby-u-sobak-mobile-min_1.jpg"
    }
  ],
};

const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      let newMessage = {
        name: 'Me',
        date: action.date,
        message: action.messageText,
      };
      return {
        ...state,
        messagesData: [newMessage, ...state.messagesData]
      }
    }

    default:
      return state;
  }
};

export const sendMessage = (messageText) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let date = new Date();

  return {
    type: ADD_MESSAGE,
    date: `${ date.getDate() } ${ months[date.getMonth()] } ${ date.getHours() }:${ date.getMinutes() }`,
    messageText
  }
};

export { messagesReducer };