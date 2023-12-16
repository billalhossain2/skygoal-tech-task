const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "About",
  "Schedules",
  "Pricing",
  "Membership",
  "Joins",
];

const Footer = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h3 className="md:text-[40px] text-[30px] font-semibold">
          Student Special: Discounted rates <br /> on tropical getaways!
        </h3>
        <p className="my-8">
          Let’s embody your beautiful ideas together, simplify the <br /> way
          you visualize your next big things.
        </p>
      </div>

      <ul className="flex md:flex-row flex-col justify-center font-semibold md:flex-wrap lg:gap-12 md:gap-8 gap-5">
        {
          footerLinks.map((linkItem, key) => (<li key={key}>{linkItem}</li>))
        }
      </ul>
    </div>
  );
};

export default Footer;
