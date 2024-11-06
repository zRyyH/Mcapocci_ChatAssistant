import { useState, useEffect } from 'react';
import fetchData from '../services/api_services'

const useFetchData = (msg, mode, func, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (mode === 'ASSISTENT') {
          let result = await fetchData(msg, id)
          if (result) {
            setData(result)
            setLoading(false)
          }
        } else {
          setData(msg)
        }
      } catch (err) {
        setLoading(false)
      } finally {
        setLoading(false)
        func()
      }
    };

    loadData();
  }, [msg, mode, func, id]);

  return { data, loading };
};

export default useFetchData;