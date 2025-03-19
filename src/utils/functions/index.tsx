import { IFile } from "../../Interfaces";


export const doesFileObjectExist = (arr: IFile[], id: string) => {
    return arr.some(obj => obj.id === id);
};
