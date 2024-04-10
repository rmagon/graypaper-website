import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import Graypaper from "../images/graypaper.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <h1 className="text-center font-bold text-3xl mt-8">
        JOIN-ACCUMULATE MACHINE:
        <br />
        <span className="whitespace-nowrap">A SEMI-COHERENT</span> SCALABLE
        TRUSTLESS VM
      </h1>
      <div className="abstract indent-pars">
        <p className="no-indent" style={{ textAlign: "justify" }}>
          <span style={{ fontVariant: "small-caps" }}>Abstract.</span> We
          present a comprehensive and formal definition of{" "}
          <span style={{ fontVariant: "small-caps" }}>jam</span>, a protocol
          combining elements of both <i>Polkadot</i> and <i>Ethereum</i>. In a
          single coherent model,
          <span style={{ fontVariant: "small-caps" }}>jam</span> provides a
          global singleton permissionless object environment－much like the
          smart-contract environment pioneered by Ethereum－paired with secure
          sideband computation parallelized over a scalable node network, a
          proposition pioneered by Polkadot.
        </p>
        <p style={{ textAlign: "justify", fontFamily: "Computer Modern" }}>
          <span style={{ fontVariant: "small-caps" }}>jam</span> introduces a
          decentralized hybrid system offering smart-contract functionality
          structured around a secure and scalable in-core/on-chain dualism.
          While the smart-contract functionality implies some similarities with
          Ethereum's paradigm, the overall model of the service offered is
          driven largely by underlying architecture of Polkadot.
        </p>
        <p style={{ textAlign: "justify", fontFamily: "Computer Modern" }}>
          <span style={{ fontVariant: "small-caps" }}>jam</span> is
          permissionless in nature, allowing anyone to deploy code as a service
          on it for a fee commensurate with the resources this code utilizes and
          to induce execution of this code through the procurement and
          allocation of <i>core-time</i>, a metric of resilient and ubiquitous
          computation, somewhat similar to the purchasing of gas in Ethereum. We
          already envision a Polkadot-compatible <i>CoreChains</i> service.
        </p>
        <a href={Graypaper}>
          <p>Read the whole Graypaper.</p>
        </a>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>JAM</title>

    <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
    <meta
      name="description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://polkadot.network" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JAM Graypaper" />
    <meta
      property="og:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      property="og:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="polkadot.network" />
    <meta property="twitter:url" content="https://polkadot.network" />
    <meta name="twitter:title" content="JAM Graypaper" />
    <meta
      name="twitter:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      name="twitter:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />
  </>
);
