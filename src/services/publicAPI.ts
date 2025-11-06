export const BASE_URL = "https://pns0tn0c-8000.euw.devtunnels.ms";

export type UserLink = {
    id: string,
    title: string,
    url: string,
}

export type UserLinkResponse = {
    id:               number;
    user:             string;
    username:         string;
    display_name:     string;
    bio:              string;
    avatar:           null;
    theme_color:      string;
    background_color: string;
    text_color:       string;
    links:            UserLink[];
}

export async function getUserLinks(username: string)
{
    try {
        const res = await fetch(BASE_URL + `/api/links/public/${username}/`);
        const data: UserLinkResponse = await res.json()
        return data;
    } catch (error) {
// TODO
    }
}

type Tokens = {
    acces: string,
    refresh: string
};

export async function loginUser(username:string, password: string) {
    const res = await fetch(BASE_URL + "/api/accounts/token/",
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username, password})
        }
    )

    if (!res.ok)
    {
        console.error("MÁTÉ");
        return
    }
    const data: Tokens = await res.json()
    console.log(data);
}