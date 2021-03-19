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

    interface ListResultObj {
        id: string;
        name: string;
    }

    const listResult = curcuitName.filter((obj): ListResultObj | boolean => {
        if (obj.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            return obj;
        }
        return false;
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
                    {listResult.map((obj) => {
                        return (
                            <li key={obj.id} onClick={() => setInput(obj.name)}>
                                {obj.name}
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
