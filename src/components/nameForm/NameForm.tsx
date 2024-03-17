import React, {useState} from 'react';
import {Button, FormItem, Group, Header, SimpleCell} from "@vkontakte/vkui";
import {StyledDiv} from "../catFact/StyletCatFact";
import axios, {CancelTokenSource} from "axios";
import {getAgeFromName} from "../../api";

export const NameForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [showSecondFormItem, setShowSecondFormItem] = useState(false);
    const [currentRequest, setCurrentRequest] = useState<CancelTokenSource | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentRequest) {
            currentRequest.cancel('Запрос отменен пользователем.');
        }
        const source = axios.CancelToken.source();
        setCurrentRequest(source);
        e.preventDefault();
        try {
            setAge(await getAgeFromName(name));
            setShowSecondFormItem(true);

        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    }
    return (
        <StyledDiv>
            <Group id = "groupId" header={<Header mode="primary">Введите имя и получите возраст</Header>}>
                <FormItem top="Введите имя и получите возраст " htmlFor="naed">
                    <input
                           id="name"
                           type="text"
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Введите своё имя"/>
                </FormItem>
                {showSecondFormItem && (
                    <FormItem>
                        Возраст: {age}.
                    </FormItem>
                )}
                <FormItem>
                    <Button type="submit" size="l"  onClick={handleSubmit}>Отправить имя</Button>
                </FormItem>
            </Group>
        </StyledDiv>
    );
};

