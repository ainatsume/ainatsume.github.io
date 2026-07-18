export const profile = {
  name: "Nor",
  initials: "",
  langBadge: "ENG/JP",
  avatarImage: "avatar/icon_ai.png",
  aboutMe:
    'リズムゲームとビジュアルノベルが大好き。<span style="white-space: nowrap;">夏目藍ちゃん</span>のことが本当に本当に大好き!',
  heroImage: "/hero.jpg",
};

export type LinkItem = {
  label: string;
  description: string;
  url: string;
};

export const gameLinks: LinkItem[] = [
  {
    label: "vndb",
    description: "読んだビジュアルノベル一覧",
    url: "https://vndb.org/u255843/ulist?vnlist=1",
  },
  {
    label: "MyFigureCollection",
    description: "集めているもの",
    url: "https://myfigurecollection.net/profile/natsumeai",
  },
  {
    label: "O.N.G.E.K.I.",
    description: "最高の音ゲー",
    url: "https://oceandx.net/u/NATSUME/ongeki",
  },
];

export const sprite = {
  image: "/sprite.png",
  modalImage: "/sprite-modal.jpg",
  caption: "何よりも夏目藍を愛してる！",
};

export type SocialItem = {
  label: string;
  url: string;
  icon: "x" | "youtube" | "discord" | "steam";
};

export const socials: SocialItem[] = [
  { label: "Discord", url: "https://discord.com/users/824578585385238548", icon: "discord" },
  { label: "Steam", url: "https://steamcommunity.com/id/ainatsume/", icon: "steam" },
];
