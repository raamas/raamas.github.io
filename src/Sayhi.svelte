<script>
      import { FormGroup, Label, Input, Modal  } from 'sveltestrap';

      import emailjs from 'emailjs-com';

      let alert;

      const toggle = () => (alert = !alert);

      const sendEmail = (e) => {
        e.preventDefault();
        console.log("well")
        emailjs.sendForm('service_b498rj2', 'template_2tpf42r', e.target, 'user_W8cJkD9IypidzxuTDl2Vi')
        .then((result) => {
          console.log(result.text);
          alert = true
          e.target.from_name.value=""
          e.target.message.value=""
        }, (error) => {
          console.log(error.text);
        });
      };

      const dd = {
        name : "",
        message : ""
      };
      // const handleSubmit = (e) => {
      //   const formData = new FormData(e.target);

      //   console.log(dd)
      //   fetch("http://localhost:10000/",{
      //       method: "POST",
      //       body:JSON.stringify(dd)
      //   })
      //     .then(r => r.json())
      //     .then(data => console.log(data))

      //   fetch("http://localhost:10000/activate",{
      //       method: "POST",
      //       body:JSON.stringify("1")
      //   })
      //     .then(r => r.json())
      //     .then(data => console.log(data))

      //   fetch("http://localhost:10000/activate",{
      //       method: "POST",
      //       body:JSON.stringify("0")
      //   })
      //     .then(r => r.json())
      //     .then(data => { 
      //       console.log(data)
      //       console.log("ooo")
      //     })
      // }
</script>
<div class="glass_parent">
  <div class="glass">
    {#if alert === true}
    <Modal body header="Alert" isOpen={alert} {toggle}>
      <h2>Your message has been sent</h2>
    </Modal>  
    {/if}
    <form on:submit={sendEmail}>
      <FormGroup>
          <Label for="from_name">Name</Label>
          <Input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="What's your beautiful name?"
            bind:value={dd.name}
          />
        </FormGroup>
      <FormGroup>
          <Label for="msg">Message</Label>
          <Input
            type="text"
            name="message"
            id="msg"
            placeholder="Say hi!"
            bind:value={dd.message}
          />
        </FormGroup>
      <button type="submit">
        <span>
          Send
        </span>
      </button>
    </form>
  </div>
</div>
<style>
    /* form{
        margin: auto;
    } */

    /* .md{
        margin: 4vh;
    } */

    .glass_parent{
        margin:auto;
        width:85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .glass{
        border: solid 1px var(--lila);
        margin: 1rem 0;
        padding:1.4rem;
        border-radius: 24px;
        background: #ffffff;
        box-shadow:  2px 10px 20px #eaeaf8;
    }
    button {
      display: block;
      border-radius: 4px;
      background-color: #3d405b;
      border: none;
      color: #FFFFFF;
      text-align: center;
      font-size: 17px;
      padding: 1rem;
      width: 100%;
      transition: all 0.5s;
      cursor: pointer;
      }

      button span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
      }

      button span:after {
      content: '»';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -15px;
      transition: 0.5s;
      }

      button:hover span {
      padding-right: 15px;
      }

      button:hover span:after {
      opacity: 1;
      right: 0;
      }

      @media (min-width:768px){
        .glass_parent{
            width: 70%;
        }
      }
</style>