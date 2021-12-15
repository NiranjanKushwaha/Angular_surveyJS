export interface creatorObjType {
  pages: [
    {
      name: string;
      elements: {
        type: string;
        name: string;
        title: string;
        hideNumber?: boolean;
        valueName?: string;
        defaultValue?: string | string[];
        isRequired?: boolean;

        choices: { value: string; text: string }[];
        otherText?: string;
        selectAllText?: string;
      }[];
    }
  ];
}
