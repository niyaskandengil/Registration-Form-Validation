function vali(e)
        {
            var username=/^[a-zA-z]{5,12}$/
            var input=document.getElementsByTagName("input")
            var error=document.getElementsByClassName("Error")
            if(username.test(input[0].value))
            {
                error[0].innerHTML=""
            }
            else
            {
                error[0].innerHTML="User ID must contain 5 to 12 Character"
                error[0].style.color="red"
                return false
            }

            var password=/^[a-zA-Z0-9!@#$%^&*]{7,12}$/
            if(password.test(input[1].value))
            {
                error[1].innerHTML=""
            }
            else
            {
                error[1].innerHTML="Password Must Contain 7 to 12 Characters"
                error[1].style.color="red"
                return false
            }
            
            var name=/^[a-zA-Z]{4,}$/
            if(name.test(input[2].value))
            {
                error[2].innerHTML=""
            }
            else
            {
                error[2].innerHTML="Enter A Valid Name"
                error[2].style.color="red"
                return false
            }
            var zip=/^[0-9]{6}$/
            if(zip.test(input[5].value))
            {
                error[5].innerHTML=""
            }
            else
            {
                error[5].innerHTML="Enter a Valid ZIP Code"
                error[5].style.color="red"
                return false
            }
            
            var email=/^[a-zA-Z0-9]{4,}@[a-zA-Z]{3,}.[a-zA-Z]{2,}$/
            if(email.test(input[6].value))
            {
                error[6].innerHTML=""
            }
            else
            {
                error[6].innerHTML="Enter a Valid Email Address"
                error[6].style.color="red"
                return false
            }
            
        }