"use client";

// components/CookieBanner.tsx
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "../ui/Button";
import Link from "next/link";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "true", { expires: 365 }); // Store consent for 1 year
    setIsVisible(false);
  };

  return (
    isVisible && (
      <FadeInUpWithSlowBounce className="fixed bottom-0 mb-10 min-w-full px-20">
        <div className="flex w-full items-center justify-between rounded-xl border bg-white p-4 text-sm font-medium">
          <span>
            We use cookies to improve your experience. By using our site, you
            accept our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </span>
          <Button onClick={handleAccept}>Allow Cookies</Button>
        </div>
      </FadeInUpWithSlowBounce>
    )
  );
};

export default CookieBanner;
