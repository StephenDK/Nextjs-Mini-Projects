"use client";

import type { Snippet } from "@/generated/prisma";
import Editer from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editer
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}
