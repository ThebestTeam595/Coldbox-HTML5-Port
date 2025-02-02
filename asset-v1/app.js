/* 0.5.0 2022-8-10 12:44:31 */
var app = new function() {
    this.name = "Mechanic", this.version = "1", this.date = "2022", this.folder = "asset-v1/", this.looptime = 6852, this.bpm = 140, this.totalframe = 452, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 92, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0a190f", this.col0 = "#564BB5", this.col1 = "#4A3FA4", this.col2 = "#362C86", this.col3 = "#332184", this.col4 = "#2C1A67", this.animearray = [{
        name: "1_pump",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "2_wheel",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "3_tiktuk",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "4_hammer",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "5_snare",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "7_cube",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "8_breather",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "9_transition",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "10_hit",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "11_alert",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "12_synth",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "13_beep",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "14_arpeg",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "15_tunbum",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "16_mechanic",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "17_struck",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "18_woah",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "19_hum",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "20_doot",
        color: "DF2020",
        uniqsnd: !0
    }], this.bonusarray = [{ name: "chegou",
        src: "v5-b2-chegou-hb.mp4",
        code: "1,3,6,12,20",
        sound: "bonus-chegou",
        aspire: "aspire"},{ name: "felicidade",
        src: "v5-b1-felicidade-hb.mp4",
        code: "1,5,6,11,15",
        sound: "bonus-felicidade",
        aspire: "aspire"},];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
