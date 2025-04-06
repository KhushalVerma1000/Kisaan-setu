// DashboardCards.jsx
"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

const DashboardCards = () => {
  // Sample data array - in a real app, this would be passed as props or fetched from an API
  const cardsData = [
    {
      heading: "Total Revenue",
      amount: 125000,
      linkName: "View Details",
      link: "/revenue"
    },
    {
      heading: "Monthly Sales",
      amount: 42500,
      linkName: "Sales Report",
      link: "/sales"
    },
    {
      heading: "Pending Orders",
      amount: 8750,
      linkName: "Process Orders",
      link: "/orders"
    },
    {
      heading: "Customer Balance",
      amount: 36250,
      linkName: "Customer List",
      link: "/customers"
    }
  ];

  // Format amount with Indian Rupee notation
  const formatIndianRupee = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-slate-50 pb-2">
            <CardTitle className="text-lg font-medium text-slate-700">{card.heading}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-slate-900">{formatIndianRupee(card.amount)}</p>
          </CardContent>
          <CardFooter className="pt-0 flex justify-end">
            <Link href={card.link} className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
              {card.linkName}
              <ArrowRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;