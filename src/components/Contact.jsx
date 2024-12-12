import React from "react";

const Contact = () => {
  return (
    <div className="py-12 bg-white text-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <p className="text-gray-600">
              We are here to help! Feel free to contact us via email or phone.
            </p>

            {/* Email */}
            <div>
              <h5 className="text-sm font-semibold">Email</h5>
              <a
                href="mailto:attohfields@gmail.com"
                className="text-[#83CA13] hover:text-[#6CC531]"
              >
                attohfields@gmail.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div>
              <h5 className="text-sm font-semibold">Phone</h5>
              <p className="text-gray-600">
                <strong>Lartebiokorshie:</strong> +233249277113
              </p>
              <p className="text-gray-600">
                <strong>Spintex:</strong> +233543344036
              </p>
            </div>

            {/* Address */}
            {/* New Section with Location Links */}
            <div className="mt-[10%]">
              <h4 className="text-lg font-semibold text-center mb-4">
                Our Locations Links
              </h4>
              <div className="space-y-2">
                <p>
                  <a
                    href="https://www.google.com/maps/place/ATTOHFIELD/@5.548546,-0.230458,13z/data=!4m6!3m5!1s0xfdf975242f8080d:0x807b9e806509472a!8m2!3d5.5485464!4d-0.2304581!16s%2Fg%2F11vx13xptf?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#83CA13] hover:text-[#6CC531]"
                  >
                    Attohfield Main Office & Sales Point
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.google.com/maps/place/5%C2%B037'24.9%22N+0%C2%B004'33.0%22W/@5.623584,-0.0784029,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.623584!4d-0.075828?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#83CA13] hover:text-[#6CC531]"
                  >
                    Attohfield Spintex Sales Point
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.google.com/maps/place/5%C2%B027'54.4%22N+0%C2%B036'48.6%22W/@5.465121,-0.6160679,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.465121!4d-0.613493?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#83CA13] hover:text-[#6CC531]"
                  >
                    Attohfield Farms, Gomoa Potsin
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Map/Location Placeholder (Optional) */}
          <div className="flex flex-col justify-between items-center">
            {/* <h4 className="text-lg font-semibold mb-4">Our Locations</h4> */}
            <div className="w-full bg-gray-200 h-56 rounded-lg">
              {/* Embedded Google Map for ATTOHFIELD */}

              <iframe
                src="https://www.google.com/maps/d/embed?mid=102ZXSQcyBWSyJmYmkvsUVct9CatGgYE&ehbc=2E312F&noprof=1"
                width="100%"
                height="150%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Visit Our Farms Section */}
        <div className="mt-28 bg-gray-100 p-6 rounded-lg text-center">
          <h4 className="text-lg font-semibold mb-4">Visit Our Farms</h4>
          <p className="text-gray-600 mb-4">
            Want to visit our farms? Book a visit today and experience our
            beautiful locations.
          </p>
          {/* WhatsApp Button to Book a Visit */}
          <a
            href={`https://wa.me/+233249277113?text=${encodeURIComponent(
              "Hello! I would like to arrange a visit to your farm. Could you please let me know the available dates for a tour? Thank you!"
            )}`}
            className="bg-[#25D366] text-white py-2 px-6 rounded-lg hover:bg-[#128C7E]"
          >
            Book a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
