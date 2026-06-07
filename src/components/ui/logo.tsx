import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
  href?: string;
}

export function Logo({ variant = "full", className = "", href = "/" }: LogoProps) {
  const image =
    variant === "full" ? (
      <Image
        src="/logo.png"
        alt="UCBS Utility Concepts Business Solutions Ltd"
        width={240}
        height={64}
        priority
        className={`h-10 w-auto sm:h-12 object-contain object-left ${className}`}
      />
    ) : (
      <Image
        src="/logo.png"
        alt="UCBS"
        width={120}
        height={40}
        priority
        className={`h-8 w-auto object-contain object-left ${className}`}
      />
    );

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label="UCBS Home">
      {image}
    </Link>
  );
}
