import { useState } from 'react'
import InputBox from './Component/InputBox';
import useCurrancyInfo from './hooks/useCurrancyInfo';

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertAmout,setConvertAmount]=useState(0);

  const currencyinfo=useCurrancyInfo(from);

  const options = Object.keys(currencyinfo);
  console.log(options);
  // This line creates an array of currency codes from the currencyinfo object.
  // The output is an array containing all the currency codes available in the currencyinfo object.
  // For example, if currencyinfo contains data for USD, EUR, and GBP, 
  // options would be ['usd', 'eur', 'gbp'].

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmout);
  }

  const convert=()=>{
    setConvertAmount(amount*currencyinfo[to]);
  }
  

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize:'cover',
    }}  
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount} 
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectedCurrency={from}
                        
                        onAmountChange={(amount)=>setAmount(amount)}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertAmout}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectedCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>  
    </div>
</div>
  )
}

export default App
