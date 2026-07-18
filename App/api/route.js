// 카카오 모빌리티 길찾기 API를 서버에서 대신 호출하는 프록시 (REST 키를 브라우저에 노출하지 않기 위함)
export default async function handler(req, res) {
  const { originX, originY, destX, destY } = req.query;
  if (!originX || !originY || !destX || !destY) {
    res.status(400).json({ error: "missing params" });
    return;
  }

  const key = process.env.KAKAO_REST_KEY;
  if (!key) {
    res.status(500).json({ error: "server missing KAKAO_REST_KEY" });
    return;
  }

  const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${originX},${originY}&destination=${destX},${destY}`;

  try {
    const upstream = await fetch(url, { headers: { Authorization: `KakaoAK ${key}` } });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: "route fetch failed" });
  }
}
