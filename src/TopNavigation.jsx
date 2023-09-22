import React from "react"
import "./App.css"
import "./normalize.css"


function TopNavigation(){
    return(<div>
      <nav class="topnav">
                    <a class="DLMP" href='null'>DevLink MarketPlace</a>
                    <a href="FindDev.html" class="right">Find Dev</a>
                    <a href="FindJobs.html"class="right">Find Jobs</a>
                    <a href="Login.html"class="right">Login</a>
                    <a href="CreateAccount.html"class="right">Create Account</a>
      </nav>
    </div>)
  }

  export default TopNavigation;