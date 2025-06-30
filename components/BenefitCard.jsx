"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const BenefitCard = ({ title, iconName, description, ctaText }) => {
  const IconComponent = iconName ? LucideIcons[iconName] : null;

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="flex flex-col h-full">
        {" "}
        <CardHeader className="flex-grow">
          {" "}
          <div className="flex items-center mb-2">
            {IconComponent && (
              <IconComponent className="h-8 w-8 text-primary mr-3" />
            )}
            <CardTitle>{title}</CardTitle>{" "}
          </div>
          <CardDescription>{description}</CardDescription>{" "}
        </CardHeader>
        <CardFooter>
          <Button className="w-full">{ctaText}</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BenefitCard;
