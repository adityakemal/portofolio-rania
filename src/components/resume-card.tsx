"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  location?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-between sm:justify-center w-full sm:w-auto font-semibold leading-none text-xs sm:text-sm text-pretty">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <div
                  className={cn(
                    "translate-x-0 size-4 transform opacity-1 sm:opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 float-right ",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                >
                  <ChevronRightIcon className="size-4" />
                </div>
              </h3>
              {/* web show period  */}
              <div className="text-[11px] hidden sm:block sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap ">
                {period}
              </div>
            </div>
            <div className="flex gap-x-1">
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}{" "}
              {location && (
                <div className="font-sans text-xs"> in {location}</div>
              )}
            </div>
            {/* mobile show period  */}
            <div className="text-[11px] block sm:hidden sm:text-sm tabular-nums text-muted-foreground whitespace-nowrap ">
              {period}
            </div>
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm space-y-2"
            >
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              {/* {href && (
                <div className="">
                  <Link href={href} target="_blank" className="z-[20000]">
                    {href}
                  </Link>
                </div>
              )} */}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
