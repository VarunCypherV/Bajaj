// 'use client'
// import { useState } from 'react';
// import Head from 'next/head';
// export default function Home() {
//   const [jsonInput, setJsonInput] = useState('');
//   const [responseData, setResponseData] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [error, setError] = useState(null);

//   const handleJsonInputChange = (e) => {
//     setJsonInput(e.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       const parsedJson = JSON.parse(jsonInput);
      
//       if (!parsedJson.data) {
//         throw new Error("Invalid JSON: Missing 'data' field.");
//       }

//       const response = await fetch('http://localhost:4000/bfhl', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(parsedJson),
//       });

//       const data = await response.json();
//       setResponseData(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setResponseData(null);
//     }
//   };

//   const handleOptionChange = (e) => {
//     const value = e.target.value;
//     setSelectedOptions((prev) =>
//       prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
//     );
//   };

//   const renderResponse = () => {
//     if (!responseData) return null;

//     const { numbers, alphabets, highest_lowercase_alphabet } = responseData;

//     return (
//       <div>
//         <h2>Filtered Response:</h2>
//         {selectedOptions.includes('Numbers') && (
//           <div>
//             <strong>Numbers:</strong> {JSON.stringify(numbers)}
//           </div>
//         )}
//         {selectedOptions.includes('Alphabets') && (
//           <div>
//             <strong>Alphabets:</strong> {JSON.stringify(alphabets)}
//           </div>
//         )}
//         {selectedOptions.includes('Highest lowercase alphabet') && (
//           <div>
//             <strong>Highest Lowercase Alphabet:</strong> {JSON.stringify(highest_lowercase_alphabet)}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Your Roll Number</h1>
//       <textarea
//         rows="5"
//         value={jsonInput}
//         onChange={handleJsonInputChange}
//         placeholder='Enter JSON, e.g. { "data": ["A", "B", "c", "1"] }'
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
      
//       {responseData && (
//         <>
//           <label>Select options to display:</label>
//           <select multiple={true} value={selectedOptions} onChange={handleOptionChange}>
//             <option value="Alphabets">Alphabets</option>
//             <option value="Numbers">Numbers</option>
//             <option value="Highest lowercase alphabet">Highest Lowercase Alphabet</option>
//           </select>
//           {renderResponse()}
//         </>
//       )}
//     </div>
//   );
// }

'use client'
import { useState } from 'react';
import Head from 'next/head';
export default function Home() {
  const [jsonInput, setJsonInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);

  const handleJsonInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      
      if (!parsedJson.data) {
        throw new Error("Invalid JSON: Missing 'data' field.");
      }

      const response = await fetch('http://localhost:4000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedJson),
      });

      const data = await response.json();
      setResponseData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponseData(null);
    }
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
  };

  const renderResponse = () => {
    if (!responseData) return null;

    const { numbers, alphabets, highest_lowercase_alphabet } = responseData;

    return (
      <div style={{ color: 'black' }}>
        <h2>Filtered Response:</h2>
        {selectedOptions.includes('Numbers') && (
          <div>
            <strong>Numbers:</strong> {JSON.stringify(numbers)}
          </div>
        )}
        {selectedOptions.includes('Alphabets') && (
          <div>
            <strong>Alphabets:</strong> {JSON.stringify(alphabets)}
          </div>
        )}
        {selectedOptions.includes('Highest lowercase alphabet') && (
          <div>
            <strong>Highest Lowercase Alphabet:</strong> {JSON.stringify(highest_lowercase_alphabet)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Your Roll Number</h1>
      <textarea
        rows="5"
        value={jsonInput}
        onChange={handleJsonInputChange}
        placeholder='Enter JSON, e.g. { "data": ["A", "B", "c", "1"] }'
        style={{
          width: '100%',
          borderColor: 'darkblue',
          color: 'black',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '16px',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          borderColor: 'darkblue',
          backgroundColor: 'darkblue',
          color: 'white',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        Submit
      </button>
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      
      {responseData && (
        <>
          <label>Select options to display:</label>
          <select
            multiple={true}
            value={selectedOptions}
            onChange={handleOptionChange}
            style={{
              width: '100%',
              borderColor: 'darkblue',
              color: 'black',
              padding: '10px',
              marginBottom: '20px',
              fontSize: '16px',
            }}
          >
            <option value="Alphabets">Alphabets</option>
            <option value="Numbers">Numbers</option>
            <option value="Highest lowercase alphabet">Highest Lowercase Alphabet</option>
          </select>
          {renderResponse()}
        </>
      )}
    </div>
  );
}
