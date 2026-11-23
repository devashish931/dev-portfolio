type SkillBase = {
  name: string;
  category: string;
};

export type Skill =
  | (SkillBase & {
      hidden: true;
      value?: string;
      url?: string;
      featured?: boolean;
    })
  | (SkillBase & {
      value: string;
      hidden?: false;
      url: string;
      featured: boolean;
    });
