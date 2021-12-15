import { profileReducer } from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";

let store = {
  _state: {
    messagesPage: {
      messagesData: [
        { name: "Me", date: "23 Nov 9:37", message: "Who it's here?" },
        { name: "Me", date: "24 Nov 14:16", message: "It's me" },
      ],
      newMessageText: "",
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
    },
    profilePage: {
      postData: [
        { name: "Pavel", message: "Hi, my name's Pavel" },
        { name: "Oleg", message: "Nice to meet you!" }
      ],
      newPostText: ""
    }
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

      this._callSubscriber(store._state);
  }
};


export { store };