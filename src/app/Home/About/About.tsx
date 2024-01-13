import React from "react";

function About() {
  return (
    <div>
      <div className="block rounded-lg my-10 mx-16 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="p-10">
          <h5 className="mb-2 text-3xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">
            About Us
          </h5>
          <p className="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
            The Harvest Tabernacle Church (H.T.C.) is a Christian non-profit
            organization that started in January 2003. The purpose for the
            establishment of this denomination was a response to a call for a
            Church that would nurture believers to respond to a call by God to
            join Him in His mission – to reconcile people with God and lead them
            to maturity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
