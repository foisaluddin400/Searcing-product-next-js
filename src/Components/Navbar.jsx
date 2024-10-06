import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between py-4 px-11">
            <h1>Searching</h1>
            <div className="flex gap-10 ">
            <Link href={'/Search'}><div className='flex justify-center'>
            <button  className= 'text-4xl bg-green-800 p-5 text-white text-center'>Plase Click me</button>
            </div></Link>
           
            </div>

           
        </div>
    );
};

export default Navbar;