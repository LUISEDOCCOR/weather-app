import React, { useEffect } from "react";
import { useState } from "react";
//Font
import "@fontsource-variable/onest"; 
//Components
import Searcher from "./components/Searcher";
import CurrentWeather from "./components/currentWeather";
//API
import { getLocation } from "./API/api";

function App() {

  const [Location, setLocation] = useState([])
  const [searchValue, setSearchValue] = useState ('')
  const [isDark, setDark] = useState(true)

  useEffect(() => {
    if(isDark){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  },[isDark])


  const handleKeyPressSearch = async (e) => {
    if(e.key == 'Enter'){
        setLocation(await getLocation(searchValue))
        setSearchValue('')
    }
  }

  useEffect(()=> {
    const fetchData = async () => {
      if(localStorage.getItem('city')){
        const city = localStorage.getItem('city')
        setLocation(await getLocation(city))
      }
    }
    fetchData()
  },[])

  return (
    <div data-theme="dark" className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-white text-zinc-200 min-h-screen min-w-screen">
        <header className="mx-auto py-12 lg:max-w-7xl lg:px-0 md:px-12">
          <nav className="flex md:flex-row md:justify-between md:items-center flex-col items-center">
            <h1 className="font-semibold text-4xl md:block hidden">Weather App</h1>
            <div className="flex items-end gap-2">
              <Searcher 
                setValue={setSearchValue} 
                handleKeyPress={handleKeyPressSearch} 
                searchValue={searchValue}
              />
              <button onClick={() => {setDark(!isDark)}} className="dark:bg-slate-500 dark:hover:bg-slate-400 hover:bg-purple-300 bg-purple-400 transition-colors p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="flex justify-center mt-16 md:mt-32">
          <CurrentWeather data={Location}/>
        </main>
    </div>
  )
}

export default App
