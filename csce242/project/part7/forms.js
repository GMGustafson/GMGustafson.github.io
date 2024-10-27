    document.getElementById("contact-form").onsubmit = (e) => 
        { 
            e.preventDefault(); // don't go to the action.... don't refresh the page 
        
        
            const form = e.target; 
        
            const name = form.elements["name"].value; 
            const email = form.elements["email"].value; 
            const message = form.elements["message"].value; 
            
        
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
        };
    
        
        
        