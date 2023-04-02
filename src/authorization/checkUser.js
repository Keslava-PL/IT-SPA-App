export async function checkUser(inputEmail){
    
    let flag;
    await fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
        const search = users.some(function(u) {
            if(u.email === inputEmail)
                return true;
        });
       
        if(search === true){
            flag = true;
        }else{
            flag = false;
        }
        
    });



    
    return flag;
}