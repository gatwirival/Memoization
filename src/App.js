import React, { useState, useMemo } from 'react';

const MemoizationApp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Expensive computation using count and text values
  const expensiveComputation = (count, text) => {
    console.log('Running expensive computation...');
    let result = '';
    for (let i = 0; i < count; i++) {
      result += text + ' ';
    }
    return result;
  };

  // Memoized result of expensive computation
  const memoizedResult = useMemo(() => expensiveComputation(count, text), [
    count,
    text,
  ]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Text: {text}</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <h2>Memoized Result:</h2>
      <p>{memoizedResult}</p>
    </div>
  );
};

export default MemoizationApp;
