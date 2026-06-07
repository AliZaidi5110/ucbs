"use client";

import React from "react";
import { ServiceCard } from "@/components/ui/service-card";
import { SERVICES_DATA } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {SERVICES_DATA.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          href={service.href}
          image={service.image}
          index={index}
        />
      ))}
    </div>
  );
}
