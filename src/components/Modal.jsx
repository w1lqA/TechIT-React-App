import React, { useEffect, useRef } from "react";

function Modal(props) {
  const modalRef = useRef(null);

  const closeModal = () => {
    props.onClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        // keyCode 27 = "ESC"
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="fixed inset-0 flex card items-start justify-center z-50 py-12 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50 pointer-events-none" onClick={closeModal}></div>
      <div ref={modalRef} className="relative border border-[#303030]  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-100 rounded-2xl shadow-black shadow-2xl p-3">
        <div className="flex flex-col h-full p-6 border border-[#303030] rounded-2xl bg-white overflow-y-auto">
          <div className="flex-grow">
            <img src={props.modal.modalImage} alt="Product 1" className="mb-4 rounded-2xl" />
            <h3 className="text-xl font-semibold mb-2">{props.modal.modalTitle}</h3>
            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: props.modal.modalDescription }}></p>
          </div>
          <div className="mt-auto space-x-3 flex flex-grow items-center">
            <button className="bg-[#b3d700] shadow-2xl shadow-[#b3d700ac] hover:bg-[#859e0b] border border-[#303030] text-gray-100 py-2 px-4 font-regular bold rounded-xl inline-block">
              Purchase Now
            </button>
            <button onClick={closeModal} className="bg-gray-400 shadow-2xl shadow-gray-700 hover:bg-gray-500 border border-[#303030] text-gray-100 py-2 px-4 font-regular bold rounded-xl inline-block">
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
