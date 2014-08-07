function preventDefault(e) {
	e = e || window.event;
	e.preventDefault && e.preventDefault();
	e.returnValue = !1
}

function wheel(e) {
	preventDefault(e)
}

function disable_scroll() {
	window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1);
	window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
	window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1);
	window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function headerSlideBottom() {
	loaderLogo.removeClass("active");
	$(".loader-line:first-of-type").removeClass("loader-move1b").addClass("loader-move1a");
	$(".loader-line2").removeClass("loader-move2b").addClass("loader-move2a");
	setTimeout(function() {
		body.addClass("b-content-pos");
		setTimeout(function() {
			content.addClass("active")
		}, 300);
		setTimeout(function() {
			$(document).unbind("touchmove", !1)
		}, 600);
		setTimeout(function() {
			loaderLogo.removeClass("active");
			loaderLine.removeClass("alt");
			header.stop().addClass("overlay-active")
		}, 800);
		setTimeout(function() {
			draw()
		}, 1e3);
		setTimeout(function() {
			$(".design-more").addClass("active")
		}, 2900);
		$(document).bind("touchmove", !1);
		okScroll = 1
	}, 1e3);
	setTimeout(function() {
		$(".loader-line:first-of-type").removeClass("loader-move1a").addClass("loader-move1b");
		$(".loader-line2").removeClass("loader-move1b").addClass("loader-move2b");
		loaderLogo.stop().delay(1800).addClass("active")
	}, 2e3)
}

function ScrollStart() {
	if (okScroll === 0 && ipad_keyboard_checker === 0) {
		body.addClass("b-content-pos");
		setTimeout(function() {
			content.addClass("active")
		}, 300);
		setTimeout(function() {
			$(document).unbind("touchmove", !1)
		}, 600);
		setTimeout(function() {
			loaderLogo.removeClass("active");
			loaderLine.removeClass("alt");
			header.stop().addClass("overlay-active")
		}, 800);
		setTimeout(function() {
			draw()
		}, 1e3);
		setTimeout(function() {
			$(".design-more").addClass("active")
		}, 3e3);
		$(document).bind("touchmove", !1);
		$("html,body").animate({
			scrollTop: 1
		}, 400);
		okScroll = 1
	}
}

function Scroll() {
	if (responsive_viewport >= 768 && ipad_keyboard_checker === 0) {
		var e = $(this).scrollTop();
		if (e < previousPos && e < 20) {
			body.removeClass("b-content-pos");
			content.removeClass("active");
			okScroll = 0;
			setTimeout(function() {
				loaderLogo.addClass("active")
			}, 500);
			setTimeout(function() {
				header.stop().delay(1e3).removeClass("overlay-active")
			}, 1e3);
			loaderLine.addClass("alt")
		}
		previousPos = e
	}
}(function() {
	var e, t = function() {},
		n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
		r = n.length,
		i = window.console = window.console || {};
	while (r--) {
		e = n[r];
		i[e] || (i[e] = t)
	}
})();
(function(e) {
	function f() {
		var t, n, r = {
			height: s.innerHeight,
			width: s.innerWidth
		};
		if (!r.height) {
			t = i.compatMode;
			if (t || !e.support.boxModel) {
				n = t === "CSS1Compat" ? o : i.body;
				r = {
					height: n.clientHeight,
					width: n.clientWidth
				}
			}
		}
		return r
	}

	function l() {
		return {
			top: s.pageYOffset || o.scrollTop || i.body.scrollTop,
			left: s.pageXOffset || o.scrollLeft || i.body.scrollLeft
		}
	}

	function c() {
		var i = e(),
			s, u = 0;
		e.each(t, function(e, t) {
			var n = t.data.selector,
				r = t.$element;
			i = i.add(n ? r.find(n) : r)
		});
		s = i.length;
		if (s) {
			n = n || f();
			r = r || l();
			for (; u < s; u++) {
				if (!e.contains(o, i[u])) continue;
				var a = e(i[u]),
					c = {
						height: a.height(),
						width: a.width()
					},
					h = a.offset(),
					p = a.data("inview"),
					d, v, m;
				if (!r || !n) return;
				if (h.top + c.height > r.top && h.top < r.top + n.height && h.left + c.width > r.left && h.left < r.left + n.width) {
					d = r.left > h.left ? "right" : r.left + n.width < h.left + c.width ? "left" : "both";
					v = r.top > h.top ? "bottom" : r.top + n.height < h.top + c.height ? "top" : "both";
					m = d + "-" + v;
					(!p || p !== m) && a.data("inview", m).trigger("inview", [!0, d, v])
				} else p && a.data("inview", !1).trigger("inview", [!1])
			}
		}
	}
	var t = {},
		n, r, i = document,
		s = window,
		o = i.documentElement,
		u = e.expando,
		a;
	e.event.special.inview = {
		add: function(n) {
			t[n.guid + "-" + this[u]] = {
				data: n,
				$element: e(this)
			};
			!a && !e.isEmptyObject(t) && (a = setInterval(c, 250))
		},
		remove: function(n) {
			try {
				delete t[n.guid + "-" + this[u]]
			} catch (r) {}
			if (e.isEmptyObject(t)) {
				clearInterval(a);
				a = null
			}
		}
	};
	e(s).bind("scroll resize", function() {
		n = r = null
	});
	!o.addEventListener && o.attachEvent && o.attachEvent("onfocusin", function() {
		r = null
	})
})(jQuery);
var header = $("#header"),
	content = $("#content"),
	previousPos = 0,
	okScroll = 0,
	body = $("body"),
	loader = $(".loader"),
	loaderContent = $(".loader-content"),
	loaderLine = $(".loader-line"),
	loaderLogo = $(".loader-logo"),
	contactForm = $("#contact-form"),
	thxMsg = $(".thx-message"),
	responsive_viewport = $(window).width(),
	timer = 0,
	ipad_keyboard_checker = 0,
	supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints,
	current_frame = 0,
	total_frames = 120,
	path = [],
	f_length = [];
for (var i = 0; i < 1; i++) {
	path[i] = document.getElementById("i" + i);
	var l = path[i].getTotalLength();
	f_length[i] = l;
	path[i].style.strokeDasharray = l + " " + l;
	path[i].style.strokeDashoffset = l
}
var handle = 0,
	draw = function() {
		var e = current_frame / total_frames;
		if (e > 1) window.cancelAnimationFrame(handle);
		else {
			current_frame++;
			for (var t = 0; t < path.length; t++) path[t].style.strokeDashoffset = Math.floor(f_length[t] * (1 - e));
			handle = window.requestAnimationFrame(draw)
		}
	},
	s_current_frame = 0,
	s_total_frames = 60,
	s_path = [],
	s_length = [];
for (var i = 0; i < 2; i++) {
	s_path[i] = document.getElementById("a" + i);
	var l = s_path[i].getTotalLength();
	s_length[i] = l;
	s_path[i].style.strokeDasharray = l + " " + l;
	s_path[i].style.strokeDashoffset = l
}
var s_handle = 0,
	draw2 = function() {
		var e = s_current_frame / s_total_frames;
		if (e > 1) window.cancelAnimationFrame(s_handle);
		else {
			s_current_frame++;
			for (var t = 0; t < s_path.length; t++) s_path[t].style.strokeDashoffset = Math.floor(s_length[t] * (1 - e));
			s_handle = window.requestAnimationFrame(draw2)
		}
	},
	sendMail = function() {
		var e = 0,
			t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (jQuery("#name").val() === "") {
			e = 1;
			$(contactForm).append("<span class='form-error'>!</span>").find(".form-error").addClass("active")
		}
		if (!t.test(jQuery("#email").val()) || jQuery("#email").val() === "") {
			e = 1;
			$("#contact-form .sixcol.last").append("<span class='form-error'>!</span>").find(".form-error").addClass("active")
		}
		if (jQuery("#message").val() === "") {
			e = 1;
			$("#contact-form .descr").append("<span class='form-error'>!</span>").find(".form-error").addClass("active")
		}
		if (e !== 1) {
			var n = {
				action: "SendMessage",
				name: jQuery("#name").val(),
				phone: jQuery("#phone").val(),
				email: jQuery("#email").val(),
				message: jQuery("#message").val()
			};
			jQuery.ajax({
				type: "POST",
				url: "/library/php/mainHandler.php",
				data: n,
				success: function(e) {
					if (e) {
						ga("send", "pageview", "/contact-form-sent.html");
						contactForm.addClass("validated");
						setTimeout(function() {
							$("#name, #phone, #email, #message").val("");
							$("#contact-form .form-error").remove();
							thxMsg.css("visibility", "visible").addClass("active")
						}, 410);
						setTimeout(function() {
							thxMsg.removeClass("active")
						}, 5e3);
						setTimeout(function() {
							contactForm.removeClass("validated");
							thxMsg.css("visibility", "hidden")
						}, 5410)
					}
				}
			})
		}
	};
if (!supportsTouch) $(window).scroll(function() {
	if (responsive_viewport >= 768) {
		var e = $(this).scrollTop();
		if (e > previousPos) {
			if (e > 1 && okScroll === 0) {
				disable_scroll();
				okScroll = 1;
				body.addClass("b-content-pos");
				setTimeout(function() {
					content.addClass("active")
				}, 300);
				setTimeout(function() {
					loaderLogo.removeClass("active");
					loaderLine.removeClass("alt");
					header.stop().addClass("overlay-active");
					enable_scroll()
				}, 800);
				setTimeout(function() {
					draw()
				}, 1e3);
				setTimeout(function() {
					$(".design-more").addClass("active")
				}, 3e3)
			}
		} else if (e < 1) {
			body.removeClass("b-content-pos");
			content.removeClass("active");
			okScroll = 0;
			setTimeout(function() {
				loaderLogo.addClass("active")
			}, 500);
			setTimeout(function() {
				header.stop().delay(1e3).removeClass("overlay-active")
			}, 1e3);
			loaderLine.addClass("alt")
		}
		previousPos = e
	}
});
else if (responsive_viewport >= 768) {
	document.addEventListener("touchmove", ScrollStart, !1);
	document.addEventListener("scroll", Scroll, !1)
}
$(".myvcard").click(function() {
	ga("send", "pageview", "/vcard-downloaded.html")
});
$(".m-next-section").click(function(e) {
	$("html,body").animate({
		scrollTop: $(this.hash).offset().top + 40
	}, 400);
	e.preventDefault()
});
$(".backtotop").click(function(e) {
	$("html, body").animate({
		scrollTop: 0
	}, 800);
	e.preventDefault()
});
responsive_viewport >= 768 && supportsTouch ? loader.click(function(e) {
	headerSlideBottom();
	e.preventDefault()
}) : responsive_viewport >= 768 ? loader.click(function(e) {
	$("html, body").animate({
		scrollTop: 2
	}, 0);
	e.preventDefault()
}) : loader.click(function(e) {
	$("html,body").animate({
		scrollTop: $(this.hash).offset().top + 50
	}, 800);
	e.preventDefault()
});
$(".design-more").click(function(e) {
	$(".ref-overlay-wrap").addClass("active");
	setTimeout(function() {
		$(".ref-overlay").addClass("active")
	}, 20);
	setTimeout(function() {
		$(".ref-overlay-content").addClass("active");
		$(".ref-overlay-close").addClass("active")
	}, 420);
	e.preventDefault()
});
$(".ref-overlay-close").click(function(e) {
	$(".ref-overlay-content").addClass("pre-inactive");
	$(".ref-overlay-close").removeClass("active");
	setTimeout(function() {
		$(".ref-overlay").removeClass("active")
	}, 400);
	setTimeout(function() {
		$(".ref-overlay-content").removeClass("active");
		$(".ref-overlay-content").removeClass("pre-inactive");
		$(".ref-overlay-wrap").removeClass("active")
	}, 850);
	e.preventDefault()
});
$("textarea").focus(function() {
	$(".submit").addClass("active")
});
$("input").focus(function() {
	$(this).parent().find(">.form-error").removeClass("active");
	setTimeout(function() {
		$(this).parent().find(">.form-error").remove()
	}, 300)
});
$("textarea").focus(function() {
	$("#contact-form .descr .form-error").removeClass("active");
	setTimeout(function() {
		$("#contact-form .descr .form-error").remove()
	}, 300)
});
if (responsive_viewport >= 768 && supportsTouch) {
	$("input, select, textarea").bind("focus", function() {
		$("#header").css("display", "none");
		ipad_keyboard_checker = 1
	});
	$("input, select, textarea").bind("blur", function() {
		$("#header").css("display", "block");
		ipad_keyboard_checker = 0
	})
}
if (responsive_viewport >= 768) {
	$("#about-dev p").one("inview", function(e, t) {
		t && setTimeout(function() {
			draw2()
		}, 400)
	});
	$(".portfolio-cont h2").one("inview", function(e, t) {
		if (t) {
			setTimeout(function() {
				$(".portfolio-anim-simulate").addClass("animate-showPortfolio")
			}, 200);
			setTimeout(function() {
				$(".portfolio-cont").addClass("active")
			}, 1260)
		}
	});
	contactForm.one("inview", function(e, t) {
		if (t) {
			setTimeout(function() {
				$("input").addClass("activewidth");
				$("textarea").addClass("activewidth")
			}, 200);
			setTimeout(function() {
				$("textarea").addClass("activeheight")
			}, 750);
			setTimeout(function() {
				$("input").addClass("activetext");
				$(".descr").addClass("activetext")
			}, 1500);
			setTimeout(function() {
				$("input").addClass("activetextlocked")
			}, 2e3)
		}
	})
}
$(window).load(function() {
	loaderContent.addClass("active");
	setTimeout(function() {
		loaderLine.addClass("alt")
	}, 1e3);
	setTimeout(function() {
		loaderLogo.stop().addClass("active")
	}, 1400);
	setTimeout(function() {
		$(".choose-lang").addClass("active");
		header.stop().removeClass("overlay-active")
	}, 2e3);
	responsive_viewport >= 768 && !supportsTouch ? loader.hover(function() {
		loaderLogo.removeClass("active");
		$(".loader-line:first-of-type").removeClass("loader-move1b").addClass("loader-move1a");
		$(".loader-line2").removeClass("loader-move2b").addClass("loader-move2a");
		timer && clearTimeout(timer)
	}, function() {
		$(".loader-line:first-of-type").removeClass("loader-move1a").addClass("loader-move1b");
		$(".loader-line2").removeClass("loader-move1b").addClass("loader-move2b");
		timer = setTimeout(function() {
			loaderLogo.addClass("active")
		}, 300)
	}) : responsive_viewport >= 768 && supportsTouch;
	contactForm.submit(function(e) {
		e.preventDefault();
		sendMail()
	})
});
$(window).resize(function() {
	responsive_viewport = $(window).width()
});