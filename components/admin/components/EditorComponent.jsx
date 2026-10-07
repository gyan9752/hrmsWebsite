import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { styled } from "@mui/material";

const EditorComponent = ({ name, onChange, value }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: List,
        },
        data: value,
        onChange: async () => {
          const savedData = await editorRef.current.save();
          onChange(name, savedData); // Pass to Formik
        },
      });
    }

    return () => {
      if (editorRef.current?.destroy) editorRef.current.destroy();
      editorRef.current = null;
    };
  }, []);

  return <InputField id="editorjs"  />;
};

export default EditorComponent;


const InputField = styled("div")`
  height: 360px;
  border-radius: 12px;
  border: 1px solid black;
  padding-left: 23px;
  font: 600 14px Montserrat;
  color: rgb(140, 130, 130);

  &:focus {
    outline: none;
  }
`;