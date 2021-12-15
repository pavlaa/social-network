import React from "react";
import facebook  from '../img/icon/fb.png';
import vk from '../img/icon/vk.png';
import twitter from '../img/icon/twitter.png';
import instagram from '../img/icon/insta.png';
import youtube from '../img/icon/youtube.png';
import github from '../img/icon/github.png';
import website from '../img/icon/website.png';

export const contactsLinkHelper = (propsContacts, nameContact) => {
  if (propsContacts) {
    if (nameContact === 'facebook') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ facebook } alt={ nameContact }/></a>
    } else if (nameContact === 'vk') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ vk } alt={ nameContact }/></a>
    } else if (nameContact === 'twitter') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ twitter } alt={ nameContact }/></a>
    } else if (nameContact === 'instagram') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ instagram } alt={ nameContact }/></a>
    } else if (nameContact === 'youtube') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ youtube } alt={ nameContact }/></a>
    } else if (nameContact === 'github') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ github } alt={ nameContact }/></a>
    } else if (nameContact === 'website') {
      return <a href={ propsContacts } target='_blank' rel="noreferrer" ><img src={ website } alt={ nameContact }/></a>
    }
  }
};