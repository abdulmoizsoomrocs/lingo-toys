import React from 'react';

export default function ProductGrid() {
  return (
    <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-4 rounded-xl overflow-hidden shadow-sm bg-surface-container">
            <img
              alt="Quantum Builder Kit Main View"
              className="w-full h-64 md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              src="/product-main.svg"
            />
          </div>
          <div className="col-span-1 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
            <img
              alt="Close up components"
              className="w-full h-full object-cover"
              src="/product-components.svg"
            />
          </div>
          <div className="col-span-1 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
            <img
              alt="Action shot"
              className="w-full h-full object-cover"
              src="/product-action.svg"
            />
          </div>
          <div className="col-span-1 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
            <img
              alt="Packaging"
              className="w-full h-full object-cover"
              src="/product-packaging.svg"
            />
          </div>
          <div className="col-span-1 aspect-square rounded-lg overflow-hidden bg-surface-container-low group relative">
            <img
              alt="Video preview"
              className="w-full h-full object-cover brightness-50"
              src="/product-video.svg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          <header>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Top Rated
              </span>
              <div className="flex items-center gap-1 text-[#fdd355]">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  star
                </span>
                <span className="text-on-surface-variant text-xs font-bold ml-1">(128 Reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-on-surface leading-tight mb-4">
              Quantum Builder Kit: Mars Rover Edition
            </h1>
            <p className="text-on-surface-variant leading-relaxed">
              Unleash the future engineer within. This 450-piece STEM masterpiece allows children to build, program, and explore terrestrial physics with real motor-driven components.
            </p>
          </header>

          <div className="flex items-end gap-4 bg-surface-container-low p-6 rounded-xl">
            <div className="flex flex-col">
              <span className="text-error text-sm font-bold line-through">$89.99</span>
              <span className="text-4xl font-black text-on-surface">$59.99</span>
            </div>
            <span className="bg-error text-on-error px-4 py-2 rounded-lg font-black text-lg rotate-3 mb-2">-35% OFF</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold text-sm text-secondary">CHOOSE MODULE COLOR</span>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full border-4 border-tertiary bg-tertiary-fixed shadow-inner ring-offset-2 ring-2 ring-transparent transition-all" />
              <button className="w-12 h-12 rounded-full bg-error-container hover:scale-110 transition-transform" />
              <button className="w-12 h-12 rounded-full bg-primary-container hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="w-full bg-secondary text-on-secondary font-black py-5 rounded-lg text-xl shadow-lg hover:bg-secondary-dim transition-all active:scale-95 flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">shopping_basket</span>
              Add to Workshop Bag
            </button>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-tertiary">local_shipping</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Free Shipping</span>
                  <span className="text-[10px] text-on-surface-variant">Over $50.00</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-tertiary">verified</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">2 Year Warranty</span>
                  <span className="text-[10px] text-on-surface-variant">Built to Last</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-primary-container/20 rounded-xl p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-primary mb-6">Built for Big Dreams</h2>
            <p className="text-lg text-on-primary-container/80 leading-relaxed max-w-2xl">
              The Quantum Builder Kit isn't just a toy; it's a launchpad for curiosity. Featuring our signature <strong>"No-Fail Snap"</strong> tech, each piece fits perfectly, ensuring that even the most complex lunar lander stays together during orbit (or across the living room rug).
            </p>
            <div className="mt-8 flex gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary">450+</span>
                <span className="text-sm font-bold text-on-primary-container">Total Pieces</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary">8-14</span>
                <span className="text-sm font-bold text-on-primary-container">Age Group</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary">48h</span>
                <span className="text-sm font-bold text-on-primary-container">Build Time</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest rounded-xl p-10">
            <h3 className="text-xl font-black text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">inventory_2</span>
              Inside the Box
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                <span className="text-sm font-medium">Quantum Core Engine Module</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                <span className="text-sm font-medium">All-Terrain Rubber Tracks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                <span className="text-sm font-medium">Solar Power Cell (Real Functional)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                <span className="text-sm font-medium">Interactive Guide Book (Hardcover)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                <span className="text-sm font-medium">LingoToys Collector Badge</span>
              </li>
            </ul>
          </div>

          <div className="bg-tertiary-container/30 rounded-xl p-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-xl font-black text-on-tertiary-container mb-2">Kinetic Learning</h3>
            <p className="text-sm text-on-tertiary-container/70">Hands-on experience with mechanical principles and physics through physical assembly.</p>
          </div>
          <div className="bg-secondary-container/30 rounded-xl p-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-3xl">lightbulb</span>
            </div>
            <h3 className="text-xl font-black text-on-secondary-container mb-2">Infinite Rebuilds</h3>
            <p className="text-sm text-on-secondary-container/70">Our modular system allows for thousands of configurations beyond the main rover model.</p>
          </div>
          <div className="bg-error-container/20 rounded-xl p-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-error text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-black text-on-error-container mb-2">Collaborative Play</h3>
            <p className="text-sm text-on-error-container/70">Designed for families and groups to solve engineering puzzles together.</p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-on-surface mb-2">The Playroom Report</h2>
            <p className="text-on-surface-variant font-medium">Real feedback from parents and little engineers.</p>
          </div>
          <button className="bg-white border-2 border-outline-variant/30 text-secondary font-bold px-6 py-3 rounded-full hover:bg-surface-container transition-all">
            Write a Review
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-black text-on-primary-container">SH</div>
              <div>
                <p className="font-bold">Sarah H.</p>
                <p className="text-xs text-on-surface-variant font-medium">Verified Parent</p>
              </div>
            </div>
            <div className="flex gap-1 text-[#fdd355] mb-4">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-on-surface leading-relaxed mb-4 italic">
              "Finally, a toy that keeps my 10-year-old away from the screen for hours! The quality of the motors is impressive for the price."
            </p>
            <span className="text-xs font-bold text-tertiary">HELPFUL (24)</span>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-black text-on-secondary-container">MJ</div>
              <div>
                <p className="font-bold">Marcus J.</p>
                <p className="text-xs text-on-surface-variant font-medium">Science Teacher</p>
              </div>
            </div>
            <div className="flex gap-1 text-[#fdd355] mb-4">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                star
              </span>
            </div>
            <p className="text-on-surface leading-relaxed mb-4 italic">
              "I use these in my classroom. The instructions are clear and the kids actually learn how a differential gear works. Highly recommended for home schooling too."
            </p>
            <span className="text-xs font-bold text-tertiary">HELPFUL (18)</span>
          </div>
        </div>
      </section>
    </main>
  );
}
