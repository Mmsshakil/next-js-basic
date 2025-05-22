"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const loggedIn = false;
  const handleNavigation = () => {
    if (loggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p>About</p>
      <Link href="/about/address">
        <p className="font-bold text-center my-3 text-amber-600">Addres Page</p>
      </Link>

      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
};

export default About;
