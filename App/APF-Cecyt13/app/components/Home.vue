<template>
    <Page>
        <ActionBar>
            <Label text="APF Cecyt 13"/>
        </ActionBar>

        <!--

        -->

    <TabView :selectedIndex="homeSelectedIndex" @selectedIndexChange="onHomeSelectedIndexChange">


        <TabViewItem :title="homeSections[0].label">
            <StackLayout height="100%">
                <ListView for="item in news"  height="100%">
                    <v-template>
                        <StackLayout padding="20" borderRadius="10" marginTop="20">
                            <Image :src="item.image" width="100%"/>
                            <Label :text="item.title" />
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>


        <TabViewItem :title="homeSections[1].label">
            <StackLayout height="100%">
                <ListView for="event in calendar"  height="100%">
                    <v-template>
                        <StackLayout>
                            <Label :text="event.title" />
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>


        <TabViewItem :title="homeSections[2].label">
            <StackLayout height="100%">
                <ListView for="item in topics"  height="100%">
                    <v-template>
                        <StackLayout>
                            <Label :text="item.topic" />
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>


        <TabViewItem :title="homeSections[3].label">
            <StackLayout height="100%">
                <ListView for="item in links"  height="100%">
                    <v-template>
                        <StackLayout>
                            <Label :text="item.title" />
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>

        <TabViewItem :title="homeSections[4].label">
            <Label text="Content for Tab 4" />
        </TabViewItem>
    </TabView>
    </Page>
</template>

<script>
  export default {
    data(){
        return{
            homeSelectedIndex:0,
            homeSections:[
                {label:"Noticias",icon:""},
                {label:"Calendario",icon:""},
                {label:"Temas",icon:""},
                {label:"Links",icon:""},
                {label:"Perfil",icon:""}
                ],
            news:[
                {
                    id:1,
                    image:"~/images/news/news-1.jpg",
                    title:"Toma de instalaciones del cecyt 13",
                    link:"https://www.razon.com.mx/ciudad/toman-instalaciones-cecyt-13-coyoacan-410486",
                    introText:" La noche del martes, un grupo de jóvenes encapuchados tomaron las instalaciones del Cecyt 13 “Ricardo Flores Magón”del Instituto Politécnico Nacional en la alcaldía Coyoacán.",
                    reference:"La razón"
                },
                {
                    id:2,
                    image:"~/images/news/news-2.jpg",
                    title:"'Ajolotito Chomi', bot creado por estudiantes del cecyt 13",
                    link:"https://www.elfinanciero.com.mx/tech/ajolotito-chomi-el-bot-creado-por-estudiantes-del-cecyt-13",
                    introText:"Estudiantes de esta preparatoria crearon un chatbot, con la asesoría de Oracle, para enseñar a los niños la importancia del medio ambiente.",
                    reference:"El Financiero"
                },
                {
                    id:3,
                    image:"~/images/news/news-3.jpg",
                    title:"Manual del SAES disponible en línea",
                    link:"https://www.ipn.mx/assets/files/cecyt13/docs/inicio/noticias/01sersocdis0411.pdf",
                    introText:"Disponible nuevo manual del SAES",
                    reference:"cecyt13.ipn.mx"
                }
            ],
            calendar:[
                {time:new Date().getTime(),title:"Comienza el periodo de exámenes departamentales",type:"DANGER"},
                {time:new Date().getTime()+(1000*60*60*24*3),title:"Escuela para padres",type:"WARNING"},
                {time:new Date().getTime()+(1000*60*60*24*4),title:"Charlas de café",type:"INFO"}
            ],
            topics:[
                {
                    topic:"Becas",
                    topics:[
                        {topic:"¿Cuántas becas hay disponibles?"},
                        {topic:"Beca Benito Juárez"},
                        {topic:"Beca Institucional"},
                        {topic:"¿Puedo tener ambas becas?"}
                    ]
                },
                {
                    topic:"Nuevo Ingreso",
                    topics:[
                        {topic:"Bienvenido"},
                        {topic:"¿Qué trámites tengo que hacer?"},
                        {topic:"Seguro institucional",topics:[
                            {topic:"¿Debo tramitarlo?"},
                            {topic:"Tramitarlo desde la página Web"},
                            {topic:"Dónde están las delegaciones del IMMSS?"}
                        ]},
                        {topic:"Seguro de vida"}
                    ]
                },
                {
                    topic:"Periodo de evaluaciones",
                    topics:[
                        {topic:"¿Cuándo son las evaluaciones?"},
                        {topic:"¿Cómo se evalua?"},
                        {topic:"¿Qué pasa al reprobar materias?"},
                        {topic:"¿Qué puedo hacer si reprobé alguna materia?"}
                    ]
                }
            ],
            links:[
                {title:"Calendario 2020-2021", link:"https://www.ipn.mx/assets/files/main/docs/inicio/cal-Escolarizada-20-21.pdf"},
                {title:"Reglamento Cecyt", link:"https://www.cecyt13.ipn.mx/assets/files/cecyt13/docs/estudiantes/reglamento.pdf"},
                {title:"SAES", link:"https://www.saes.cecyt13.ipn.mx/"}
            ]
        }
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },

    },
    methods:{
        onHomeSelectedIndexChange(args){
         this.homeSelectedIndex = args.value
        },
        onItemTap(item){
            console.log("onItemTap",item)
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
