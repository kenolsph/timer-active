let select = (e) => document.querySelector(e);
			let selectAll = (e) => document.querySelectorAll(e);

			const face01 = select('#face01').getAttribute('d'),
				face02 = select('#face01').getAttribute('d'),
				handSec01 = select('#handSec01').getAttribute('d'),
				handSec02 = select('#handSec02').getAttribute('d'),
				handMin01 = select('#handMin01').getAttribute('d'),
				handMin02 = select('#handMin02').getAttribute('d'),
				handHr01 = select('#handHr01').getAttribute('d'),
				handHr02 = select('#handHr02').getAttribute('d');

			gsap.set('#face', { attr: { d: face01 } });
			gsap.set('#hand-sec', { attr: { d: handSec01 } });
			gsap.set('#hand-min', { attr: { d: handMin01 } });
			gsap.set('#hand-hr', { attr: { d: handHr01 } });

			gsap.set(['.gsapWrapper', '.vline'], { autoAlpha: 1 });
			window.onload = function () {
				startAnimation();
			};