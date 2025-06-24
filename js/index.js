
// ====================\/\/\/ Register Element ====================/\/\/\


const FRM = document.getElementById('formRegister')
if (FRM) {
    FRM.addEventListener('submit', function (event) {
        const username = document.getElementById('name').value
        const email = document.getElementById('email').value
        const pass = document.getElementById('password').value
        const succ = document.getElementById('succ')
        const notSucc = document.getElementById('NotSucc')
        event.preventDefault()
        const user = {
            name: username,
            email: email,
            password: pass
        }
        if (localStorage.getItem(email)) {
            notSucc.classList.replace('d-none', 'd-block');
            succ.classList.replace('d-block', 'd-none')
        } else {
            localStorage.setItem(email, JSON.stringify(user))
            notSucc.classList.replace('d-block', 'd-none');
            succ.classList.replace('d-none', 'd-block')
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }
    })
}

// ====================/\/\/\ Login \/\/\/ ================== \\
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('LogEmail').value;
        const pass = document.getElementById('LogPass').value;
        const inPass = document.getElementById('inPass');
        const inEmail = document.getElementById('inEmail');
        const user = localStorage.getItem(email);
        if (user) {
            let parsedUser = JSON.parse(user);
            if (parsedUser.password === pass) {
                localStorage.setItem('user', JSON.stringify(parsedUser));
                window.location.href = 'index.html';
            } else {
                inPass.classList.replace('d-none', 'd-block');
            }
        } else {
            inEmail.classList.replace('d-none', 'd-block');
        }
    });
}



// =================/=/=/=/=/==//= Logout ===================/=/=/=//=//=/ \\
const welcomeMGS = document.getElementById('welcomeMGS');


    const user = localStorage.getItem('user')
    if(user){
        const currentUser = JSON.parse(user);
        welcomeMGS.innerHTML = `Welcome Mr. ${currentUser.name}`;
        document.getElementById('btnOut').removeAttribute('hidden');
    }else{
        welcomeMGS.innerHTML = `Hallo , please Login First <a href = "login.html">Login</a>`;
    }
    document.getElementById('btnOut').addEventListener('click', function(){
        localStorage.removeItem('user')
        window.location.href = 'login.html'
    })