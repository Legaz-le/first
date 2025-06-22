"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()
    const handleCick = ()=> {
        console.log("Place your order");
        router.push("/");
    }
  return (
    <>
      <h1>Order Prodcut</h1>
      <button onClick={handleCick}>Place order</button>
    </>
  );
}
