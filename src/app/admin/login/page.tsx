"use client";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input } from "@nextui-org/react";
import React from "react";
import { Architects_Daughter } from "next/font/google";
import { useState } from "react";
import { Router } from "next/router";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ()=>{

  }
  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/home/home-bg.png")' }}
    >
      <div className="flex items-center justify-center absolute inset-0  left-50% bg-black bg-opacity-50 backdrop-blur-2xl">
        <Card className="shadow-2xl bg-opacity-50 w-[480px]">
          <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="cursor-pointer"
              //  onClick={() => Router.push("/admin/dashboard")}
            />
            <span>
              <span className="={Architects.className}">Voyage Forge</span>
            </span>
          </CardHeader>
          <CardBody className="flex flex-col items-center w-full justify-center">
            <div className="flex flex-col gap-2 w-full">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color="danger"
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="danger"
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <Button
            color="danger" variant="shadow" className="w-full capatalize" size='lg'
            onClick={handleLogin}>Login</Button>

          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default login;
