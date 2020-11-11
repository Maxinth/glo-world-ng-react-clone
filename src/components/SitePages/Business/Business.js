import React from "react";
import SharedHeader from "../SharedContent/SharedHeader";
import "./business.css";
import { Link } from "react-router-dom";
const Business = () => {
  return (
    <section className="business">
      <SharedHeader heading="business" />
      <section className="shared__contentContainer">
        <p>
          Glo Business provides enterprise grade solutions and services for
          corporate organisations. These include Corporate Voice Packages,
          Broadband Internet services, Gateway and Carrier services, Fixed and
          Leased lines, Data centre services, Mobile Money Services and much
          more together with a variant of other solutions for SMEs. Some of our
          business grade solutions include
        </p>

        <ul className="business__nav">
          <li>
            <Link to="/business/corporate-packages">Corporate Packages</Link>
          </li>
          <li>
            <Link to="/business/enterprise-solutions">
              Enterprise Solutions
            </Link>
          </li>
          <li>
            <Link to="/business/mobile-money">Mobile Money</Link>
          </li>
          <li>
            <Link to="/business/glo-gateway">Glo Gateway</Link>
          </li>
          <li>
            <Link to="/business/public-sector">Public Sector</Link>
          </li>
          <li>
            <Link to="/business/sme">SME</Link>
          </li>
        </ul>
        <p>
          Our portfolio of solutions includes efficient and cost effective
          connectivity for voice, video and data applications required by modern
          businesses.
        </p>
        <section className="business__inDetail">
          <div className="business__detail">
            <h4>Glo Business Managed Services</h4>
            <p>
              Glo Business Managed Services provide fully outsourced network
              deployment and management arrangements, including IP telephony,
              managed LAN via fibre cable, fast Ethernet, Wifi, messaging, call
              centre management, virtual private networks (VPNs), managed
              firewalls and monitoring/reporting of network servers.
            </p>
            <p>
              Glo Business adopts a consultative approach to delivering Managed
              Services, considering the business drivers, associated risks and
              operational impact of delivering solution and operational support.
              Glo Business engages with key clients and business owners or its
              own Consultants to understand the business and the brief and to
              assist with design, delivery, implementation and operational
              support
            </p>
          </div>
          <div className="business__detail">
            <h4>Glo Business Domestic Leased Lines</h4>
            <p>
              Glo Business offers Leased Line connectivity to interconnect your
              important nodal centres such as primary data centre, back up site,
              regional hubs and local offices to your main office. <br />
              Glo Business Leased Circuits enable you to combine a variety of
              telecommunication applications, including point-to-point voice,
              high-speed data, and video transmission. Lease Line connectivity
              from Glo Business is an ideal solution for connections that are
              time and/or content sensitive as well as for establishing an
              integrated network to handle a variety of functions within an
              organization’s wide area network
            </p>
          </div>
          <div className="business__detail">
            <h4>Glo Business International Private Leased Circuits (IPLC)</h4>
            <p>
              Glo Business Solutions IPLC (International Private Leased Circuit)
              is a point-to-point private line solution that organizations and
              service providers use to communicate between offices that are
              geographically dispersed throughout the world. This dedicated
              private link can be used for business data exchange, voice, video
              conferencing, internet access or any other form of
              telecommunication. <br />
              Glo Business Solutions IPLC provides a dedicated, end-to-end link
              that runs from Nigeria to any international location via our
              wholly owned submarine cable (no consortium) from Lagos to London
              at speeds that match your business requirements and ensure
              quality. The service provides wide global reach and employs
              diversified routes via efficient and virtually error-free
              terrestrial connectivity, improving data throughput and
              organizational productivity.
            </p>
          </div>
          <div className="business__detail">
            <h4>Glo Business Multi-Protocol Label Switching (MPLS) Service</h4>
            <p>
              Based on existing National Optic Fibre Coverage, Globacom’s
              Multi-protocol Label Switching (MPLS) Service provide scalable
              virtual private networks (VPNs) and end-to-end quality of service
              (QoS), enabling efficient utilization of provisioned networks to
              meet future growth and rapid fault correction of link and node
              failure. The MPLS technology also helps deliver highly scalable,
              differentiated end-to-end IP services with simpler configuration,
              management, and provisioning.
            </p>
          </div>
          <div className="business__detail">
            <h4>Glo Business Internet Services</h4>
            <p>
              Leveraging on our wholly owned submarine optic fibre cable, Glo
              Business offers dedicated high speed internet services with
              exceptional uptime. Glo Business Internet access is at present
              available across Nigeria; the service is also available in Ghana
              and Republic of Benin. The Glo Business network offers
              connectivity across all the cities of Nigeria through the
              Glo-owned terrestrial fibre network.
            </p>
          </div>
          <div className="business__detail">
            <h4>Customer Service Support Desk</h4>
            <p className="support">
              Glo Business has a dedicated customer service support desk which
              can be reached 24x7x365 via phone and email.
            </p>
            <p>Email: glo1care@gloworld.com</p>
            <p>Support Contact Phone: 08077701030.</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Business;
