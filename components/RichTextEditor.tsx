"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const modules = {
  toolbar: [
    [{ header: [false, 2, 3] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "list", "bullet", "blockquote"];

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="rounded-xl border border-stone-300 bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        preserveWhitespace
        placeholder="Write your poem or essay here..."
      />
    </div>
  );
}
