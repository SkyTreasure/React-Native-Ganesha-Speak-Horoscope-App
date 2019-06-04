import { observable, action, computed } from "mobx";
export default class UserStore {
  @observable fullname = "";
  @observable city = "";
  @observable email = "";
  @observable phone = "";
  @observable gender = "Male";
  @observable dob = "";
  @observable token = "";

  @observable searchQuery = "";

  @observable history = [];

  @observable searchResponse = {};
}
