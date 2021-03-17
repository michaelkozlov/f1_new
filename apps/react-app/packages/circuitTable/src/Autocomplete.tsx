import React, { useState } from 'react';
import './autocomplete.css';

export interface AutoCompleteProps {
    curcuitName: Array<{ id: string; name: string }>;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({ curcuitName }) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const setInput = (nameRace: string) => {
        setSearch(nameRace);
        setDisplay(false);
    };

    const listResult: string[] = curcuitName.filter((name) => {
        return name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={search}
                placeholder="Type"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onFocus={() => setDisplay(!display)}
            />
            {display && listResult.length > 0 && (
                <ul className="autocomplete__list">
                    {listResult.map((name: string, index: number) => {
                        return (
                            // eslint-disable-next-line no-plusplus
                            <li key={index} onClick={() => setInput(name)}>
                                {name}
                            </li>
                        );
                    })}
                </ul>
            )}
            {display && listResult.length === 0 && (
                <ul className="autocomplete__list">
                    <li>Упс</li>
                </ul>
            )}
        </div>
    );
};
