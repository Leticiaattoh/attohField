import React from "react";

const Contact= () => {
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
            <div>
              <h5 className="text-sm font-semibold">Address</h5>
              <p className="text-gray-600"> Attohfield, Accra, Ghana</p>
            </div>
          </div>


          {/* Map/Location Placeholder (Optional) */}
          <div className="flex flex-col justify-between items-center">
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="w-full bg-gray-200 h-56 rounded-lg">
              {/* Embedded Google Map for ATTOHFIELD */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.696208830052!2d-0.2350715!3d5.5485517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf975242f8080d:0x807b9e806509472a!2sATTOHFIELD!5e0!3m2!1sen!2sgh!4v1637349511964"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
