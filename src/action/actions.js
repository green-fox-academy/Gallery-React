export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const SELECT = 'SELECT';

export function doLeft(index) {
  return {
    type: LEFT,
    payload: { index },
  };
}

export function doRight(index) {
  return {
    type: RIGHT,
    payload: { index },
  };
}

export function doSelect(index) {
  return {
    type: SELECT,
    payload: { index },
  };
}
