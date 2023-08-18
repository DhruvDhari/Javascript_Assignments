import React from 'react'
import Editor from '@monaco-editor/react';

export const Ide = () => {

    const skeletonCode=`
    class Solution{
        public int show(int x,int y){
            return x + y;
        }
    }`
  return (
    <>
    <Editor
        height="70vh"
        defaultLanguage="java"
        defaultValue={skeletonCode}
        
      />
    </>
  )
}
