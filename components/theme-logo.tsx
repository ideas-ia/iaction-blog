import Image from "next/image";

export function ThemeLogo({ size = 32 }: { size?: number }) {
  return (
    <>
      {/* Light theme logo */}
      <Image
        src="/favicon-light.svg"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="block dark:hidden"
        sizes={`${size}px`}
        priority
      />
      {/* Dark theme logo */}
      <Image
        src="/favicon-dark.svg"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="hidden dark:block"
        sizes={`${size}px`}
        priority
      />
    </>
  );
}
