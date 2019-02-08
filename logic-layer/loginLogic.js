function LoginLogic() {
    this.checkInputs = function () {
        if ($('input:text').val().length == 0) {
            // alert('Please fill all the fields');
            return false;
        }
    }

    this.checkInputs();

    this.getInputs = function(){
        var firstName = $("#firstName").val()
        var lastName = $("#lastName").val()
        var grade = $("#odd").val()

        this.user = new User(firstName, lastName, grade);
        localStorage.setItem('this.user', JSON.stringify(this.user));
        return this.user 
    }

}

