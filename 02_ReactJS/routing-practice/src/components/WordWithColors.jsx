const WordWithColors = ({ word, color, bgColor }) => {
    const style = {
      color: color,
      backgroundColor: bgColor,
    };
  
    return <h1 style={style}>The word is: {word}</h1>;
  };
  
  export default WordWithColors;