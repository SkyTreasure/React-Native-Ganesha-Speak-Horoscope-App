import fetchAPI from "../utils/fetch";

export default function getHoroscope() {
  const request = {
    url:
      "http://feeds.ganeshaspeaks.com/10022019/gsAndroid/gsAndroidpredictions.feed",
    method: "GET",
    headers: {
      Accept: "application/xml",
      "Content-Type": "application/xml"
    }
  };
  // console.log("COD REQUEST", request);
  return fetchAPI(request, true);
}
