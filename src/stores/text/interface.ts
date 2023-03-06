export interface IText {
  title: string;
  home: {
    menu: {
      about: string;
      home: string;
      contacts: string;
      blog: string;
      auth: string;
    };
    about: {
      who: string;
      whoDescription: string;
      goals: string;
      goalsDescription: string;
    };
    home: {
      title: string;
      description: string;
      button: string;
      more: string;
    };
  };
  empty: {
    title: string;
    description: string;
  };
}
