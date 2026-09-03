import { useState } from "react";
import { UploadModal } from "./UploadModal";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="app">
      {open ? (
        <UploadModal onClose={() => setOpen(false)} />
      ) : (
        <button className="reopen" type="button" onClick={() => setOpen(true)}>
          Upload file to storage
        </button>
      )}
    </div>
  );
}
