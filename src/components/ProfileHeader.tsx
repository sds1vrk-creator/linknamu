import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
      />
      <h1 className="mt-4 text-2xl font-bold text-gray-900">{name}</h1>
      <p className="mt-2 text-sm text-gray-600">{bio}</p>
    </header>
  );
}
