"use client";

import { Modal } from "@/components/ui/model";

const SetupPage = () => {
    return (
      <div className="p">
        <h1>This is Home page</h1>
       <Modal title="test" description="test description" isOpen onClose={() => {}}>
          Children
       </Modal>
      </div>
    );
  };
  
  export default SetupPage;