"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/model";

export const StoreModal = () => {
    const storeModal = useStoreModal()
    return (
        <Modal 
            title="crate store" 
            description="Add a new store to manage products and categories"
            isOpen = {storeModal.isOpen}
            onClose={storeModal.onClose}
            >
                Future crate store form 
    </Modal>
    )
}