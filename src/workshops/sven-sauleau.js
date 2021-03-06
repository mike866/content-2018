const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/sven-sauleau")],
  title: "Babel",
  description: `The Babel workshop demystifies how the JSX syntax works in Babel and shows how to create your first plugin using code transformation, type analysis, or other compiler buzzwords.`,
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/qpyc-sqbve8",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/5rvtwbn2vwk",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/mwnem2nw1su",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/zcy5fb8uidi",
    },
  ],
  keywords: require("../speakers/sven-sauleau").keywords,
};
