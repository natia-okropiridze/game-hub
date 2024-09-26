import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d9e4be9ebd9d451d9eaf9ba960e5f587",
  },
});
