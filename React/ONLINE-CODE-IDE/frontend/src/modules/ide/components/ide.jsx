import Editor from '@monaco-editor/react';
import { Toolbar} from '@mui/material'

import React from 'react'

const ide = () => {
  return (
    <>
    <Toolbar sx={{height:40}}/>
    <Editor height="90vh" defaultLanguage="javascript" defaultValue="//Write Your Code here..." />;
    </>
  )
}

export default ide