import ModelUser from "../models/modUser";

class ServiceUser {
    constructor() {
        this.modelUser = new ModelUser();
    }

    async makeRegistration(email, password) {
        const user = this.modelUser.createUser(email, password);
        return user;
    }

    async findUserEmailAndPassword(_id) {
        const infoIdPassword = this.modelUser.findEmailAndPassword(_id);
        return infoIdPassword;
    }
    async findUser(id) {
        const user = await this.modelUser.findByUserId(id);
        return user;
    }
    async findScraps(id) {
        const scraps = await this.modelUser.findScrapsById(id);
        return scraps;
    }
}

export default ServiceUser;
