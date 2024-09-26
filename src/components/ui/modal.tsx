import { X } from "lucide-react";
import React, { ReactNode } from "react";

import Modal from "react-minimal-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalCustom: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      open={isOpen}
      blur
      onClose={onClose}
      hideIcon
      className="2xl:w-[1080px] xl:w-[1080px] w-[370px] transition-all lg:w-[1000px] md:w-[720px]  sm:w-[600px]  aspect-video "
      width={1080}
      showEscape
    >
      <button
        className="p-2 m-2 top-0 rounded-md absolute right-0 z-30 bg-white cursor-pointer shadow hover:shadow-[none] transition-all"
        onClick={onClose}
      >
        <X className="" color="black" />
      </button>
      {children}
    </Modal>
  );
};

export default ModalCustom;
