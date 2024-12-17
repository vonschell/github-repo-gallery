//Global variables
//division where your profile information will appear
const overview = document.querySelector(".overview");
const username = "vonschell";

const gitProfileInfo = async function() {
    const profileInfo = await fetch (`https://api.github.com/users/${username}`);
    const data = await profileInfo.json();
    console.log(data);
};

gitProfileInfo();