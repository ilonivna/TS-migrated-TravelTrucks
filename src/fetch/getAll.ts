import axios from "axios";

type dataProp = {
  location?: string;
  form?: string;
  price?: number;
  equipment?: string[];
  page: number;
};

export default async function getAll(data: dataProp) {
  const { location = "", form = "", price = "", equipment = [], page } = data;

  const equipmentList: Record<string, string> = {
    AC: equipment.includes("AC") ? "true" : "",
    Automatic: equipment.includes("Automatic") ? "true" : "",
    Kitchen: equipment.includes("Kitchen") ? "true" : "",
    TV: equipment.includes("TV") ? "true" : "",
    Bathroom: equipment.includes("TV") ? "TV" : "",
  };

  const params = new URLSearchParams({
    page: page.toString(),
    limit: "4",
    location,
    AC: equipmentList.AC,
    bathroom: equipmentList.Bathroom,
    kitchen: equipmentList.Kitchen,
    TV: equipmentList.TV,
    transmission: equipmentList.Automatic ? "automatic" : "",
    form,
    price: price.toString(),
  });
  try {
    const res = await axios.get(`/campers?${params}`);
    return res.data;
  } catch (e) {
    throw new Error("Failed to fetch campers");
  }
}
