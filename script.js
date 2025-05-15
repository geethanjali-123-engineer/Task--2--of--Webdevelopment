 var RE=/^.+@.+|..{3}$/;
        var RE1=/^[a-zA-Z]+$/;
        var RE2=/^[0-a]+$/;
        function validateForm()
        {
            if(document.f1.fname.value=="")
        {
            window.alert("first name should not be empty");
            document.f1.fname.focus();
            return false;
        }
        else
        if(RE1.test(document.f1.fname.value)==false)
        {
            window.alert("invalid format");
            return false;
        }
        else
        if(document.f1.fname.value.length<6)
        {
            window.alert("first name must be atleast 6 characters");
            document.f1.fname.focus();
            return false;
        }
         if(document.f1.lname.value=="")
        {
            window.alert("last name should not be empty");
            document.f1.lname.focus();
            return false;
        }
        else
        if(RE1.test(document.f1.lname.value)==false)
        {
            window.alert("invalid format");
            return false;
        }
        else
        if(document.f1.lname.value.length<6)
        {
            window.alert("last name should must be atleast 6 characters");
            document.f1.lname.focus();
            return false;
        }
        else
        if(document.f1.eid.value==""||document.f1.eid.value==null)
        {
            window.alert("email should not be empty");
            document.f1.eid.focus();
            return false;
        }
        else
        if(RE.test(document.f1.eid.value)==false)
        {
            window.alert("invalid emailid");
            document.f1.eid.focus();
            return false;
        }
        else
        {
            window.alert("your entire given input is valid.......!");
            return false;
        }
        }
        addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        const todoItem = document.createElement('li');
        todoItem.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todoListUl.removeChild(todoItem);
        });
        todoItem.appendChild(deleteBtn);
        todoListUl.appendChild(todoItem);
        todoInput.value = '';
    }
});