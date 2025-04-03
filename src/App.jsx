import { useEffect, useState } from 'react'

function App() {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const api = import.meta.env.VITE_API_BASE_URL

    fetch(`${api}/api/`)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => setResult('❌ Failed to fetch'))


  }, [])

  return (
    <div>
      <h1>API Test</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}

export default App