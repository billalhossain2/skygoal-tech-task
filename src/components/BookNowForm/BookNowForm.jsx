import bookingImg from "../../assets/booking-bg.png";

const BookNowForm = () => {
  return (
    <div className="flex md:flex-row flex-col items-center lg:gap-32 md:gap-16 gap-8 px-3 mb-32">
      <div>
        <img src={bookingImg} alt="" />
      </div>
      <div>
        <h3 className="text-[32px] font-extrabold">Book now</h3>
        <p className="mt-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <form className="space-y-3" action="#">
          <div>
            <label className="font-medium block mb-2" htmlFor="city">City</label>
            <input
              className="w-full bg-gray-200 rounded-lg outline-none p-2"
              type="text"
              placeholder="Placeholder"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="font-medium block mb-2" htmlFor="Arrival">Arrival</label>
              <input
                className="w-full bg-gray-200 rounded-lg outline-none p-2"
                type="text"
                placeholder="10 October"
              />
            </div>

            <div>
              <label className="font-medium block mb-2" htmlFor="Departure">Departure</label>
              <input
                className="w-full bg-gray-200 rounded-lg outline-none p-2"
                type="text"
                placeholder="11 October"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pb-8">
            <div>
              <label className="font-medium block mb-2" htmlFor="Star">Star</label>
              <div className="flex items-center">
                <button className="font-bold bg-gray-200 px-4 py-[18px] rounded-l-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="5"
                    viewBox="0 0 15 5"
                    fill="none"
                  >
                    <path
                      d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <input
                  className="w-full bg-gray-200 outline-none p-2 text-center"
                  type="number"
                  placeholder="4"
                />
                <button className="font-bold bg-gray-200 px-4 py-[13px] rounded-r-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2" htmlFor="Room">Room</label>
              <div className="flex items-center">
                <button className="font-bold bg-gray-200 px-4 py-[18px] rounded-l-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="5"
                    viewBox="0 0 15 5"
                    fill="none"
                  >
                    <path
                      d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <input
                  className="w-full bg-gray-200 outline-none p-2 text-center"
                  type="number"
                  placeholder="1"
                />
                <button className="font-bold bg-gray-200 px-4 py-[13px] rounded-r-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button className="bg-[#000000] px-5 py-2 rounded-lg text-white">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
