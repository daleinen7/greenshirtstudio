import React from "react";
import { Script } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";
import styled from "styled-components";

const Events = ({ data }) => {
  var exampleCallback = function () {
    console.log("Order complete!");
  };

  window.EBWidgets.createWidget({
    // Required
    widgetType: "checkout",
    eventId: "431248725547",
    iframeContainerId: "eventbrite-widget-container-431248725547",

    // Optional
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  });

  return (
    <Layout>
      <h2>Events</h2>
      <Script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />

      <div id="eventbrite-widget-container-431248725547"></div>
    </Layout>
  );
};
export default Events;

export const Head = () => (
  <SEO
    title={`Events - Green Shirt Studio`}
    description={`Events for Green Shirt Studio`}
  />
);
