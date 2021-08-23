firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        // console.log(uid)
      firebase.database().ref(`admin/${uid}`).once('value',(data)=>{
       let head2 = document.getElementById('head2')
      //  console.log(data.val())
       head2.innerHTML +="Welcome " + data.val().username + ","
 
      })  
  
    } else {
      window.location = "login2.html"
    } 
  });
  
  let logout = () => {
    firebase.auth().signOut()
      .then(() => {
        window.location = "login2.html"
      })
  
  }