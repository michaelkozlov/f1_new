import React, { useState } from 'react';
import './autocomplete.css';

export const AutoComplete: React.FC<{ curcuitName: string[] }> = (props) => {
   const options = [...props.curcuitName];
   const [display, setDisplay] = useState<boolean>(false);
   const [search, setSearch] = useState<string>('');
   const [empty, setEmpty] = useState<boolean>(false);

   const setInput = (nameRace: string) => {
      setSearch(nameRace);
      setDisplay(false);
   };

   const filter = (value: string) => {
      setSearch(value);
      if (
         options.filter((name) => {
            return name.toLowerCase().indexOf(search.toLowerCase()) > -1;
         })
      ) {
         setEmpty(true);
      }
   };

   return (
      <div className="autocomplete">
         <input
            type="text"
            value={search}
            placeholder="Type"
            onChange={(e) => filter(e.target.value)}
            onFocus={() => setDisplay(!display)}
         />
         {display && !empty && (
            <ul className="autocomplete__list">
               {options
                  .filter((name) => {
                     return name.toLowerCase().indexOf(search.toLowerCase()) > -1;
                  })
                  .map((name: string) => {
                     return <li onClick={() => setInput(name)}>{name}</li>;
                  })}
            </ul>
         )}
      </div>
   );
};
