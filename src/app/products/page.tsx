import Link from "next/link"


export default function Products() {
    return <>
    <ul>
        <Link href={"/"}>Home</Link>
        <li>
            <Link href={"/products/1"}>First product</Link>
        </li>
        <li>
            <Link href={"/products/2"}>Second product</Link>
        </li>
        <li>
            <Link href={"/products/3"} replace>Third product</Link>
        </li>
    </ul>
        </>
}