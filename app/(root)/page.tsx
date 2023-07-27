import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <div className="p">
        <h1>This is Home page</h1>
        <UserButton afterSignOutUrl="/"/>
      </div>
    );
  };
  
  export default SetupPage;