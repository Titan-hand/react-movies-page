const bgColorDetect = (props) => {
  return props.bgColor
    ? {
        backgroundColor: props.bgColor,
      }
    : {};
};

export default bgColorDetect;
