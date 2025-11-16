import React from "react";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const page = () => {
  return (
    <div>
      <section>
        <p>This is a test page</p>
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
