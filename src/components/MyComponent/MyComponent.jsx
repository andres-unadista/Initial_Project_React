import React, { useState } from 'react';

export default function MyComponent() {
  const [text, setText] = useState('');
  const [textSaved, setSaved] = useState('');
  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const textOnSave = () => {
    setSaved(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={textOnSave}>Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto actualizado: {textSaved}</p>
    </div>
  );
}
