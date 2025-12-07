import React from "react";

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t mt-8">
      <p>
        © {new Date().getFullYear()} Sonu Shivcharan. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
