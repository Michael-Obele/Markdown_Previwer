export const loadState = () => {
  try {
    const serialState = localStorage.getItem('appState');
    if (serialState === null) {
      return { DarkMode: false };
    }
    return JSON.parse(serialState);
  } catch (err) {
    return { DarkMode: false };
  }
};

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('appState', serialState);
  } catch (err) {
    console.log(err);
  }
};
