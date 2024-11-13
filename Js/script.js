let profilePic = document.getElementById("profile-pic")
let isMe = true

profilePic.addEventListener("click", changePic)

function changePic() {

    if (profilePic.src == "Images/circle-profile.png"){isMe = true} 

    if (isMe){
        profilePic.src = "Images/kirito-modified.png"
        profilePic.alt = "Profile Image of Kirito from Sword Art Online"
        isMe = false
    }
    else{
        profilePic.src = "Images/circle-profile.png"
        profilePic.alt = "Profile picture of myself"
        isMe = true 
    }
    
}