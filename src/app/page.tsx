import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ProductVisual } from "@/components/sections/product-visual";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Features />
      <ProductVisual />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
