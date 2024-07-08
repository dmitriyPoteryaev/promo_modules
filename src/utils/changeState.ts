export const changeState = (name, checked, value, stateObj) => {
  if (!checked) {
    const newObj = Object.keys(stateObj)
      .filter((specificKey) => specificKey !== name)
      .reduce((newObj, key) => {
        newObj[key] = stateObj[key];
        return newObj;
      }, {});

    return newObj;
  }

  return { ...stateObj, [name]: { value: value, checked: checked } };
};
