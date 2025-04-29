import React from "react";
import { Card } from "./ui/card";

const certificates = [
  { src: "/certificates/google-rust.webp", title: "Google Rust" },
  { src: "/certificates/microsoft-solidity.png", title: "Microsoft Solidity" },
  { src: "/certificates/mit-blockchain.png", title: "MIT Blockchain" },
];

export default function Certificates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {certificates.map((cert, index) => (
        <Card key={index} className="p-4 flex flex-col items-center">
          <img
            src={cert.src}
            alt={cert.title}
            className="h-48 object-contain"
          />
          <p className="mt-2 font-semibold">{cert.title}</p>
        </Card>
      ))}
    </div>
  );
}
