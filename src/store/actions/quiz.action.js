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

export { addAnsw, remAnsw };