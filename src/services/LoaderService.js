let _loader;

const setLoaderInstance = loaderRef => {
  _loader = loaderRef;
};

const show = () => {
  _loader.open();
};

const hide = () => {
  _loader.close();
};

export default {
  setLoaderInstance,
  show,
  hide,
};
