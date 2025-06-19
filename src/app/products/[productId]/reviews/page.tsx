export default  async function DisplayReview ({params,}:{params:Promise<{productId:string}>;}) {
    const productId = (await params).productId;
    return <>
    <h1>Review for products {productId}</h1>
    <ul>
        <li>
            1.Product was great
        </li>
        <li>
            2.Product 
        </li>
        <li>
            3.
        </li>
    </ul>
    </>
}