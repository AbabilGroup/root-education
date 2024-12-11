"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "../ui/Button";
import Link from "next/link";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");

    if (!consent) {
      setIsVisible(true);
    }
  }, [setIsVisible]);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "true", { expires: 365 });
    setIsVisible(false);
  };

  return (
    isVisible && (
      <FadeInUpWithSlowBounce className="fixed bottom-0 mb-10 w-screen px-20">
        <div className="flex w-screen flex-col items-center justify-between gap-5 rounded-xl border bg-white p-4 text-sm font-medium lg:flex-row">
          <div className="text-center lg:text-left">
            We use cookies to improve your experience. By using our site, you
            accept our{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>
            .
          </div>
          <Button onClick={handleAccept}>Allow Cookies</Button>
        </div>
      </FadeInUpWithSlowBounce>
    )
  );
};

export default CookieBanner;
