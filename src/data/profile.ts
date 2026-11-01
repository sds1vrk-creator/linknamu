export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 이름, 소개, 사진, 링크로 교체하세요.
export const profile: Profile = {
  name: "sds",
  bio: "웹을 만들고 기록하는 개발자입니다.",
  imageUrl: "/test.jpeg",
  links: [
    { id: "github", title: "💻 GitHub", url: "https://github.com/sds1vrk" },
    { id: "instagram", title: "📸 Instagram", url: "https://www.instagram.com/sds1vrk" },
    { id: "velog", title: "✍️ Velog", url: "https://velog.io/@sds1vrk" },
  ],
};
