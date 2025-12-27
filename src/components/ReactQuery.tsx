import { useState } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Sidebar } from './Sidebar';
import { AlbumList } from './AlbumList';
import { TodoList } from './TodoList';

type Tabs = 'todo' | 'album';

export const ReactQuery = () => {
    const [selectedTab, setSelectedTab] = useState<Tabs>('todo');

    const buttonStyle = {
        padding: '12px',
        fontSize: '16px',
        border: 'none' ,
    }
    const albumButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
        color: selectedTab === 'album' ? 'white' : 'black',
    }

    const todoButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
        color: selectedTab === 'todo' ? 'white' : 'black',
    }

    const onClickTabButton = (tab: Tabs) => {
        setSelectedTab(tab);
    }

    return (
        <div style={{ display: 'flex', padding: '16px' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <button style={todoButtonStyle} onClick={() => { onClickTabButton('todo')}}>Todo</button>
                <button style={albumButtonStyle}onClick={() => { onClickTabButton('album')}}>Album</button>
                <ErrorBoundary fallback={<p>Todo or AlbumListエラーです！</p>}>
                    <Suspense fallback={<p>Todo or AlbumListロード中です！</p>}> 
                    {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}                        
                    </Suspense>
                </ErrorBoundary>             
            </div>

        </div>
    )
}