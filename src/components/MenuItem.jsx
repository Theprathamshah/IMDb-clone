import React from "react";
import Link from "next/link";
const MenuItem = ({ title, address, Icon }) => {
	return (
		<Link href={address} className=" mx-2 lg:mx-6 hover:text-amber-600 ">
			<Icon className={"text-2xl sm:hidden mx-4  inline-block "} />
			<p className=" hidden sm:inline my-2 text-md">{title}</p>
		</Link>
	);
};

export default MenuItem;
