import React from 'react'
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { useRef } from 'react';

export const Ide = () => {

    const editorRef =useRef(null);

    const mount=(editor)=>{
        editorRef.current=editor;
    }

    const getCode=()=>{
        const code =editorRef.current.getValue();
        console.log('Code is ',code);
    }


    const skeletonCode=`
    class Solution{
        public int show(int x,int y){
            return x + y;
        }
    }`
  return (
    <>
    <Editor
     onMount ={mount}
     height="70vh"
     defaultLanguage="java"
     defaultValue={skeletonCode}
        
      />
     <Button onClick={getCode} variant="contained">Submit</Button> 
    </>
  )
}
