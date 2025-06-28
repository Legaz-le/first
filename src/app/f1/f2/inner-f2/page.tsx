import Link from "next/link";
export default function innerf2() {
  return (
    <>
      <div>Inner F2</div>
      <div><Link href={"/f5"}>F5</Link></div>
    </>
  );
}
