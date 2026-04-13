export type Project = {
  name: string;
  linkToSite: string;
  imageUrl: string;
  details: string;
};

const imagePath = "assets/images/";

export const projectData: Record<string, Project> = {
  "words-win": {
    name: "Words Win",
    linkToSite: "https://words.win",
    imageUrl: imagePath + "words-win.jpg",
    details:
      "Preact Progressive web app using Firebase and Sendgrid. Use for any occasion.",
  },
  "to-get-for-us": {
    name: "To Get For Us",
    linkToSite: "https://togetforus.web.app",
    imageUrl: imagePath + "to-get-for-us.jpg",
    details:
      "React Progressive web app with a firebase backend. A list app that allows you to share lists with friends and family.",
  },
  copycodes: {
    name: "CopyCodes(deprecated)",
    linkToSite: "https://copycodes.io",
    imageUrl: imagePath + "copycodes.png",
    details:
      "Ionic / Angular 11 Progressive web app with a Google Cloud Platform backend in nodejs and stripe/twilio for payments/texts. I act as the sole engineer and technical liaison.",
  },
  "project-samson": {
    name: "Project Samson",
    linkToSite: "https://projectsamson.herokuapp.com/sign-in/",
    imageUrl: imagePath + "project-samson.png",
    details:
      "Angular 8 Progressive web app with firebase: the most extensive and customizable workout app ever created. Still in progress.",
  },
  resume: {
    name: "Portfolio",
    linkToSite: "https://michaelguyharrison.com/",
    imageUrl: imagePath + "resume-site.png",
    details:
      "Angular 6 app for promoting my work, skillset, and experience. Still in progress.",
  },
};

export function projects(): string[] {
  return Object.keys(projectData);
}
