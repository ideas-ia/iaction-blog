"use client";

import { type ReactNode, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

// Anti-spam: el número no viaja en el HTML; se decodifica en el navegador tras hidratar.
// shortcut: frena scrapers de HTML/regex, no a bots con navegador real; si llega spam igual, usar un formulario o captcha.
export function WhatsAppLink({
  children,
  className,
  label,
  showNumber = false,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  showNumber?: boolean;
}) {
  const [phone, setPhone] = useState<string | null>(null);
  useEffect(() => setPhone(atob(siteConfig.phoneB64)), []);

  return (
    <a
      href={phone ? `https://wa.me/${phone}` : undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
      {showNumber && phone
        ? ` +${phone.slice(0, 2)} ${phone[2]} ${phone.slice(3, 7)} ${phone.slice(7)}`
        : null}
    </a>
  );
}
