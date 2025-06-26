import React, { useEffect, useState } from 'react'
import {Textarea} from "@heroui/react";

interface ApiResponse {
  translation: string;
}

function index() {
  const [queryValue, setQueryValue] = useState('输入一个普通话句子，我会使用自然语言处理将其翻译成英文')
  const [queryResult, setQueryResult] = useState<string>('Input a sentence in Mandarin for me to translate to English using natural language processing!')
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  useEffect(() => {
    const fetchQueryResult = async() => {
      if (queryValue.trim() === '') {
        setQueryResult('Input a sentence in Mandarin for me to translate to English using natural language processing!');
        return;
      }
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8080/api/translate?text=${queryValue}`);
        if (!response.ok) {
          throw new Error(`Client error: status ${response.status}`)
        }
        const result: ApiResponse = await response.json();
        setQueryResult(result?.translation || 'No translation found.')

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
      const timeout = setTimeout(() => {
      fetchQueryResult();
    }, 500); // debounce api calls by 500ms

    return () => clearTimeout(timeout)
  }, [queryValue]); // re-run whenever query value changes

  

  return (
    <div className="bg-background text-foreground">
      <div className="flex space-x-4 justify-center items-center h-screen">
        <Textarea value={queryValue} onChange={handleQueryChange} className="max-w-md" label="Description" placeholder="Enter your description" />;
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {queryResult && <p>Translation: {queryResult}</p>}
      </div>
      
    </div>
  )
}

export default index