import React, { useEffect, useState } from 'react'
import {Textarea} from "@heroui/react";


interface ApiResponse {
  translation: string;
}

export default function TranslateSection() {
  const [queryValue, setQueryValue] = useState('利用自然语言处理的力量，我会把中文句子翻译成英文句子来交流')
  const [queryResult, setQueryResult] = useState<string>()
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    <div className="translateSection flex space-x-4 mx-40">
      <textarea className="w-1/2 h-64 bg-[#948979] text-white text-4xl shadow-lg rounded-lg p-8 overflow-auto" value={queryValue} onChange={(e) => setQueryValue(e.target.value)} />
      <div className="w-1/2 h-64 bg-[#DFD0B8] text-black text-4xl shadow-lg rounded-lg p-8 overflow-auto">{queryResult}</div>
    </div>
    )
}