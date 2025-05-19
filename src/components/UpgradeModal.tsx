"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreditCard } from "lucide-react";
//import ImplementPaystack from "./ImplementPaystack";

export default function UpgradeModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-7 px-3 bg-black text-white cursor-pointer"
        >
          Upgrade - $1/mo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md flex">
        <CreditCard className="h-5 w-5" />

        <div>
          <DialogHeader className="pb-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg">
                Upgrade to Pro - $1/month
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              You&apos;re on the free plan: 30 queries/day
            </p>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">What you get with Pro:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unlimited GPT queries to your GitHub repo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Only $1/month — cancel anytime</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              No API key changes. No limits. No setup needed
            </p>
            <div className="flex flex-col items-center space-y-3 pt-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="mr-1">•</span>
                <span>Secured by paystack</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/placeholder.svg?height=20&width=32"
                  alt="Visa"
                  className="h-5"
                />
                <img
                  src="/placeholder.svg?height=20&width=32"
                  alt="Mastercard"
                  className="h-5"
                />
                <img
                  src="/placeholder.svg?height=20&width=32"
                  alt="Verve"
                  className="h-5"
                />
                <img
                  src="/placeholder.svg?height=20&width=32"
                  alt="Bank"
                  className="h-5"
                />
                <img
                  src="/placeholder.svg?height=20&width=32"
                  alt="Apple Pay"
                  className="h-5"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button
              variant="ghost"
              className="text-gray-500"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            {/*   <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Upgrade now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button> */}
            {/*      <button onClick={() => setOpen(false)}>
              <ImplementPaystack />
            </button> */}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
