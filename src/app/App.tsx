import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
    AdaptivityProvider,
    ConfigProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell, usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {CatFactGroup} from "../components/catFact/CatFactGroup";
import {NameForm} from "../components/nameForm/NameForm";

export const App = () => {
    const platform = usePlatform();

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>Тестовое задание. Коковихина Марина.</PanelHeader>
                            <CatFactGroup/>
                            <NameForm/>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>,
);
