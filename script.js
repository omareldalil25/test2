const users = {
    "hager": "hager0000",
    "omar": "omars0000"
  };
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (users[username] === password) {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("videoContainer").style.display = "flex";
      startVideoChat();
    } else {
      alert("خطأ في اسم المستخدم أو كلمة المرور");
    }
  }
  
  async function startVideoChat() {
    const localVideo = document.getElementById("localVideo");
    const remoteVideo = document.getElementById("remoteVideo");
  
    try {
      // فتح الكاميرا المحلية
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true });
      localVideo.srcObject = localStream;
  
      // محاكاة لكاميرا ثانية باستخدام نفس الفيديو
      remoteVideo.srcObject = localStream;
  
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  }
  