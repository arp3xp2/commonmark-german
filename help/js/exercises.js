/* 
* Free to use under the MIT license.
* https://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

// Exercise data
var exercises = {
	"1-1": {
		answer: "<p>Das Musikvideo zu Rihannas Song <strong>American Oxygen</strong> zeigt verschiedene Momente der amerikanischen Geschichte, einschließlich der Amtseinführung von Barack Obama.</p>",
		correctMd: "Das Musikvideo zu Rihannas Song **American Oxygen** zeigt verschiedene Momente der amerikanischen Geschichte, einschließlich der Amtseinführung von Barack Obama."
	},
	"1-2": {
		answer: "<p>Manchmal habe ich schon vor dem Frühstück <em>sechs</em> unmögliche Dinge geglaubt.</p>",
		correctMd: "Manchmal habe ich schon vor dem Frühstück _sechs_ unmögliche Dinge geglaubt."
	},
    "1-3": {
        answer: "<p><strong>Alle <em>müssen</em> heute um 17 Uhr am Meeting teilnehmen.</strong></p>",
        correctMd: "**Alle _müssen_ heute um 17 Uhr am Meeting teilnehmen.**"
    },
	"1-4": {
		answer: "<p>Ich bin total großartig.*</p>\n<p>* für bestimmte sehr kleine Werte von großartig</p>",
		correctMd: "Ich bin total großartig.*\n\n\\* für bestimmte sehr kleine Werte von großartig"
	}, 
	"2-1": {
		answer: "<p>Der Himmel über dem Hafen hatte die Farbe eines Fernsehers, eingestellt auf einen toten Kanal.</p>\n<p>Es war ein heller, kalter Tag im April, und die Uhren schlugen dreizehn.</p>",
		correctMd: "Der Himmel über dem Hafen hatte die Farbe eines Fernsehers, eingestellt auf einen toten Kanal.\n\nEs war ein heller, kalter Tag im April, und die Uhren schlugen dreizehn."
	},
	"2-2": {
		answer: "<p>Ich habe gegessen<br>\ndie Pflaumen<br>\ndie waren in<br>\ndem Kühlschrank</p>",
		correctMd: "Ich habe gegessen\\\ndie Pflaumen\\\ndie waren in\\\ndem Kühlschrank"
	},
	"3-1": {
		answer: "<h2>Kapitel 1</h2>\n<p>Etwas an dem Raum machte ihn unruhig.</p>\n<h2>Kapitel 2</h2>\n<p>Es ist hinter dir! Beeil dich bevor es</p>",
		correctMd: "## Kapitel 1\nEtwas an dem Raum machte ihn unruhig.\n## Kapitel 2\nEs ist hinter dir! Beeil dich bevor es"
	},
	"3-2": {
		answer: "<h1>Nach dem Urknall</h1>\n<p>Eine kurze Zusammenfassung der Zeit</p>\n<h2>Leben auf der Erde</h2>\n<p>10 Milliarden Jahre</p>\n<h2>Du liest das hier</h2>\n<p>13,7 Milliarden Jahre</p>",
		correctMd: "# Nach dem Urknall\nEine kurze Zusammenfassung der Zeit\n## Leben auf der Erde\n10 Milliarden Jahre\n## Du liest das hier\n13,7 Milliarden Jahre"
	},     
	"4-1": {
		answer: "<p>Das Zitat</p>\n<blockquote>\n<p>Irgendwo wartet etwas Unglaubliches darauf, entdeckt zu werden</p>\n</blockquote>\n<p>wird Carl Sagan zugeschrieben.</p>",
		correctMd: "Das Zitat\n\n> Irgendwo wartet etwas Unglaubliches darauf, entdeckt zu werden\n\nwird Carl Sagan zugeschrieben."
	},
	"4-2": {
		answer: "<p>Meine liebsten Knigge-Zitate:</p>\n<blockquote>\n<p>Einen unwichtigen Fehler kommentarlos durchgehen zu lassen ist eine wunderbare soziale Gabe.</p>\n<p>Weltanschauliche Unterschiede sind keine Entschuldigung f\u00fcr Unh\u00f6flichkeit.</p>\n</blockquote>",
		correctMd: "Meine liebsten Knigge-Zitate:\n\n> Einen unwichtigen Fehler kommentarlos durchgehen zu lassen ist eine wunderbare soziale Gabe.\n>\n> Weltanschauliche Unterschiede sind keine Entschuldigung f\u00fcr Unh\u00f6flichkeit."
	}, 
	"5-1": {
		answer: "<ul>\n<li>Mehl</li>\n<li>K\u00e4se</li>\n<li>Tomaten</li>\n</ul>",
		correctMd: "- Mehl\n- K\u00e4se\n- Tomaten"
	},
	"5-2": {
		answer: "<p>Vier Schritte zu besserem Schlaf:</p>\n<ol>\n<li>Einen Schlafrhythmus einhalten</li>\n<li>Ein Abendritual entwickeln</li>\n<li>Gem\u00fctlich einrichten</li>\n<li>Stress bew\u00e4ltigen</li>\n</ol>",
		correctMd: "Vier Schritte zu besserem Schlaf:\n1. Einen Schlafrhythmus einhalten\n2. Ein Abendritual entwickeln\n3. Gem\u00fctlich einrichten\n4. Stress bew\u00e4ltigen"
	},
    "5-3": {
		answer: "<p>1986. Was f\u00fcr eine gro\u00dfartige Saison. Wohl die beste Saison in der Geschichte des Vereins.</p>",
		correctMd: "1986\\. Was f\u00fcr eine gro\u00dfartige Saison. Wohl die beste Saison in der Geschichte des Vereins."
	},     
	"6-1": {
		answer: "<p>Dort kannst du alles machen <a href=\"https://html5zombo.com\">https://html5zombo.com</a></p>",
		correctMd: "Dort kannst du alles machen <https://html5zombo.com>"
	},
	"6-2": {
		answer: "<p>Die <a href=\"http://www.ur.ac.rw\">Universit\u00e4t Ruanda</a> wurde 2013 durch den Zusammenschluss von sieben \u00f6ffentlichen Hochschulen Ruandas gegr\u00fcndet.</p>",
		correctMd: "Die [Universit\u00e4t Ruanda](http://www.ur.ac.rw) wurde 2013 durch den Zusammenschluss von sieben \u00f6ffentlichen Hochschulen Ruandas gegr\u00fcndet."
	},
	"6-3": {
		answer: "<p><a href=\"https://w.wiki/qYn\">Hurrikan</a> Erika war der st\u00e4rkste und langlebigste tropische Wirbelsturm der atlantischen <a href=\"https://w.wiki/qYn\">Hurrikansaison</a> 1997.</p>",
		correctMd: "[Hurrikan][1] Erika war der st\u00e4rkste und langlebigste tropische Wirbelsturm der atlantischen [Hurrikansaison][1] 1997.\n\n[1]:https://w.wiki/qYn"
	}, 
	"7-1": {
		answer: "<p><img src=\"https://commonmark.org/help/images/favicon.png\" alt=\"\"></p>",
		correctMd: "![](https://commonmark.org/help/images/favicon.png)"
	}, 
	"7-2": {
		answer: "<p><img src=\"https://commonmark.org/help/images/favicon.png\" alt=\"Logo\" title=\"Creative-Commons-lizenziert\"></p>",
		correctMd: "![Logo][1]\n\n[1]: https://commonmark.org/help/images/favicon.png \"Creative-Commons-lizenziert\""
	}, 
	"8-1": {
		answer: "<p>Wenn <code>x = 3</code>, dann bedeutet das <code>x + 2 = 5</code></p>",
		correctMd: "Wenn `x = 3`, dann bedeutet das `x + 2 = 5`"
	},
	"8-2": {
		answer: "<p>Wer hat diese Woche die meisten Donuts gegessen?</p>\n<pre><code>Jeff  15\nSam   11\nRobin  6</code></pre>",
		correctMd: "Wer hat diese Woche die meisten Donuts gegessen?\n\n    Jeff  15\n    Sam   11\n    Robin  6"
	},
	"8-3": {
		answer: "<p>Eine Schleife in JavaScript:</p>\n<pre><code>var i;\nfor (i=0; i&lt;5; i++) {\n  console.log(i);\n}\n</code></pre>\n<p>Welche Zahlen wird das ausgeben?</p>",
		correctMd: "Eine Schleife in JavaScript:\n```\nvar i;\nfor (i=0; i<5; i++) {\n  console.log(i);\n}\n```\nWelche Zahlen wird das ausgeben?"
	},
	"9-1": {
		answer: "<ul>\n<li>Obst\n<ul>\n<li>Apfel</li>\n<li>Orange</li>\n<li>Banane</li>\n</ul>\n</li>\n<li>Milchprodukte\n<ul>\n<li>Milch</li>\n<li>Käse</li>\n</ul>\n</li>\n</ul>",
		correctMd: "* Obst\n  * Apfel\n  * Orange\n  * Banane\n* Milchprodukte\n  * Milch\n  * Käse"
	},
	"9-2": {
		answer: "<ul>\n<li>WM 2014\n<ol>\n<li>Deutschland</li>\n<li>Argentinien</li>\n<li>Niederlande</li>\n</ol>\n</li>\n<li>Rugby-WM 2015\n<ol>\n<li>Neuseeland</li>\n<li>Australien</li>\n<li>Südafrika</li>\n</ol>\n</li>\n</ul>",
		correctMd: "+ WM 2014\n  1. Deutschland\n  2. Argentinien\n  3. Niederlande\n+ Rugby-WM 2015\n  1. Neuseeland\n  2. Australien\n  3. Südafrika"
	},
	"9-3": {
		answer: "<ol>\n<li>\n<p>Zutaten</p>\n<ul>\n<li>Spaghetti</li>\n<li>Tomatensoße</li>\n<li>Salz</li>\n</ul>\n</li>\n<li>\n<p>Kochen</p>\n<p>Wasser zum Kochen bringen, eine Prise Salz und Spaghetti hinzufügen. Kochen bis die Pasta <strong>al dente</strong> ist.</p>\n</li>\n<li>\n<p>Servieren</p>\n<p>Die Pasta auf einem Teller abtropfen lassen. Erhitzte Soße dazugeben.</p>\n<blockquote>\n<p>Kein Mensch ist einsam beim Spaghetti essen; es erfordert so viel Aufmerksamkeit.</p>\n</blockquote>\n<p>Guten Appetit!</p>\n</li>\n</ol>",
		correctMd: "1. Zutaten\n\n    - Spaghetti\n    - Tomatensoße\n    - Salz\n\n2. Kochen\n\n   Wasser zum Kochen bringen, eine Prise Salz und Spaghetti hinzufügen. Kochen bis die Pasta **al dente** ist.\n\n3. Servieren\n\n   Die Pasta auf einem Teller abtropfen lassen. Erhitzte Soße dazugeben.\n\n   > Kein Mensch ist einsam beim Spaghetti essen; es erfordert so viel Aufmerksamkeit.\n\n   Guten Appetit!"
	},
	"10-1": {
		answer: "<ul>\n<li>[ ] Einkaufen</li>\n<li>[ ] Staubsaugen</li>\n<li>[ ] W\u00e4sche waschen</li>\n</ul>",
		correctMd: "- [ ] Einkaufen\n- [ ] Staubsaugen\n- [ ] W\u00e4sche waschen"
	},
	"10-2": {
		answer: "<ul>\n<li>[x] Termin vereinbaren</li>\n<li>[x] Unterlagen vorbereiten</li>\n<li>[ ] Bewerbung abschicken</li>\n</ul>",
		correctMd: "- [x] Termin vereinbaren\n- [x] Unterlagen vorbereiten\n- [ ] Bewerbung abschicken"
	},
	"10-3": {
		answer: "<h2>Projektarbeit</h2>\n<ul>\n<li>[x] Recherche</li>\n<li>[x] Gliederung</li>\n<li>[ ] Entwurf schreiben</li>\n<li>[ ] Feedback einholen</li>\n</ul>",
		correctMd: "## Projektarbeit\n- [x] Recherche\n- [x] Gliederung\n- [ ] Entwurf schreiben\n- [ ] Feedback einholen"
	}
};
