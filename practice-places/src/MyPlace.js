import { Map } from "./UI/Map";

class MyPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: +queryParams.get("lat"),
  lng: +queryParams.get("lng"),
};
const address = queryParams.get("address");
new MyPlace(coords, address);
