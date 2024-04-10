<footer>
    <div id="divider"></div>
    <form id="form" action="https://www.freecodecamp.com/email-submit">
      <h3>STAY CONNECTED WITH US!</h3>
      <p>Sign-up for emails and get a $10 off welcome coupon.</p>
      <input type="email" id="email" class="focused" name="email" placeholder="enter your email address" required>
      <input id="submit" type="submit" value="SIGN-UP">
    </form>
  </footer>
  
  <style>
    footer {
      background-color: rgb(234, 15, 15);
      padding: 20px;
      text-align: center;
    }
  
    #divider {
      border-top: 1px solid #ffffff;
      margin-bottom: 20px;
    }
  
    #form {
      max-width: 500px;
      margin: 0 auto;
    }
  
    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  
    p {
      margin-bottom: 20px;
    }
  
    #email {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
    }
  
    #submit {
      background-color: #000000;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }
</style>