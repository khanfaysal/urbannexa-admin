"use client";

import { useEffect } from "react";
import { Modal } from "@/components/ui/model";
import { useStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {

    if(!isOpen) {
      onOpen();
    }
          
  }, [isOpen, onOpen]);

    return (
      <div className="p">
        
       
      </div>
    );
  };
  
  export default SetupPage;