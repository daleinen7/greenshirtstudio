import React from "react";
import Accordian from "../Accordian";
import styled from "styled-components";

const CancellationPolicy = (strapiClass) => {
  return (
    <section>
      <Accordian title="Cancellation Policy">
        <h4>Student Cancellation</h4>
        <p>
          If a student is withdrawing from class more than 7 days prior to start
          date, the amount of the tuition paid including a $108 non-refundable
          deposit will be kept on credit at the studio for a year, to be used on
          a future class.
        </p>

        <p>
          Alternatively, students who withdraw more than 7 days prior to the
          start date can keep $108 non-refundable deposit on file to be applied
          to a future class and any other payments made will be refunded to the
          original payment method.
        </p>

        <p>
          If you drop the class ON THE DAY OF THE FIRST CLASS OR AFTER, the full
          tuition is non-refundable, non-transferrable, and may not be kept on
          file for a future class.
        </p>

        <p>
          We appreciate you respecting this policy for the best experience for
          our instructors and students!
        </p>

        <p>Please reach out at 773-217-9565 if you have any questions.</p>

        <h4>Studio Cancellation</h4>
        <p>
          Occasionally we’ll have to cancel a call due to low enrollment. We’re
          sorry if that happens to you! If we have to cancel a class you’ve
          signed up for, we will give you at least 48 hours notice and promptly
          start your refund process.
        </p>

        <p>
          In the event that class is canceled due to circumstances beyond our
          control (including but not limited to extreme weather and pandemic
          related shutdowns), make-up classes will be scheduled as soon as it’s
          safe for our students and instructors to be together safely at the
          studio. In some cases classes may transfer to an online platform. If a
          student is unable to attend the rescheduled class due to circumstances
          beyond our control (including but not limited to extreme weather and
          pandemic related shutdowns) that student will receive credit on their
          account for the value of missed classes.
        </p>
      </Accordian>
    </section>
  );
};
export default CancellationPolicy;
