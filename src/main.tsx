import ReactDOM from 'react-dom/client';
import React from 'react';
import TestComp from './TestComp';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <TestComp />
    </React.StrictMode>
);
