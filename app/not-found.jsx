import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex flex-col space-y-4 justify-center items-center py-10">
            <h2>There was a problem.</h2>
            <p>We could not find what you were looking for :)</p>
            <p>Go back to <Link className="underline" href={'/'}>Homepage</Link></p>
        </main>
    )
}
