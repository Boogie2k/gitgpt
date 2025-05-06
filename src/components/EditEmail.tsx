import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBoundStore } from "@/store/store";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";

const EditEmail = () => {
  const isEditEmail = useBoundStore((state) => state.isEditEmail);
  const setIsEditEmail = useBoundStore((state) => state.setIsEditEmail);

  const [isVerifyEmail] = useState(false);

  return (
    <Dialog open={isEditEmail} onOpenChange={setIsEditEmail}>
      {/* <DialogTrigger className="flex items-center  px-4 py-2 gap-2.5  hover:bg-gray-100 w-full">
        <FaRegEdit />
        <a href="#" className="block text-sm text-gray-700">
          Edit Email
        </a>
      </DialogTrigger> */}
      <DialogContent className="flex">
        {!isVerifyEmail ? <FaRegEdit /> : <FaArrowLeft />}

        {!isVerifyEmail ? (
          <div>
            <DialogHeader>
              <DialogTitle>Edit email</DialogTitle>
            </DialogHeader>
            <div className="py-2">
              <p className="text-sm text-gray-500">Current email:</p>

              <div className="mt-4">
                <label htmlFor="new-email" className="text-sm font-medium">
                  New email
                </label>
                <Input
                  id="new-email"
                  //  value={newEmail}
                  // onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="pied@piper.com"
                  className="mt-1"
                />
              </div>
            </div>

            <DialogFooter className="flex justify-end gap-2 mt-4">
              <Button
                variant="outline"
                //  onClick={() => setOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 border-gray-200"
              >
                Cancel
              </Button>
              <Button
                //   onClick={handleVerifyEmail}
                className="bg-black hover:bg-gray-500 border-gray-200"
              >
                Verify email
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle>Verify new email</DialogTitle>
            </DialogHeader>
            <div className="py-2">
              <p className="text-sm text-gray-500">
                Enter the 6-digit code sent to your new email
              </p>

              <div className="mt-4">
                <label htmlFor="new-email" className="text-sm font-medium">
                  Code
                </label>
                <Input
                  id="new-email"
                  //  value={newEmail}
                  // onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="pied@piper.com"
                  className="mt-1"
                />
              </div>
            </div>

            <DialogFooter className="flex justify-end gap-2 mt-4">
              <Button
                variant="outline"
                //  onClick={() => setOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 border-gray-200"
              >
                Cancel
              </Button>
              <Button
                //   onClick={handleVerifyEmail}
                className="bg-black hover:bg-gray-500 border-gray-200"
              >
                Verify email
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditEmail;
