import User from "./entities/User.entity";

class ModelUser {
    async createUser(email, password) {
        const user = await User.create({ email, password });
        return user;
    }
    async findUserById(_id) {
        const user = await User.findOne({ _id });
        return user;
    }
    async findScrapsById(_id) {
        //유저가 스크랩한 모든 articles 목록 보기
        const scraps = await User.findOne({ _id }).select({
            scraps: 1,
            _id: 0
        });
        return scraps;
    }
    async addScrap(newScraps, _id) {
        await User.update({ _id }, { $set: { scraps: newScraps } });
    }

    async removeScrap(newScraps, _id) {
        await User.update({ _id }, { $set: { scraps: newScraps } });
    }
}

export default ModelUser;
