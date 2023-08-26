const canvasContext = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;

const useTextMeasurer = ({ value, family = 'IBM Plex Mono', size = 18 }) => {
  canvasContext.font = `${size}px ${family}`;
  return canvasContext.measureText(value).width;
};

export default useTextMeasurer;