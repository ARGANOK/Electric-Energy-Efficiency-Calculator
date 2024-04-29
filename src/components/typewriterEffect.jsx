import React, { useState, useEffect } from 'react';

function TypewriterEffect() {
  const [typedText, setTypedText] = useState('');
  const textToType = "Welcome to SUSTAIN X Energy service";
  let index = 0;
  let typingInterval;

  useEffect(() => {
    function writingText() {
      if (index < textToType.length) {
        const char = textToType.charAt(index);
        const specialCharacters = ['S', 'U', 'T', 'A', 'I', 'N' , 'X'];
        const color = specialCharacters.includes(char) ? 'aquamarine' : 'white';        setTypedText(prevText => (
          <span style={{ color }}>{prevText}{char}</span>
        ));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          index = 0;
          setTypedText('');
          typingInterval = setInterval(writingText, 200);
        }, 2000);
      }
    }
//   const textToType = "WWelcome to Sustain Energy";
//   let index = 0;
//   let typingInterval;

//   useEffect(() => {
//     function writingText() {
//       if (index < textToType.length) {
//         setTypedText(prevText => prevText + textToType.charAt(index));
//         index++;
//       } else {
//         clearInterval(typingInterval); // Clearing the interval
//         setTimeout(function () {
//           index = 0;
//           setTypedText('');
//           typingInterval = setInterval(writingText, 200); // Restarting the typing interval
//         }, 2000);
//       }
//     }

    // Initial call to start typing
    typingInterval = setInterval(writingText, 200);

    // Clean up the interval on component unmount
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-white text-3xl" id="WelcomeNote">
      {typedText}
    </h1>
  );
}

// Usage

export default TypewriterEffect;
