import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
