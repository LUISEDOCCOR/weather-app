import React from "react";
const Searcher = ({handleKeyPress, searchValue, setValue}) => {
    return (
        <div className="flex items-end gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-xl font-semibold" htmlFor="search">Search:</label>
                <input onChange={(e) => {setValue(e.target.value)}} onKeyDown={handleKeyPress} value={searchValue} placeholder="City" className="p-1 rounded text-black focus:outline-none" id="search" type="text" />    
            </div>
            <div className="space-x-2 hidden">
                <label className="text-xl font-semibold" htmlFor="currentLocation">Use current location</label>
                <input id="currentLocation" type="checkbox" />
            </div>
        </div>
    )
}


export default Searcher