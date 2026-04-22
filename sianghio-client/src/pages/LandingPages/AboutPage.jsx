import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import tote from '../../assets/img/tote.jpg';
import tumbler from '../../assets/img/tumbler.jpg';
import lanyard from '../../assets/img/lanyard.jpg';
import jacket from '../../assets/img/jacket.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* About Store Section */}
      <section className="border-y-2 border-[#34418f] bg-[#34418f] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-blue-300 bg-blue-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-blue-200">
              <img 
                src={logo} 
                alt="BulldogEx" 
                className="h-32 w-32 rounded-full border-2 border-[#34418f] bg-white object-contain" 
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Overview Section */}
      <section className="border-y-2 border-[#34418f] bg-[#34418f] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#34418f]">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
            <p className="text-2xl font-bold text-[#34418f]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
            <p className="text-2xl font-bold text-[#34418f]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
            <p className="text-2xl font-bold text-[#34418f]">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
            <p className="text-2xl font-bold text-[#34418f]">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      {/* Store Flow + Category Grid Section */}
      <section className="border-y-2 border-[#34418f] bg-[#34418f] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-[#34418f]">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-[#34418f]">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#34418f] bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-[#34418f]">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#34418f] bg-yellow-500 p-6">
            <p className="text-[11px] !font-bold uppercase tracking-[0.28em] text-[#34418f]">
              Category Grid
            </p>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-blue-200 overflow-hidden">
                <img 
                  src={tote} 
                  alt="Tote Bag" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-blue-200 overflow-hidden">
                <img 
                  src={tumbler} 
                  alt="Tumbler" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-blue-200 overflow-hidden">
                <img 
                  src={lanyard} 
                  alt="Lanyard" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-blue-200 overflow-hidden">
                <img 
                  src={jacket} 
                  alt="Jacket" 
                  className="h-full w-full object-cover" 
                />
              </div>
            </div>
            <Button to="/products" className="mt-6">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;