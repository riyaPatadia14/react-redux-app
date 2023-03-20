const UserData = "http://192.168.29.69:3031";
const MockData = "https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register";
const Management =
  "https://63ea1cc8e0ac9368d64a8759.mockapi.io/bank_management";
const Index = {
  Login: UserData + "/api/auth",
  FETCH_API: MockData,
  FETCH_DETAIL_API: Management,
};

export default Index;
