import type Organization from "@/types/organization";

type Constants = {
  defaultOrg: string;
  organizations: { [key: string]: Organization };
};

const constants: Constants = {
  defaultOrg: 'avergent',
  organizations: {
    avergent: {
      imageDimensions: {
        height: 99,
        widht: 189,
      },
      logoURL: '/images/organizations/avergent-logo.webp',
      name: 'Avergent',
      pathname: '/avergent',
      websiteURL: 'https://www.avergent.com/',
    },
    tcp: {
      imageDimensions: {
        height: 75,
        widht: 87,
      },
      logoURL: '/images/organizations/tcp-logo.png',
      name: 'Trinity Captive Group',
      pathname: '/trinity-captive-group',
      websiteURL: 'https://www.trinitycaptivegroup.com/',
    }
  }
};

export default constants;