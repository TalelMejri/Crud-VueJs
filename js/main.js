
const app=Vue.createApp({
    data(){
        return{
            showadd:0,
            showupdate:0,
            select:0,
            confirmer:0,
            error:"",
            search:'',
            email:'',
            name:'',
            etudiants:[
                {id:1,name:"Talel",email:"talelmejri8@gmail.com",test:'error'},
                {id:5,name:"hkimi",email:"hkimi@gmail.com",test:'success'},
                {id:10,name:"saif",email:"saif@gmail.com",test:'error'},
                {id:2,name:"chlendi",email:"chlendi@gmail.com",test:'success'},
                {id:4,name:"raed",email:"raed@gmail.com",test:'error'}
            ]
        }
    },
    methods: {
        sortby(prop){
           this.etudiants.sort((a,b)=>a[prop]>b[prop] ? 1 :-1);
        },
        delete_personne(id) {
            if (confirm("Do you wanna delte this person"))
                this.etudiants.splice(id,1);
           /* this.etudiants=this.etudiants.filter(p=>{
                p.id!=id;
            })*/
        },
        add_personne(){
            this.showadd=1;
        }, 
        initForm(){
            this.email="";
            this.name="";
        },
        Onsubmit(){
            if(this.name=="" && this.email=="" ){
                this.error="Empty field";
            }else{
            this.showadd=0;
            this.dynamique="Add";
            this.confirmer=1;
            setTimeout(()=>this.confirmer=0,2000);
             let etud={
                name:this.name,
                email:this.email,
                id:Math.random()
             }
             this.etudiants.push(etud);
             this.initForm();
            }
        },
        OnUpdate(){
            this.showupdate=0;
            this.dynamique="Update";
            this.confirmer=1;
            setTimeout(()=>this.confirmer=0,2000);
            let etud={
                name:this.name,
                email:this.email,
             }
             this.etudiants[this.select]=etud;
             this.initForm();
        },
        update_personne(id){
            this.showupdate=1;
            this.name=this.etudiants[id].name;
            this.email=this.etudiants[id].email;
            this.select=id;
        },
        hide(){
            this.showupdate=0;
            this.showadd=0;
            this.initForm();
            this.select=0;

        }
    },
    computed:{
       /* verifier_email(email){
            alert("hhddddddddddd");
            let verifier=0;
            this.etudiants.forEach(etudiant => {
                if(etudiant.email===email){
                    verifier=1;
                }
            });
            return verifier == 0 ? false : true;
        },*/
        myetudiant(){
           return  this.etudiants.filter(etudiant=>{
                return etudiant.name=="talel";
            })
        },
        mysearch(){
            var f=new RegExp(this.search,'i');
            return this.etudiants.filter(function(el){
                return el.name.match(f);
            })
        },
    }
})

const mountapp=app.mount("#app");

