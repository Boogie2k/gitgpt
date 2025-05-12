import React from "react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBoundStore } from "@/store/store";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { logout } from "@/functions/handleLogout";

const Logout = () => {
  const isLogout = useBoundStore((state) => state.isLogout);
  const setIsLogout = useBoundStore((state) => state.setIsLogout);
  const router = useRouter();

  const handleLogout = () => {
    logout(() => router.replace("/connect"));
  };

  return (
    <Dialog open={isLogout} onOpenChange={setIsLogout}>
      {/* <DialogTrigger className="flex items-center  px-4 py-2 gap-2.5  hover:bg-gray-100 w-full">
        <FaRegEdit />
        <a href="#" className="block text-sm text-gray-700">
          Edit Email
        </a>
      </DialogTrigger> */}

      <DialogContent className="flex">
        <FiLogOut />
        <div>
          <DialogHeader>
            <DialogTitle>Logout?</DialogTitle>
            <DialogDescription>
              Are you sure you want to log out? You&apos;ll be returned to the
              login screen
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              //  onClick={() => setOpen(false)}
              className="bg-gray-100 hover:bg-gray-200 border-gray-200"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-black hover:bg-gray-500 border-gray-200"
            >
              Logout
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
