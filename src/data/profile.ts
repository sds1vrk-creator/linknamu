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
  name: "김링크",
  bio: "웹을 만들고 기록하는 개발자입니다.",
  imageUrl: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
