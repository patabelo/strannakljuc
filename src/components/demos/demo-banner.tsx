import Link from "next/link";

export function DemoBanner({ name }: { name: string }) {
  return (
    <div className="relative z-50 border-b border-zinc-200 bg-zinc-950 px-4 py-2.5 text-center text-sm text-zinc-100">
      To je primer izdelave za{" "}
      <Link href="/" className="font-semibold text-white underline-offset-2 hover:underline">
        Stran na ključ
      </Link>
      {" · "}
      {name} ni resnično podjetje.{" "}
      <Link href="/#kontakt" className="font-medium text-violet-300 hover:text-white">
        Naročite svojo stran →
      </Link>
    </div>
  );
}
