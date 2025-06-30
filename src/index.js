import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import LoadTaskManager from './pages/task-manager/task-manager.jsx';
import LoadUML from './pages/uml/uml-page.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <>
                <LoadTaskManager />
                <LoadUML />
        </>
);

