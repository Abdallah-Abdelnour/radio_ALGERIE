let link = document.querySelector('.aa');
let nmbr;
// link.onclick= function(){
//     document.getElementById('audio_player_two').style.cssText = "display: none;";
//     document.getElementById('audio_player').style.cssText = "display: block;";
// };
// link.addEventListener("click", function() {
//     document.getElementById('audio_player_two').style.cssText = "display: none;";
//     document.getElementById('audio_player').style.cssText = "display: block;";
// });

document.querySelector(".aa").addEventListener("click", someFunction);
function someFunction(event) {
    console.log(event.target.textContent.slice(0,2)-1);
    nmbr=event.target.textContent.slice(0,2)-1;
    document.getElementById('audio_player_two').style.cssText = "display: none;";
    document.getElementById('audio_player').style.cssText = "display: block;";
    onload = new Player(nmbr);
}

// nmbr = link.textContent.slice(0,2)-1;  //ra9em ta3 indx wilaya
// nmbr=5;



let araisiya = document.querySelector('.araisiya');
araisiya.onclick= function(){
    document.getElementById('audio_player').style.cssText = "display: none;";
    document.getElementById('audio_player_two').style.cssText = "display: block;";
};

class Player{
    constructor(indxWilaya){
        this.indxWilaya = indxWilaya;
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});


        /* resource ta3 9anawat ************************/
        this.audios = [];

        this.audios[0]="https://webradio.tda.dz/Adrar_64K.mp3";
        this.audios[1]="https://webradio.tda.dz/Chlef_64K.mp3";
        this.audios[2]="https://webradio.tda.dz/Laghouat_64K.mp3";
        this.audios[3]="https://webradio.tda.dz/OumBouaghi_64K.mp3";
        this.audios[4]="https://webradio.tda.dz/Batna_64K.mp3";
        this.audios[5]="https://webradio.tda.dz/Bejaia_64K.mp3";
        this.audios[6]="https://webradio.tda.dz/Biskra_64K.mp3";
        this.audios[7]="https://webradio.tda.dz/Bechar_64K.mp3";
        this.audios[8]="https://webradio.tda.dz/Blida_64K.mp3";
        this.audios[9]="https://webradio.tda.dz/Bouira_64K.mp3";
        this.audios[10]="https://webradio.tda.dz/Tamanrasset_64K.mp3";
        this.audios[11]="https://webradio.tda.dz/Tebessa_64K.mp3";
        this.audios[12]="https://webradio.tda.dz/Tlemcen_64K.mp3";
        this.audios[13]="https://webradio.tda.dz/Tiaret_64K.mp3";
        this.audios[14]="https://webradio.tda.dz/TiziOuzou_64K.mp3";
        this.audios[15]="https://webradio.tda.dz/ElBahdja_64K.mp3";
        this.audios[16]="https://webradio.tda.dz/Djelfa_64K.mp3";
        this.audios[17]="https://webradio.tda.dz/Jijel_64K.mp3";
        this.audios[18]="https://webradio.tda.dz/Setif_64K.mp3";
        this.audios[19]="https://webradio.tda.dz/Saida_64K.mp3";
        this.audios[20]="https://webradio.tda.dz/Skikda_64K.mp3";
        this.audios[21]="https://webradio.tda.dz/SidiBelabes_64K.mp3";
        this.audios[22]="https://webradio.tda.dz/Annaba_64K.mp3";
        this.audios[23]="https://webradio.tda.dz/Guelma_64K.mp3";
        this.audios[24]="https://webradio.tda.dz/Constantine_64K.mp3";
        this.audios[25]="https://webradio.tda.dz/Medea_64K.mp3";
        this.audios[26]="https://webradio.tda.dz/Mostaganem_64K.mp3";
        this.audios[27]="https://webradio.tda.dz/Msila_64K.mp3";
        this.audios[28]="https://webradio.tda.dz/Mascara_64K.mp3";
        this.audios[29]="https://webradio.tda.dz/Ouargla_64K.mp3";
        this.audios[30]="https://webradio.tda.dz/Oran_64K.mp3";
        this.audios[31]="https://webradio.tda.dz/ElBayedh_64K.mp3";
        this.audios[32]="https://webradio.tda.dz/Illizi_64K.mp3";
        this.audios[33]="https://webradio.tda.dz/BordjBouArreridj_64K.mp3";
        this.audios[34]="https://webradio.tda.dz/Boumerdes_64K.mp3";
        this.audios[35]="https://webradio.tda.dz/Taref_64K.mp3";
        this.audios[36]="https://webradio.tda.dz/Tindouf_64K.mp3";
        this.audios[37]="https://webradio.tda.dz/Tissemssilt_64K.mp3";
        this.audios[38]="https://webradio.tda.dz/ouedSouf_64K.mp3";
        this.audios[39]="https://webradio.tda.dz/Khenchela_64K.mp3";
        this.audios[40]="https://webradio.tda.dz/SoukAhras_64K.mp3";
        this.audios[41]="https://webradio.tda.dz/Tipaza_64K.mp3";
        this.audios[42]="https://webradio.tda.dz/Mila_64K.mp3";
        this.audios[43]="https://webradio.tda.dz/AinDefla_64K.mp3";
        this.audios[44]="https://webradio.tda.dz/Naama_64K.mp3";
        this.audios[45]="https://webradio.tda.dz/AinTimouchent_64K.mp3";
        this.audios[46]="https://webradio.tda.dz/Ghardaia_64K.mp3";
        this.audios[47]="https://webradio.tda.dz/Relizan_64K.mp3";

        
        /* issem 9anawat **********************************/
        this.names =[];

        this.names[0]="01- Adrar";
        this.names[1]="02-Chlef";
        this.names[2]="03-Laghouat";
        this.names[3]="04-Oum Bouaghi";
        this.names[4]="05-Batna";
        this.names[5]="06-Bejaia";
        this.names[6]="07-Biskra";
        this.names[7]="08-Bechar";
        this.names[8]="09-Blida";
        this.names[9]="10-Bouira";
        this.names[10]="11-Tamenrasset";
        this.names[11]="12-Tebessa";
        this.names[12]="13-Tlemcen";
        this.names[13]="14-Tiaret";
        this.names[14]="15-Tizi Ouzou";
        this.names[15]="16-Alger";
        this.names[16]="17-Djelfa";
        this.names[17]="18-Jijel";
        this.names[18]="19-Setif";
        this.names[19]="20-Saida";
        this.names[20]="21-Skikda";
        this.names[21]="22-Sidi Bel Abbes";
        this.names[22]="23-Annaba";
        this.names[23]="24-Guelma";
        this.names[24]="25-Constantine";
        this.names[25]="26-Medea";
        this.names[26]="27-Mostaganem";
        this.names[27]="28-M'sila";
        this.names[28]="29-Mascara";
        this.names[29]="30-Ouargla";
        this.names[30]="31-Oran";
        this.names[31]="32-El Bayadh";
        this.names[32]="33-Illizi";
        this.names[33]="34-Bordj Bou Arreridj";
        this.names[34]="35-Boumerdes";
        this.names[35]="36-El Tarf";
        this.names[36]="37-Tindouf";
        this.names[37]="38-Tissemsilt";
        this.names[38]="39-El Oued";
        this.names[39]="40-Khenchla";
        this.names[40]="41-Souk Ahras";
        this.names[41]="42-Tipaza";
        this.names[42]="43-Mila";
        this.names[43]="44-Ain Defla";
        this.names[44]="45-Naama";
        this.names[45]="46-Ain Timouchent";
        this.names[46]="47-Ghardaia";
        this.names[47]="48-Relizane";
        
        if((this.indxWilaya!="")){
            this.numberAudio = this.indxWilaya;
        }else{
            this.numberAudio = 0;
        }

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }
    
    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
        }else{
                this.numberAudio = 0;
        }
        this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }else{
            this.numberAudio = this.audios.length -1;
         }
         this.setSource();

    }
    setSource(){

    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }
}
onload = new Player("");

