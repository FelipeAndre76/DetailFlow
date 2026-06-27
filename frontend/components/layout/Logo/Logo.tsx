import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="DetailFlow - Estética Automotiva"
      width={240}
      height={75}
      priority
      className="h-auto w-[240px]"
    />
  );
}