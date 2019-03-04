export const initFlatPickr = (element, options = {}) => {
  let flatPicker;
  const windowMouseWheelHandler = e => flatPicker.changeMonth(e.wheelDeltaY > 0 ? -1 : 1);
  const keydownHandler = ({ keyCode }) => {
    if (keyCode === 32) {
      flatPicker.changeMonth(new Date().getMonth(), false);
    }
  };
  const combineOptions = Object.assign({}, {
    onOpen() {
      window.addEventListener('mousewheel', windowMouseWheelHandler);
      document.addEventListener('keydown', keydownHandler);
    },
    onClose() {
      window.removeEventListener('mousewheel', windowMouseWheelHandler);
      document.removeEventListener('keydown', keydownHandler);
    },
  }, options);
  flatPicker = flatpickr(element, combineOptions);
  return flatPicker;
};
