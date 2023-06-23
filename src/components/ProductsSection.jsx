import React from "react";
import Product1 from "../assets/product1.png"
import Product2 from "../assets/product2.png"
import Product3 from "../assets/product3.png"
import ProductCard from "./cards/ProductCard";
import SectionTitle from "./SectionTitle";

function ProductsSection() {
  return (
    <section className="bg-gray-300" id="products">
      <div>
      <SectionTitle sectionTitle={"Our Products"} sectionIcon={"shopping-cart"}/>
        <div className="container mx-auto py-16 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard modalName={'Modal1'} productImage={Product1} productName={'TechShield Security Suite'} productDescription={'Protect your data with our advanced security suite. It includes robust encryption, multi-factor authentication, and real-time threat monitoring.'}/>
            <ProductCard modalName={'Modal2'} productImage={Product2} productName={'CodeMaster IDE'} productDescription={'Boost your productivity with our feature-rich integrated development environment. It offers intelligent code completion, version control integration, and seamless collaboration.'}/>
            <ProductCard modalName={'Modal3'} adaptiveGridClass={'md:col-span-1 sm:col-span-2 col-span-1'} productImage={Product3} productName={'DataHub Analytics Platform'} productDescription={'Unlock valuable insights with our powerful analytics platform. It provides advanced data visualization, machine learning algorithms, and seamless data integration.'}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;