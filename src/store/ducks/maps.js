/**
 * TYPES
 */

export const Types = {
  CHANGE_VIEWPORT: 'maps/CHANGE_VIEWPORT',
  GET_POSITION: 'maps/GET_POSITION',
};

const INITIAL_STATE = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -22.9023516,
    longitude: -43.1824722,
    zoom: 14,
  },
};

/**
 * REDUCERS
 */

export default function maps(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_VIEWPORT:
      return { ...state.viewport, viewport: action.payload.viewport };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  changeViewport: viewport => ({
    type: Types.CHANGE_VIEWPORT,
    payload: { viewport },
  }),
  getPosition: position => ({
    type: Types.GET_POSITION,
    payload: { position },
  }),
};
