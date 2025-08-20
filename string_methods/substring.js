const fame="my name is vaishnav";
const sub=fame.substring(0,10); // index based

console.log(sub);

const username = "prakashnarsingrao sakari";
const maxLength = 10;

function getDisplayName(username, maxLength) {
    return username.length > maxLength ? username.substring(0, maxLength) + "..." : username;
}

const displayName = getDisplayName(username, maxLength);
console.log(displayName); // Output: "prakashnar..."