import User from "./entities/User.entity";

export const findUser = async _id => {
    return await User.findOne({ _id });
};

export const scrap = async () => {};
