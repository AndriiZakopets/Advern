import { store } from 'react-notifications-component';

export default (type, message = '') => {
  store.addNotification({
    title: '',
    message,
    type,
    insert: 'top',
    container: 'bottom-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
