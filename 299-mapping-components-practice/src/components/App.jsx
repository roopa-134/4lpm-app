import React, { useState, useEffect, useRef } from 'react';
import "./styles.css";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(null);
  const previousPosition = useRef({ x: 0, y: 0 });

  
  const images = ["public/img1.png","public/img2.png","public/img3.png","public/img4.png","public/img5.png","public/img6.png","public/img8.png","public/img7.png","public/img9.png","public/img10.png","public/img11.png"
    ,"public/img12.png","public/img13.png","public/img14.png","public/img15.png","public/img16.png","public/img17.png","public/img18.png","public/img19.png","public/img20.png","public/img21.png","public/img22.png","public/img23.png","public/img24.png","public/img25.png",
  "public/img26.png","public/img27.png"];

    useEffect(() => {
    
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, []);
  
    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
  
      setCursorPosition({ x: newX, y: newY });
  

      const deltaX = newX - previousPosition.current.x;
      const deltaY = newY - previousPosition.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const threshold = 50;
  
      if (distance > threshold) {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        previousPosition.current = { x: newX, y: newY }; 
      }
  };

  return (
    <div className="app" onMouseMove={handleMouseMove}>
    <h1 className="center-text">Life at 4LPM</h1>

    {currentImage && (
      <img
        src={currentImage}
        alt="cursor-follow"
        className="cursor-image"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
    )}
  </div>
  );
}

export default App;
