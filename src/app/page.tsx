import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-gradient-to-b from-green-50 to-emerald-100 px-4 py-10 sm:items-center">
      {/* 와이어프레임의 바깥 프레임: 프로필(상단) + 링크 카드(하단) */}
      <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white px-6 py-10 shadow-lg">
        <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

        <nav className="mt-10" aria-label="링크 목록">
          <LinkList links={profile.links} />
        </nav>
      </div>
    </main>
  );
}
