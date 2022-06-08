function launchcode() {
    var code = document.getElementById("command").value
    if (code == "help") {
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext">Commands>></p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-help > Check all of the commands</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-about > About me</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-projects > All of my projects</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-games > All of my games</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-contact > Send a message to me</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-repo > Github source code</p>')
        sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="blue">-clear > Clear all commands</p>')
        window.location.reload()
        setTimeout(() => {
            window.onload = document.getElementById('command').select();
        }, 100);
    } else {
        if (code == "about") {
            sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext">Hello, my name is Nik and I am an indie game developer and a web designer. Do "<span class="blue">projects</span>" or "<span class="blue">games</span>" to check them out.</p>')
            window.location.reload()
        } else {
            if (code == "projects") {
                sessionStorage.setItem("open", "projects")
                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext">Opening projects...</p>')
                window.location.reload()
            } else {
                if (code == "games") {
                    sessionStorage.setItem("open", "games")
                    sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext">Opening games...</p>')
                    window.location.reload()
                } else {
                    if (code == "clear") {
                        sessionStorage.setItem("txt", '<h3 class="maintext">Type "<span class="blue">help</span>" to see the list of commands</h3>')
                        window.location.reload()
                    } else {
                        if (code == "repo") {
                            sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext">Opening repo...</p>')
                            window.open("https://github.com/Nik0olas/Terminal-Website")
                            window.location.reload()
                        } else {
                            if (code == "contact") {
                                // This will only work if you use netlify
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><form name="contact" method="POST" data-netlify="true"></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><label>Your Name: <input type="text" name="name" /></label></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"></p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><label>Message: <textarea name="message"></textarea></label></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"></p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"><button type="submit">Send</button></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"></p></p>')
                                sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="maintext"></form></p>')
                                window.location.reload()
                            } else {
                                if (code != "") {
                                    sessionStorage.setItem("txt", sessionStorage.getItem("txt") + '<p class="red">Invalid Command</p>')
                                    window.location.reload()
                                } else {
                                    window.location.reload()
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}

