import React from "react";
import { TRUST_BADGES } from "@/lib/utils/constants";

export default function SocialProof() {
  return (
    <section className="bg-[#0a0a0a] py-6 mt-6">
      <div className="container-padded">
        <div className="flex flex-wrap justify-center items-center gap-8 text-white">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-6 w-6 text-yellow-400" />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}