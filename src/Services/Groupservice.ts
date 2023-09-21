import { AxiosInstance } from "axios";
import { Group } from "../types/models/Group";
import defaultAxiosInstance from "../config/Api";

const GroupService = (api: AxiosInstance = defaultAxiosInstance ) => ({
  getGroup: async (groupID: string): Promise<Group> => {
    const { data } = await api.get<Group>(`/group/${groupID}`);
    return data;
  },

  updateGroup: (group : Group) => {
    return api.put(`/group/${group.id}`, group);
  },

  createGroup: (group : Group) => {
    return api.post('/group/createGroup', group).then((res) => {
      return res.data;
    });
  },

  getAllGroups: () => {
    return api.get(`/group`);
  },

  deleteGroup: (id: string) => {
    return api.delete(`/group/${id}`);
  },
});

export default GroupService;