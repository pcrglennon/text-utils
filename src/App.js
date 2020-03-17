import React, { useState } from 'react';

function App() {
  const [crossTextInput, setCrossTextInput] = useState('');
  const [crossTextOutput, setCrossTextOutput] = useState('');

  function handleCrossTextInputChange(e) {
    const inputText = e.target.value;
    setCrossTextInput(inputText);
    setCrossTextOutput(crossText(inputText));
  }

  function crossText(inputText) {
    const uppercasedCharacters = inputText.toUpperCase().split('');
    let transformedText = '';

    // horizontal axis
    transformedText = uppercasedCharacters.join(' ');

    // vertical axis
    for (const char of uppercasedCharacters.slice(1)) {
      transformedText += `\n${char}`;
    }

    return transformedText;
  }

  return (
    <div className="container mx-auto">
      <h1 className="mt-4">Text utils</h1>

      <div className="border border-black mt-6 p-4">
        <h3>Cross text</h3>

        <div className="flex">
          <div className="w-1/2">
            <h5>Input:</h5>

            <input
              type="text"
              value={crossTextInput}
              onChange={e => handleCrossTextInputChange(e)}
              className="border border-black p-2 w-1/2"
            />
          </div>

          <div className="w-1/2">
            <h5>Output:</h5>

            <div className="bg-gray-300 p-2">
              <p className="whitespace-pre-wrap">{crossTextOutput}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
