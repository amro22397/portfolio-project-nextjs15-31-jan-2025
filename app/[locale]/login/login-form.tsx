"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
// import { CircularProgress } from "@mui/material"
// import { UserAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, Loader, Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [type, setType] = useState("password");

  // const { user, googleSignIn, logOut } = UserAuth();
  // console.log(user);

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignWithGoogle = async (e: any) => {
    e.preventDefault();

    setLoadingGoogle(true);

    await signIn("google", { callbackUrl: "/" });
    setLoadingGoogle(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await signIn("credentials", { ...formData, callbackUrl: "/" });

    setLoading(false);
  };

  /*    useEffect(() => {
            const checkAuthentication = async () => {
              await new Promise((resolve) => setTimeout(resolve, 50));
              setLoading(false);
            };
            checkAuthentication();
          }, [user]); */

  console.log(formData);

  const formStyles = `text-md`;
  const iconClass = `absolute top-2 text-gray-500 cursor-pointer`;

  const session = useSession();
  console.log(session);

  const loginPage = useTranslations("LoginPage");
  const locale = useLocale();

  return (
    <div
      className={cn(
        "flex flex-col gap-6 dark:bg-zinc-700 dark:border-none rounded-xl shadow-lg",
        className
      )}
      {...props}
    >
      <Card className="dark:border-none ">
        <CardHeader>
          <CardTitle
            className={`text-2xl
            ${locale === "ar" && "mb-[6px]"}`}
          >
            {loginPage("Login")}{" "}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-200">
            {loginPage("EnterYourEmailDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div
              className={`flex flex-col ${locale === "ar" ? "gap-8" : "gap-6"}`}
            >
              <div className="grid gap-2">
                <Label htmlFor="email" className={`${formStyles}`}>
                  {loginPage("Email")}{" "}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  className="bg-white border border-gray-800/40 rounded-md px-3 py-0 placeholder:text-gray-400 mx-0 my-0 h-[39px]
                  text-black focus:border-gray-800/40 w-full"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className={`${formStyles}`}>
                    {loginPage("Password")}{" "}
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="mx-5 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {loginPage("Forgot your password?")}
                  </Link>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={type}
                    defaultValue={formData.password}
                    onChange={handleChange}
                    className="bg-white border border-gray-800/40 rounded-md px-3 py-0 placeholder:text-gray-400 mx-0 my-0 h-[39px]
                  text-black focus:border-gray-800/40 w-full"
                    required
                  />

                  {type === "password" && formData.password ? (
                    <span
                      className={`${iconClass} ${locale === "ar" ? "left-4" : "right-4"}`}
                      onClick={() => setType("text")}
                    >
                      <EyeIcon className="w-5 h-5" />
                    </span>
                  ) : (
                    type === "text" &&
                    formData.password && (
                      <span
                        className={`${iconClass} ${locale === "ar" ? "left-4" : "right-4"}`}
                        onClick={() => setType("password")}
                      >
                        <EyeOffIcon className="w-5 h-5" />
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button type="submit" className="w-full bg-green-500">
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    loginPage("LoginButton")
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleSignWithGoogle}
                  type="button"
                >
                  {loadingGoogle ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Image
                        src={"/Google_Icons-09-512.webp"}
                        width={24}
                        height={24}
                        alt="Google logo"
                      />
                      {loginPage("Continue With Google")}
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-0 text-center text-sm">
                {loginPage("Dont have an account?")}{" "}
                <a href="/register" className="underline underline-offset-4">
                  {loginPage("Register")}
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
