interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-black/20" : "invisible"} `}
    >
      {/* modal */}
      <div
        className={`rounded-lg border border-gray-500 bg-gray-600/25 leading-0 text-white shadow backdrop-blur-sm backdrop-filter transition-all ease-in-out ${open ? "opacity-100" : "opacity-0"} `}
      >
        {children}
      </div>
    </div>
  );
}
