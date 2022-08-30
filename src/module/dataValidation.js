const verifyObject = (list) => {
  for (let i = 0; i < list.length; i += 1) {
    if (!('index' in list[i]
   && 'completed' in list[i]
   && 'description' in list[i])) {
      return false;
    }
  }
  return true;
};

export default verifyObject;