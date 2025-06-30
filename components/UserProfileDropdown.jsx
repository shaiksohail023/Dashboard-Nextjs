// components/UserProfileDropdown.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const UserProfileDropdown = ({
  avatarSrc,
  name,
  level,
  xpProgress,
  nextLevelXp,
  currentXp,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    }, // Visible state
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.15, ease: "easeIn" },
    }, // Exit animation
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        className="relative w-10 h-10 rounded-full cursor-pointer overflow-hidden
                   border-2 border-primary-foreground hover:border-primary transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src={avatarSrc}
          alt={`${name}'s avatar`}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <AnimatePresence>
        {" "}
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-72 origin-top-right
                       bg-card text-card-foreground rounded-lg shadow-xl
                       border border-border z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="!border-none !shadow-none p-4 bg-transparent">
              {" "}
              <CardHeader className="p-0 mb-3 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-2">
                  <Image
                    src={avatarSrc}
                    alt={`${name}'s avatar`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full border-2 border-primary"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Level {level}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full mb-3">
                  <div className="flex justify-between items-center mb-1 text-xs text-foreground">
                    <span>XP Progress</span>
                    <span>
                      {currentXp} / {nextLevelXp} XP
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${xpProgress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ width: `${xpProgress}%` }}
                    ></motion.div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-2 text-center text-xs text-muted-foreground">
                You are {Math.round(100 - xpProgress)}% away from Level{" "}
                {level + 1}!
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileDropdown;
