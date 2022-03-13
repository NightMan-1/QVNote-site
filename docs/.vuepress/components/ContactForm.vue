<template>
    <div>
        <form class="needs-validation" id="validated-form">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="text-danger w-100" v-if="validationErrors.message">
                        Вам нечего сказать? :)
                    </div>
                    <div class="form-group">
                        <textarea name="message" class="form-control" rows="9" cols="25" required placeholder="Текст письма..." v-model="formData.message"></textarea>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-danger w-100" v-if="validationErrors.name">
                        Необходимо представиться
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" name="name" placeholder="Ваше имя" required autocomplete="name" v-model="formData.name">
                    </div>
                    <div class="text-danger w-100" v-if="validationErrors.email">
                        Требуется действующий адрес электронной почты.
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-at"></i></span>
                        </div>
                        <input type="email" class="form-control" name="email" placeholder="Ваш email" required autocomplete="email" v-model="formData.email">
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-info pull-right" id="btnContactUs" @click.prevent="submitForm()"><i class="far fa-envelope me-1"></i> Отправить</button>
        </form>

        <transition name="nice-modal-fade">
            <div class="modal-mask" @click.stop="showModal = false" v-if="showModal === true">
                <div class="modal-close-icon"><i class="far fa-times-circle"></i></div>
                <div class="modal modal-wrapper" :class="{'show':showModal === true}">
                <div class="modal-dialog modal-lg v2" role="document">
                    <div class="modal-content border-0 p-5">
                        <div class="modal-body text-center" v-html="modalMessage">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            validationErrors: {
                name: null,
                email: null,
                message: null,
            },
            formData: {
                name: '',
                email: '',
                message: ''
            },
            showModal: false,
            modalMessage: ''
        }
    },
    methods: {
        submitForm () {
            let globalThis = this
            if (this.validateForm()) {
                //submit form to backend
                console.log(JSON.stringify({
                        name: this.formData.name,
                        email: this.formData.email,
                        message: this.formData.message,
                    }))

                var request = new Request('/form_post.php', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.formData.name,
                        email: this.formData.email,
                        message: this.formData.message,
                    }),
                    mode: 'cors'
                })
                fetch(request)
                .then(function(res){ return res.json(); })
                .then(function(data){
                    if (data.status === "ok"){
                        globalThis.modalMessage = '<h2><b>Спасибо!</b> Сообщение отправлено.</h2><p><i style="color:#637081;">При необходимости, я обязательно скоро с вами свяжусь!</i></p>'
                        globalThis.showModal = true
                    }else{
                        globalThis.modalMessage = '<h2 class="text-danger"><b>Ошибка!</b></h2><p>'+ JSON.stringify(data) +'</p>'
                        globalThis.showModal = true
                    }
                })
                .catch(function(error) {
                    globalThis.modalMessage = '<h2 class="text-danger"><b>Ошибка!</b></h2><p>'+ error.message +'</p>'
                    globalThis.showModal = true
                });
            }
        },
        validateForm () {
            var formId = 'validated-form';
            var nodes = document.querySelectorAll(`#${formId} :invalid`);
            var errorObjectName = 'validationErrors';
            var vm = this; //current vue instance;

            Object.keys(this[errorObjectName]).forEach(key => {
                this[errorObjectName][key] = null
            });

            if (nodes.length > 0) {
                nodes.forEach(node => {
                    this[errorObjectName][node.name] = node.validationMessage;
                    node.addEventListener('change', function (e) {
                        vm.validateForm();
                    });
                });

                return false;
            }
            else {
                return true;
            }
        }
    }
}
</script>
