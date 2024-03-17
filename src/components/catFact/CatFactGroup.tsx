import React, { useEffect, useRef, useState} from 'react';
import {Button, FormItem, Group, Header} from "@vkontakte/vkui";
import {moveCursorToSecondWord} from "../../lib/moveCursor";
import {getCatFact, findEndOfFirstWord} from "../../api";
import {StyledDiv} from "./StyletCatFact";

export const CatFactGroup: React.FC =  () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const showTextAndMoveCursor = async () => {
        try {
            const text = await getCatFact();
            setCatFact(text);
            if (inputRef.current) {
                const index = findEndOfFirstWord(text)
                inputRef.current.focus();
                inputRef.current.setSelectionRange(index, index);
            }
        } catch (error) {
            console.error('Ошибка при получении данных из API: ', error);
        }
    };
    const [catFact, setCatFact] = useState('');
    return (
        <StyledDiv>
            <Group padding={"m"} header={<Header mode="primary">Факты про котиков</Header>}>
                <FormItem top="Факт" htmlFor="answer">
                    <input ref={inputRef}
                           id="factOfCat"
                           type="text"
                           value={catFact}
                           onInput={moveCursorToSecondWord}
                           placeholder="Тут будет факт про котов"/>
                </FormItem>
                <FormItem>
                    <Button type="submit" size="l" onClick={showTextAndMoveCursor}>Получить факт</Button>
                </FormItem>
            </Group>
        </StyledDiv>
    );
};

