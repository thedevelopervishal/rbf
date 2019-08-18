import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ margin: 10 }}
      className="text-white p-4 text-center"
      style={{ backgroundColor: "#333333" }}
    >
      Copyright &copy; {new Date().getFullYear()} The Stackmentalists
    </footer>
  );
}
