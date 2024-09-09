"use client";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/HomePageNav/navbar/page";
import Sidebar from "@/components/HomePageNav/siderbar/page";

// add a state for siderbar to open or close
const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;