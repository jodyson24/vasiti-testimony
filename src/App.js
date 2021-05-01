import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import res from './DataAction'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...res]) 
  }, []);

  return (
    <div className="App">
      <Header />
      <Body data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
