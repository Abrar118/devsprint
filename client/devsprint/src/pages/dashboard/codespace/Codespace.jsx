import React, { useState, useRef } from "react";
import "./Codespace.css";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import { Doc } from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";

const Codespace = () => {
  const editorRef = useRef(null);
  const user = JSON.parse(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  ).email;

  const handleMount = (editor, monaco) => {
    editorRef.current = editor;

    const document = new Doc();
    const provider = new WebrtcProvider("code-room", document, {
      signaling: [import.meta.env.VITE_SIGNALING_SERVER],
    });
    const type = document.getText("monaco");
    const yBinding = new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="editor-container"
    >
      <Editor
        height={"100%"}
        width={"100%"}
        defaultLanguage="javascript"
        defaultValue="//Start coding here..."
        theme="vs-dark"
        options={{
          fontSize: 16,
          minimap: {
            enabled: false,
          },
        }}
        onMount={handleMount}
      />
    </motion.div>
  );
};

export default Codespace;
