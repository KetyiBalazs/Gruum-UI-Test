import { useRef } from "react";
import iconClose from "./assets/icon-close.svg";
import iconUpload from "./assets/icon-upload.svg";
import iconShare from "./assets/icon-share.svg";
import "./UploadModal.css";

type UploadModalProps = {
  onClose: () => void;
};

export function UploadModal({ onClose }: UploadModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="upload-modal" role="dialog" aria-labelledby="upload-modal-title" aria-modal="true">
      <header className="upload-modal__header">
        <div className="upload-modal__header-row">
          <h1 id="upload-modal-title" className="upload-modal__title">
            Upload file to storage
          </h1>
          <button
            className="upload-modal__close"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="upload-modal__icon-24">
              <img src={iconClose} alt="" width={24} height={24} />
            </span>
          </button>
        </div>
      </header>

      <div className="upload-modal__body">
        <button
          className="upload-modal__dropzone"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="upload-modal__dropzone-icon">
            <span className="upload-modal__icon-20">
              <img src={iconUpload} alt="" width={20} height={20} />
            </span>
          </span>
          <span className="upload-modal__dropzone-label">
            Click to upload files or images
          </span>
        </button>
        <input
          ref={fileInputRef}
          className="upload-modal__file-input"
          type="file"
          accept="image/*,*/*"
          multiple
        />
      </div>

      <footer className="upload-modal__footer">
        <div className="upload-modal__actions">
          <button className="upload-modal__submit" type="button">
            <span className="upload-modal__icon-24">
              <img src={iconShare} alt="" width={24} height={24} />
            </span>
            <span className="upload-modal__submit-label">Upload files</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
