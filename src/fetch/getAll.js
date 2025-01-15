import axios from "axios";

export default async function getAll(data) {
  const { location, form, price, equipment, page } = data;
  const equipmentList = {
    AC: "",
    Automatic: "",
    Kitchen: "",
    TV: "",
    Bathroom: "",
  };
  Object.keys(equipmentList).forEach((item) => {
    if (equipment.includes(item)) {
      equipmentList[item] = true;
    } else {
      equipmentList[item] = "";
    }
  });

  const isLocation = location ? location : "";
  const isForm = form ? form : "";
  const isPrice = price ? price : "";
  const params = new URLSearchParams({
    page: page,
    limit: 4,
    location: isLocation,
    AC: equipmentList.AC,
    bathroom: equipmentList.Bathroom,
    kitchen: equipmentList.Kitchen,
    TV: equipmentList.TV,
    transmission: equipmentList.Automatic ? "automatic" : "",
    form: isForm,
    price: isPrice,
  });
  try {
    const res = await axios.get(`/campers?${params}`);
    return res.data;
  } catch (e) {
    throw new Error("Failed to fetch campers");
  }
}
