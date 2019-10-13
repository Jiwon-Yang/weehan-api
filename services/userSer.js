import ModelUser from "../models/modUser";

class UserService {
    constructor() {
        this.modelUser = new ModelUser();
    }
    async findUser(id) {
        const user = await this.modelUser.findByUserId(id);
        return user;
    }
    async findScraps(id) {
        const scraps = await this.modelUser.findScrapsById(id);
        return scraps;
    }
    //async findScrap(user_id) {}
}

export default UserService;
