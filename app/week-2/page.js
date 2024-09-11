import Heading from "./heading";
import Link from "next/link";

export default function Page(){
    let a = 5;
    let b = 10;
    return (
        <main>
            <Heading />            
            <Heading />
            <Heading />
            <h1>week 2 demos</h1>
            <p>these are demos for week 2</p>
            <p>the sum of a + b is {a + b}.</p>
            <p>go back to <Link href="/">the home page</Link></p>
            <p>see my changes</p>
        </main>
    )
}