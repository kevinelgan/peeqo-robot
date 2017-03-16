const event = require('js/events/events')
const common = require('js/gifs/common-gif-functions')()

module.exports = function(){

	var productivity = {}

	productivity.list = {}

	productivity.blockSite = function(site){
		var lower = site.toLowerCase()
		productivity.list[lower] = true
	}

	productivity.unblockSite = function(site){
		var lower = site.toLowerCase()
		productivity.list[lower] = false
	}

	productivity.checkBlocked = function(site){
		var lower = site.toLowerCase()
		if(lower in productivity.list && productivity.list[lower] == true){
			event.emit("is-blocked", true)
		}
		event.emit("is-blocked",false)
	}

	productivity.isBlocked = function(){
		var obj = {
			gif_type:gifType,  //local/remote
			gif_category: common.setQueryByType("r_angry","angry"),
			format: common.setFormat(),
			gif_url: null,
			gif_loop_forever: false,
			servo:"angry",
			led:"error",
			sound:null,
			sound_loop_forever: false,
			callback: function(){
				event.emit("led","off")
				var anim = {
					gif_type: gifType,  //local/remote
					gif_category: common.setQueryByType("r_warning","i'm warning you"),
					format: common.setFormat(),
					gif_url: null,
					gif_loop_forever: false,
					servo:"lookup",
					led: null,
					sound:null,
					sound_loop_forever: false,
					callback: null
				}

				setTimeout(function(){
					event.emit("led, off")
					event.emit("animate", anim)
				},1200)
			}
		}

		event.emit("animate", obj)
	}

	return productivity
}