import React from "react";
import Button from "@/components/UI/Button";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <section>
        <p className="border-4">This is a test page</p>
        <Button size="small" withArrow>
          Click me
        </Button>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
