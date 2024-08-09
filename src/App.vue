<script setup>
import HomeView from './views/HomeView.vue';
</script>
<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/videos">Videos</router-link>
        <router-link to="/imagens">Imagens</router-link>
        <router-link to="/tabela">Tabela</router-link>
    </nav>
    <router-view/>
    <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Bonoro</h1>
                <p>Siga os seus sonhos até o final. </p>

                <div id="footer_social_media">
                </div>
            </div>
            <br>
            <br>
            <ul class="footer-list">
                <li>
                    <h3>Ideias Bolsonaro </h3>
                </li>
                <li>
                    <a href="#" class="footer-link">Tecnologias</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Planos de governo</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Musicas</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Bolsonaro 22</h3>
                </li>
                <li>
                    <a href="#" class="footer-link"> produtos</a>
                </li>
                <li>
                    <a href="#" class="footer-link"> manifestação</a>
                </li>
                
            </ul>

            <div id="footer_subscribe">
                

                <p>
                    Entre no meu youtube!!!
                </p>

                <div id="input_group">
                    <input type="email" id="email">
                    <button>
                    </button>
                </div>
            </div>
        </div>

        <div id="footer_copyright">
            &#169
            2023 all rights reserved
        </div>
    </footer>
</template>


