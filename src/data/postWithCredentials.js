import {getAuth} from 'firebase/auth';

export const postWithCredentials = async (url,bodyData) => {
    try{
        const user = getAuth().currentUser;
        if (!user){
            throw new Error("User not authenticated");
        }
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                Authtoken: await user.getIdToken(),
                'Content-Type': 'application/json',
            }
        })
        return response;
    }catch (error){
        console.error("Error requesting to join group:", error);
    }

}
