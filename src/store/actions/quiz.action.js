const addAnsw = payload => {
  return {
    type: 'ADD_ANSWER',
    payload
  };
};

const remAnsw = payload => {
  return {
    type: 'REM_ANSWER',
    payload
  };
};

const correction = payload => {
  return {
    type: 'CORRECTION',
    payload
  };
};

const changeLoad = payload => {
  return {
    type: 'CHANGE_LOAD',
    payload
  };
};

export { addAnsw, remAnsw, changeLoad, correction };