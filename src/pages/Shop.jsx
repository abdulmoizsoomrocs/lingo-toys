import Navigation  from "../components/Navigation";
import Footer  from "../components/Footer";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-container min-h-screen">
     <Navigation/>

      <main className="pt-24 min-h-screen">
        <header className="px-8 py-12 bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 border-b-4 border-orange-400 mb-8 relative overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Master the <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Workshop</span>
              </h1>
              <p className="text-orange-700 text-lg max-w-xl font-bold">
                Discover premium educational toys and high-quality collectibles designed to inspire curiosity and spark endless creativity.
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-300 to-pink-300 border-4 border-yellow-400 rounded-xl rotate-6 flex items-center justify-center shadow-xl relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-lg -rotate-12 text-white font-bold text-xl shadow-lg">🆕 New!</div>
              <img
                alt="Featured Toy"
                className="w-4/5 h-4/5 object-contain"
                data-alt="vibrant colored geometric building blocks arranged in a playful architectural stack with soft shadows on a yellow background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaSDXkhgt81t8XjvLBYpdAVvcjfYKYRoRv-LH2_fNHZdnOTeWpIM-YDEcpu0xHYDEA7yZsSj_eRrsOLydmotxyKXmPcJzSqiccoJZ_rornOhU6RWXHQr4bcXYP3swzxsM4xaarawK1WHsbV4783sMrCF6gmG4srCzkWf4cIOTy1IUt6e9bS5p1urZZmXKSX9qsNhEJnZx896GUkjlCpwx7uGNr0O6SkWeRP7XE-zP9pFwPumrDwdSQ5TlX75y_IVqi4ce1B80AfuaT"
              />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-l-4 border-purple-400 p-8 rounded-lg space-y-8 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">🔍 Filters</h3>
                <button className="text-purple-500 text-sm font-bold hover:underline">Clear All</button>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-purple-700">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-400 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md">STEM</button>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md">Anime</button>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md">Outdoor</button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md">Puzzles</button>
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md">Robotics</button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-purple-700">Age Group</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-sm border-2 border-purple-400 text-purple-600 focus:ring-purple-500 accent-purple-600" type="checkbox" />
                    <span className="text-purple-700 group-hover:text-purple-900 font-semibold">3-5 Years</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="rounded-sm border-2 border-purple-400 text-purple-600 focus:ring-purple-500 accent-purple-600" type="checkbox" />
                    <span className="text-purple-700 group-hover:text-purple-900 font-semibold">6-10 Years</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-sm border-2 border-purple-400 text-purple-600 focus:ring-purple-500 accent-purple-600" type="checkbox" />
                    <span className="text-purple-700 group-hover:text-purple-900 font-semibold">11+ Years</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-purple-700">Price</h4>
                <input className="w-full accent-purple-600" type="range" />
                <div className="flex justify-between text-xs font-bold text-purple-600">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t-2 border-purple-300">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-indigo-500"></div>
                  <span className="ml-3 text-sm font-bold text-purple-700">In Stock Only</span>
                </label>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8 text-on-secondary relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2 leading-tight">Join the Workshop Club</h4>
                <p className="text-sm opacity-90 mb-6">Get 15% off your first order when you sign up.</p>
                <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">Sign Up</button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 group-hover:rotate-12 transition-transform duration-500" data-icon="star">star</span>
            </div>
          </aside>
          <div className="lg:col-span-9">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-on-surface">Showing 24 Results</h2>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-1">
                  <span className="font-medium">Filtered by:</span>
                  <span className="bg-surface-container px-2 py-0.5 rounded text-xs font-bold">STEM Kits x</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-lg">
                <span className="text-sm font-bold text-on-surface-variant">Sort by:</span>
                <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-secondary">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm hover:bg-secondary hover:text-white transition-colors duration-200">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="a detailed miniature robotic arm toy kit with visible gears and cables on a clean white surface with natural light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlraI4E33xEh-EoQFUWNN2E6Dl_ZS6zOSz7sfDArDUth4zalw4DulVjtoCUYlfvZwIzhQXkau5uU73WXJKKcgHpI1tJs1wCwRJ8D1V_6P94ewkhKZ2uA9b6dLjXZGNdqdA3Ue0YU8QpY3g5lMrkJWUDNcMd2Pw142pgNtvFrNLt5vh4G9816JeUJJpLfZmQ0dniXGp_TtOcP-Du9mDSgtSDPdTZJLA42adAiVemRAHvpxGLLZqhALCiq2x5ewtVuYFpduTArGgkpaX"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">STEM KITS</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">Neo-Builder RoboArm</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Complete mechanical assembly kit with over 150 interchangeable parts.</p>
                </div>
                <Link to="/products" className="block">
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-on-surface">$59.99</span>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
                </Link>
              </div>
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute top-4 left-4 bg-error text-white text-[10px] px-3 py-1 rounded-full font-bold">SALE</div>
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="collectible anime figurine of a hero character in a dynamic pose with vibrant blue and silver armor elements"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeCORKG38YJ1w10FzMBPVZpHipWAzUMcolgS7Oah2zcvWaebKiwaj7myEBrer9S5WJZ1fxKsS-VXXHiq55m-1Z-FHcwuuEWPNakuKVM2jtoXcOtefBDBVixpTaXcelUj-UWB3U3tUgGdI8S7z_hv2QaoGueGJdeNTzpVB6c5rSlUQwtIfkrDc4f6lm9yRMj0UcbHJTnR1-1QDZF9P8T6opGy72Ubvxcr5YVPUm-V2aXgn94kcSs3WgIJ6xzVWS1XYAO7VtOqyHEWm"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">ANIME SERIES</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">Cyber Samurai V.1</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Limited edition high-fidelity collectible with 24 points of articulation.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-on-surface">$124.50</span>
                    <span className="text-xs font-bold text-error line-through opacity-60">$149.00</span>
                  </div>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
              </div>
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="educational biology kit for kids featuring a colorful human torso model with removable organs and 3D diagrams"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzBEcdOUgIoF1FpI1iUORqaozRwyEzUGq2MufFTCShzXurNJAcibEDkNgP45KvLLDBI44z9gQ2-poc0DeSFJ2FfPcTdXlly3uz7Rch-jXrGfcV7Lb9dRozb4IgifZC5v4gjzTvrTUED-SwyGI9M4Zpe8BYFuetAw63ced9hnYDbPBJdemORHtQON3DraLYoHyzFxo5xtnPc_isyWK-sfLvNNoNwGGVheVqfPpSOA1HDXGgY7PjjtbEsN0h5ndzFdoOa-Ge3gXRcFw9"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">EDUCATIONAL</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">Explorer Bio-Lab</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Dive into anatomy with this tactile, multi-layer human body model kit.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-on-surface">$34.95</span>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
              </div>
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="sleek modern drone for children with orange and black accents and protected propellers on a soft grey surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9HS8CV6yM09urFqkB7-WDwn_OGPWWpS3LrhSAn2QEHqcgutmuEUoCXdzpVVxHB4wtyuELclzcqsHFBi3ch0EsxQHDLudjGjW84pXUMfLHLP-UXNskZkz_SkzvEcuwZzWDRVflL1jVqbecQBfI3Vy8cD7NaM4nRehFUYKvYeARUqF8-nxGnY579PK8MZHR0IvP-gxmghDL34urVTE2mQb39lsHvRro4isKuqRMqY_Pg8tfPvsTnm57lJCGWovRDOB90BYoNr1sFnW"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">ROBOTICS</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">4.7</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">Aero-Pulse Mini Drone</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Safe, indoor-friendly drone with advanced stabilization and HD camera.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-on-surface">$79.00</span>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
              </div>
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute top-4 left-4 bg-tertiary text-white text-[10px] px-3 py-1 rounded-full font-bold">EXCLUSIVE</div>
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="a high-tech telescope for kids on a tripod with metallic blue finish and clear lenses for stargazing"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK8JJa5SEShLo-iSnX2PxJka6iOzwCDjF6AaV36JraCQkVudqBSYEpqebWq-23qvyXG-znWITP0kLnBOUHMNfamGVmy2b9TuP0l3Xu28k4EaNSjKkwQ7Lyg526o1gq4MreaubUH_YMKF8IbOkbo0yKulvERHwUAC-lWYgSds2Sb22r7lKMdd-C7kTjfQzzdMPBQ18nYySFfcVALLf-fD_Z0xk3GVDynh_8eTv_kfQecm66eNJ44BNP-aZOFlH4nIqDcvjltukrZpSY"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">OUTDOOR</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">StarGazer X-200</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Pro-grade optics simplified for young astronomers. Moon filter included.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-on-surface">$189.99</span>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
              </div>
              <div className="group bg-surface-container-low rounded-lg p-6 hover:shadow-[0_20px_40px_rgba(47,47,46,0.08)] transition-all duration-300 flex flex-col">
                <div className="relative aspect-square mb-6 bg-surface-container-lowest rounded-md overflow-hidden flex items-center justify-center p-8">
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur text-secondary p-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                  </button>
                  <img
                    alt="Toy Product"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    data-alt="a colorful 3D puzzle of a medieval castle made from thick high-quality cardboard pieces with detailed textures"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9K00TXvkugvF0zfMpXZDfI6y8vc1tnrrRu4qwHAf09S8kkKGEcZ32cc6Kn6Ym3esQR-2_pCjCvPyX3Evd6EdowjL9tlmQw33yZ8PucpkWkFgPjvJdIlktzc7hS0eEVNSBbc9vQsi_5S8sx5P8QKmTuC6wgfwtpJR8UdN4IxDd4950EAfKvKDiCgjsnEB7fbfCqhDl_ARQDses2P61TcMKnyEclBs4pVs6ecCEMAYXtZoutoDeTotg0ugeRGKqqSuzFjX4Y8hsxkU"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary">PUZZLES</span>
                    <div className="flex items-center text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold ml-1">4.6</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">3D Citadel Quest</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Rebuild history with this 850-piece high-detail 3D architectural puzzle.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-on-surface">$45.00</span>
                  <button className="bg-secondary text-on-secondary p-3 rounded-md hover:bg-secondary-dim active:scale-95 transition-all shadow-md">
                    <span className="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-tertiary-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-tertiary text-on-tertiary font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">3</button>
              <span className="px-4 font-bold text-outline-variant">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">12</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-tertiary-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
