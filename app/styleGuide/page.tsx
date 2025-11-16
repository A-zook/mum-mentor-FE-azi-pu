import React from "react";
import Footer from "@/components/layout/Footer";
import Button from "@/components/UI/Button";

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
