import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://dwbhnyakbuzwdqnoorec.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3YmhueWFrYnV6d2Rxbm9vcmVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzIzNTgsImV4cCI6MjA2ODYwODM1OH0.dq171m-T7glqF2QU_kkg2-ns6N1PONF3zoU--vcUSV8";
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("supabase client created:", supabase);

const form = document.querySelector("form");
let username = document.getElementById("name");
let useremail = document.getElementById("email");
let userpassword = document.getElementById("password");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let Full_name = username.value;
  let email = useremail.value;
  let password = userpassword.value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });

  if (Full_name === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  if (email === email) {
    alert("User already exists");
    return;
  }

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
    alert("Sign Up Successful");

    window.location.href = "/logi/login.html";
  }

  username.value = "";
  useremail.value = "";
  userpassword.value = "";
});



// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
let loginForm = document.getElementById("loginForm");
if (loginForm) {
    

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("Error logging in:", error);
    alert("Login failed. Please check your credentials.");
  } else {
    console.log("Login successful:", data);
    alert("Login Successful");
    localStorage.setItem("isLoggedIn", "true");
    // accounticon.style.display = 'block';
    window.location.href = "/index.html";
  }
});

}


});


document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const accounticon = document.querySelector('.account-icon');

  if (accounticon) {
    if (isLoggedIn === 'true') {
      accounticon.style.display = 'block';
    } else {
      accounticon.style.display = 'none';
    }
  }
});

