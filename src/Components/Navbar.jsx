import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between py-4 px-11">
            <h1>Searching</h1>
            <div className="flex gap-10 ">
            <Link href={'/Search'}>Home</Link>
            <li>Section</li>
            <li>Meal</li>
            <li>Menu</li>
            </div>
        </div>
    );
};

export default Navbar;