import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
// import { Tooltip } from "@nextui-org/react";
const Header = () => {
	return (
		<div className="flex justify-between mx-2 p-2 max-w-6xl sm:mx-auto items-center select-none">
			<div className="">
				{/* <Tooltip content={"Home page"}> */}
				<MenuItem title={"Home"} address={"/"} Icon={AiFillHome} />
				{/* </Tooltip> */}
				<MenuItem
					title={"About"}
					address={"/about"}
					Icon={BsFillInfoCircleFill}
				/>
			</div>
			<div className="flex items-center space-x-5 ">
				<DarkModeSwitch />
				<Link href={"/"}>
					<h2 className="text-2xl ">
						<span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 ">
							IMDb
						</span>
						<span className="text-xl hidden sm:inline ">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Header;
