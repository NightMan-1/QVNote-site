<template>
    <div class="row justify-content-center">
        <div v-for="post in posts" class="blog-item col-12 col-lg-8- mb-4 bg-light p-0 pointer rounded-top bShadow-4h" @click="$router.push(post.path)">
            <small class="float-right pl-3 pt-3 pr-3 mt-1 text-muted"><i class="far fa-calendar-alt text-info mr-1"></i> {{ trueDate(post.frontmatter.date) }}</small>
            <h2 class="h5 p-3 m-0">{{ post.frontmatter.title }}</h2>
            <img :data-src="post.frontmatter.thumbnail" v-if="post.frontmatter.thumbnail" @click="$router.push(post.path)" class="mr-auto ml-auto d-block blog-item-img">
            <p class="p-3 m-0 font-italic text-dark" v-if="post.frontmatter.description && post.frontmatter.thumbnail">{{ post.frontmatter.description }}</p>
            <p class="pl-3 pt-0 pr-3 pb-3 m-0 font-italic text-dark" v-else-if="post.frontmatter.description">{{ post.frontmatter.description }}</p>
            <!--<p><router-link :to="post.path">Read more</router-link></p>-->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        trueDate(value){
            let dateT = new Date(String(value))
            //let dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
            let dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}
            return new Intl.DateTimeFormat('ru-RU', dateOptions).format(dateT)
        }
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    mounted() {
        const lazyLoadParents = document.querySelectorAll(".blog-item");

        const lazyLoad = new IntersectionObserver(entries => {
            entries.map(entry => {
                // check if observed entry is intersecting
                //if (!entry.isIntersecting) return false

                if (entry.isIntersecting){
                    const img = entry.target.querySelector(".blog-item-img")
                    if (img) {
                        if (img.dataset.src) {
                            // move data-src to src
                            img.src = img.dataset.src;
                            img.removeAttribute("data-src");
                        }
                        // wait for image to load and addClass to fade in
                        img.onload = () => {
                            img.style.height = "auto"
                            //console.log("loaded", img.src )
                        }
                    }
                    //setTimeout(function() {
                        //console.log("show")
                        //entry.target.classList.remove("animated", "fadeOut")
                        entry.target.classList.add("animated", "fadeIn")
                    //}, 500)
                }else{
                    //console.log("hide")
                    entry.target.classList.remove("animated", "fadeIn")
                    //entry.target.classList.add("animated", "fadeOut")
                }

  
            });
        });

        lazyLoadParents.forEach(item => {
            // add items to IntersectionObserver
            lazyLoad.observe(item)
        });

    }
}
</script>
