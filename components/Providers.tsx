"use client";

import { PropsWithChildren } from "react";
import { HeroUIProvider } from "@heroui/react";
const Providers = ({ children }: PropsWithChildren) => {
	return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
