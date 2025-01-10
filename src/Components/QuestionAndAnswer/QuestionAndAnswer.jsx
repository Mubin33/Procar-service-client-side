import React from "react";

const QuestionAndAnswer = () => {
  return (
    <div className="md:px-10 my-16 lg:px-28 px-4">
        <h1 className="mb-5 text-3xl font-semibold text-center">Let's find out some Question Answer</h1>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What types of services do you offer, and how can I choose the right
          one for me?
        </div>
        <div className="collapse-content">
          <p className="text-xs"> To choose the right service, consider
            your current requirements, budget, and long-term goals. You can also
            book a free consultation with our experts, who will guide you
            through the best options based on your needs. Visit our "Services"
            page for detailed descriptions of each service and their benefits.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How does your pricing structure work, and are there any hidden fees?
        </div>
        <div className="collapse-content">
          <p className="text-xs">
            Our pricing is transparent and designed to provide value for your
            investment. Each service package is clearly outlined with no hidden
            charges. We offer flexible pricing options such as one-time
            payments, monthly subscriptions, and customized quotes for larger
            projects. If you’re unsure about which pricing plan suits your
            needs, reach out to our customer support team. We’ll explain the
            details and help you make an informed decision. Any additional
            costs, if applicable, are always discussed upfront before
            proceeding.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What happens if I’m not satisfied with the service provided?
        </div>
        <div className="collapse-content">
          <p className="text-xs">
            Your satisfaction is our top priority. If you’re not happy with our
            service, we encourage you to let us know immediately. We offer the
            following options to address your concerns: Revisions: For many of
            our services, we provide a set number of revisions to ensure you get
            the desired results.
            <br />
            Refund Policy: Depending on the service and the circumstances, we
            offer refunds or credits for future projects.
            <br />
            Escalation: If the issue persists, you can escalate it to our senior
            management team, who will work with you to find a resolution. Our
            goal is to build lasting relationships with our clients by
            consistently delivering high-quality services and exceptional
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
