export type SubTopic =
  | { id: string; title: string; isPage: true }
  | { id: string; title: string; isPage?: false };

export type Chapter = {
  id: string;
  title: string;
  subTopics?: SubTopic[];
};

export const chapters: Chapter[] = [
  { id: "ch0", title: "Course Outline" },
  { id: "ch1", title: "Fitting Shop" },
  { id: "ch2", title: "Welding Shop" },
  { id: "ch3", title: "Carpentry Shop" },
  { id: "ch4", title: "Smithy Shop" },
  { id: "ch5", title: "Sheet Metal Shop" },
  { id: "ch6", title: "Foundry Shop" },
  { id: "ch7", title: "Turning Shop" },
];