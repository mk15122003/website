const CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto";

export function iepciImage(
  filename: string,
  width = 1920,
  height?: number
): string {
  const h = height ? `,h=${height}` : "";
  return `${CDN},w=${width}${h},fit=crop/MU69DTjmf268ETCl/${filename}`;
}

export const images = {
  logo: iepciImage("iepci-logo-LQB77ZTCkRFZpoXA.png", 375),
  hero: iepciImage("homepage-9YhJ9BInKPkvAR35.jpg", 1920),
  heroMobile: iepciImage("homepage-9YhJ9BInKPkvAR35.jpg", 768),
  headerBg: iepciImage("rectangle-69-2lhVua9c7QE8ztFv.png", 1920, 787),
  substation: iepciImage("substation-VUlMgo09rXyOVG38.jpg", 1440),
  containerisedSubstation: iepciImage(
    "containerised-substation-IwbRN9mD36oFGHnX.jpg",
    1440
  ),
  switchgear: iepciImage("11kv-switchgear-4XIjThnXVWoHoL6b.jpg", 1440),
  automation: iepciImage(
    "chatgpt-image-25-d-nn.-2026-n.-14_55_13-lo6zIr0FCqi800rQ.png",
    1440
  ),
  solar: iepciImage("unnamed-ESoXPfZMRAuZ4Xys.jpg", 1440),
  industrial: iepciImage(
    "zbynek-burival-v4zyjzj3w4m-unsplash-sGENGaJB4PwL1JOf.jpg",
    1440
  ),
  powerLines: iepciImage(
    "jeroen-van-de-water-aqozmgct6si-unsplash-ty8RRQSXjIbgmXZq.jpg",
    1440
  ),
  controlPanel: iepciImage(
    "gemini_generated_image_n2rsrgn2rsrgn2rs-WCBo2HlZu6G52tOn.png",
    1440
  ),
} as const;
