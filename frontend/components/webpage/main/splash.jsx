import React from "react";
const quotes = [
	<div className="splash-quote">
		<h4>
			“There is a certain part of all of us that lives outside of time. Perhaps
			we become aware of our age only at exceptional moments and most of the
			time we are ageless.”
		</h4>
		<br />
		<p>– Milan Kundera</p>
	</div>,
	<div className="splash-quote">
		<h4>
			“If wrinkles must be written upon our brows, let them not be written upon
			the heart. The spirit should never grow old.”
		</h4>
		<br />
		<p>– James A. Garfield</p>
	</div>,
	<div className="splash-quote">
		<h4>
			“He who is of a calm and happy nature will hardly feel the pressure of
			age, but to him who is of an opposite disposition, youth and age are
			equally a burden.”
		</h4>
		<br />
		<p>– Plato</p>
	</div>,
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,

	<div className="splash-quote">
		<h4>“The longer I live the more beautiful life becomes.”</h4>
		<br />
		<p>– Frank Lloyd Wright</p>
	</div>,

	<div className="splash-quote">
		<h4>
			“Nature gives you the face you have at twenty; it is up to you to merit
			the face you have at fifty.”
		</h4>
		<br />
		<p>– Coco Chanel</p>
	</div>,
	<div className="splash-quote">
		<h4>
			“In the end, it’s not the years in your life that count. It’s the life in
			your years.”
		</h4>
		<br />
		<p>– Abraham Lincoln</p>
	</div>,

	<div className="splash-quote">
		<h4>
			“Laughter is timeless. Imagination has no age. And dreams are forever.”
		</h4>
		<br />
		<p>– Walt Disney</p>
	</div>,

	<div className="splash-quote">
		<h4>“Wrinkles merely mark where smiles have been.”</h4>
		<br />
		<p>– Mark Twain</p>
	</div>,
	<div className="splash-quote">
		<h4>“We are always the same age inside.”</h4>
		<br />
		<p>– Gertrude Stein</p>
	</div>,
	<div className="splash-quote">
		<h4>
			“Happiness in marriage is a moment by moment choice. A decision to love,
			forgive, grow and grow old together.”
		</h4>
		<br />
		<p>– Fawn Weaver</p>
	</div>,
	<div className="splash-quote">
		<h4>
			“Growing old with someone else is beautiful, but growing old while being
			true to yourself is divine.”
		</h4>
		<br />
		<p>– Dodinsky</p>
	</div>,

	<div className="splash-quote">
		<h4>“We don’t grow older, we grow riper.”</h4>
		<br />
		<p>– Pablo Picasso</p>
	</div>,
	// 13.
	<div className="splash-quote">
		<h4>
			“You are as young as your faith, as old as your doubt; as young as your
			self-confidence, as old as your fear, as young as your hope, as old as
			your despair.”
		</h4>
		<br />
		<p>– Douglas Macarthur</p>
	</div>,
	// 14.
	<div className="splash-quote">
		<h4>
			“Anyone who stops learning is old, whether at twenty or eighty. Anyone who
			keeps learning stays young.”
		</h4>
		<br />
		<p>– Henry Ford</p>
	</div>,
	// 15.
	<div className="splash-quote">
		<h4>
			“I don’t believe in aging. I believe in forever altering one’s aspect to
			the sun.”{" "}
		</h4>
		<br />
		<p>– Virginia Woolf</p>
	</div>,
	// 16.
	<div className="splash-quote">
		<h4>“None are so old as those who have outlived enthusiasm.”</h4>
		<br />
		<p>– Henry David Thoreau</p>
	</div>,
	// 17.
	<div className="splash-quote">
		<h4>
			“Know that you are the perfect age. Each year is special and precious, for
			you shall only live it once. Be comfortable with growing older.”
		</h4>
		<br />
		<p>– Louise Hay</p>
	</div>,
	// 18.
	<div className="splash-quote">
		<h4>“I am not young enough to know everything.” </h4>
		<br />
		<p>– J.M. Barrie</p>
	</div>,
	// 19.
	<div className="splash-quote">
		<h4>“Growing old is mandatory, but growing up is optional.”</h4>
		<br />
		<p>– Walt Disney</p>
	</div>,
	// 20.
	<div className="splash-quote">
		<h4>
			“Age is a question of mind over matter. If you don’t mind, it doesn’t
			matter.”
		</h4>
		<br />
		<p>– Satchel Paige</p>
	</div>,
	// 21.
	<div className="splash-quote">
		<h4>“Anyone who keeps the ability to see beauty never grows old.”</h4>
		<br />
		<p>– Franz Kafka</p>
	</div>,
	// 22.
	<div className="splash-quote">
		<h4>“It takes courage to grow up and become who you really are.”</h4>
		<br />
		<p>– E.E. Cummings</p>
	</div>,
	// 23.  – Eleanor Roosevelt
	<div className="splash-quote">
		<h4>“Today is the oldest you’ve ever been, and the youngest you’ll ever be again.”</h4>
		<br />
		<p></p>
	</div>,
	// 24. “Aging seems to be the only available way to live a long life.” – Daniel Francois Esprit Auber
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 25. “As we grow old, the beauty steals inward.” – Ralph Waldo Emerson
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 26. “We don’t stop playing because we grow old; we grow old because we stop playing.” – George Bernard Shaw
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 27. “We grow neither better nor worse as we get old, but more like ourselves.” – May Lamberton Becker
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 28. “Grow old along with me! The best is yet to be.” – Robert Browning
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 29. “How old would you be if you didn’t know how old you are?” – Satchel Paige
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 30. “Do not regret growing older. It is a privilege denied to many.” – Unknown
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 31. “You are never too old to set another goal or to dream a new dream.” – C.S. Lewis
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 32. “Strength and beauty are the blessings of youth; temperance, however, is the flower of old age.” – Democritus
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 33. “To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.” – Henri Bergson
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 32. “Aging is not lost youth but a new stage of opportunity and strength.” – Betty Friedan
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 35. “Some day you will be old enough to start reading fairy tales again.” – C.S. Lewis
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 36. “Nothing makes a woman look so old as trying desperately hard to look young.” – Coco Chanel
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 37. “As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.” – Audrey Hepburn
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 38. “The trick to aging gracefully is to enjoy it.” – Unknown
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 39. “Nobody grows old merely by living a number of years. We grow old by deserting our ideas. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.” – Samuel Ullman
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
	// 40. “The turning point in the process of growing up is when you discover the core of strength within you that survives all hurt.” – Max Lerner
	<div className="splash-quote">
		<h4></h4>
		<br />
		<p></p>
	</div>,
];
export default () => <div id="splash"></div>;
