function Timer(timeInterval) { 
        $(".timer").html(timeInterval)   
        this.countDown = null;
        this.timeOut = false;
        this.startCountDown = (time)=>{
            this.countDown = setInterval(()=>{
                $(".timer").html(time)
                time--; 
                console.log(time);             
                if (time < 0){
                    this.timeOut = true;          
                    clearInterval(this.countDown)
                }
                
            }, 1000); 
        }
        this.startCountDown(timeInterval);  
    }
