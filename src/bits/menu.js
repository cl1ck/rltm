import { createContainer } from 'redux-bits';

export const name = 'menu';

export const state = {
  isOpen: false,
};

export const actions = {
  toggleMenu: null,
  hideMenu: null,
  showMenu: null,
};

export const reducers = {
  toggleMenu: (draft) => {
    draft.isOpen = !draft.isOpen;
  },
  hideMenu: (draft) => {
    draft.isOpen = false;
  },
  showMenu: (draft) => {
    draft.isOpen = true;
  },
};

export default createContainer(name, actions);
