<div class="glass_parent">
    <section id="me" class="glass">
        <h2>Who I am?</h2>
        <p class="md">
            I'm a developer in the find of adventures and challenges through my career in tech. <br/>
            I want to learn new skills and discover new people, and acquire new knowledge. <br>
            i want jojo's part 5 in netflix.
        </p>
    </section>

    <section id="skills" class="glass">
        <h2>Technicall Skills</h2>
        <div class="md">
            <div class="mobile-skills">
                <ul class="skills">
                    <li> - Javascript </li>
                    <li> - Python </li>
                    <li> - Go </li>
                    <li> - SQL </li>
                    <li> - React </li>
                    <li> - Svelte </li>
                </ul>
            </div>
            <div class="pc-skills">
                <ul>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript logo">
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" alt="python logo">
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/events/go-logo-blue.png" alt="golang logo">
                    </li>
                    <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsWbxPFRqyzyPLZmFjT32AFA4RAnVDRGm7Q&usqp=CAU" alt="sql logo">
                    </li>
                    <li>
                        <img src="https://www.educatenlinea.com/wp-content/uploads/2020/09/react-logo.png" alt="react logo">
                    </li>
                    <li>
                        <img src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png" alt="svelte logo">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>

<style>
    /* .wrap {
        width: 90%;
        margin: 1em auto;
    }  */
    h2 {
        font-weight: bolder;
    }
    /* .md{
        margin: 1em auto;
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

    .pc-skills{
        display: none;
    }

    li > img {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        margin: 1em;
        transition: transform 100ms ease-out;
    }

    li > img:hover{
        transform: translateY(-10px);
    }

    @media (min-width: 768px){
        .pc-skills{
            display:flex;

        }
        
        .pc-skills > ul {
            display:flex;
            flex-wrap: wrap;
        }

        .mobile-skills{
            display:none;
        }

        .glass_parent{
            width: 70%;
        }
    }
</style>