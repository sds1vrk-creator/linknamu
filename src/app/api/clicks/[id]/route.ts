import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const linkIds = new Set(profile.links.map((link) => link.id));

// 해당 링크의 클릭 수를 1 늘리고, 늘어난 값을 반환합니다.
export async function POST(_request: Request, { params }: RouteContext<"/api/clicks/[id]">) {
  const { id } = await params;
  // 등록된 링크만 집계해서 임의의 id로 문서가 만들어지는 것을 막습니다.
  if (!linkIds.has(id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return Response.json({ id, count: doc?.count ?? 0 });
}
