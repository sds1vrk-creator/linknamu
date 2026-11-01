import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
}

// 개발 모드의 핫 리로드나 서버리스 재사용 시 연결이 계속 늘어나지 않도록 전역에 캐시합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: Promise<MongoClient>;
};

function getClient() {
  globalForMongo._mongoClient ??= new MongoClient(uri!).connect().catch((error) => {
    // 연결에 실패하면 캐시를 비워서 다음 요청 때 다시 연결을 시도합니다.
    globalForMongo._mongoClient = undefined;
    throw error;
  });
  return globalForMongo._mongoClient;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<{ _id: string; count: number }>("clicks");
}
