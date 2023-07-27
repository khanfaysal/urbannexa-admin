"use client";
import {useState, useEffect} from "react";
import { StoreModal } from "@/components/modals/store-modal";
// server side and client side hydration solved


export const ModalProvider = () => {
    const [isMOunted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMOunted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
}