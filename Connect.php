<?php
    $username = $_POST ['username'];
    $password = $_POST ['password'];
    echo $username;
    echo $password;
    $username=stripcslashes($username);
    $password=stripcslashes($password);
    
    //$username=mysqli_real_escape_string($username);
    //$password=mysqli_real_escape_string($password);
    $conn = mysqli_connect("localhost", "root", "","login");
    

    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    else{
      $result= mysqli_query($conn,"select * from user where username='$username' and password='$password'");
      if($result->num_rows>0)
      {
        header('location:index.html');
      }
      else{
        echo "error";
      }
    }
    
?>