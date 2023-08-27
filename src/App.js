import { useState } from 'react';
import './App.css'
import InputField from './component/InputField';
import Button from './component/Button';
import Title from './component/Title';

function App() {

  const [Value, setValue] = useState(0)

  function Increment()
  {
    setValue((prevValue)=>
    {
      return prevValue+=1;
    })
  }

   function Decrement()
   {
      setValue((prevValue)=>
      {
        if(prevValue!==0)
        {
          return prevValue-=1;
        }
        else
        {
          return prevValue;
        }
      })
   }

  return (
    <div className="App">
      <Title />
      <div className="container">
        <InputField text={Value} />
        <Button onadd={Increment} onsub={Decrement} />
      </div>
    </div>
  );
}

export default App;