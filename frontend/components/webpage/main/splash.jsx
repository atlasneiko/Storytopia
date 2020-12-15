import React from "react";
import { globeIcon } from "../../../util/icon_util";
const quoteArr = [
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
	// 23.
	<div className="splash-quote">
		<h4>
			“Today is the oldest you’ve ever been, and the youngest you’ll ever be
			again.”
		</h4>
		<br />
		<p>– Eleanor Roosevelt</p>
	</div>,
	// 24.
	<div className="splash-quote">
		<h4>“Aging seems to be the only available way to live a long life.”</h4>
		<br />
		<p>– Daniel Francois Esprit Auber</p>
	</div>,
	// 25.
	<div className="splash-quote">
		<h4>“As we grow old, the beauty steals inward.”</h4>
		<br />
		<p>– Ralph Waldo Emerson</p>
	</div>,
	// 26.
	<div className="splash-quote">
		<h4>
			“We don’t stop playing because we grow old; we grow old because we stop
			playing.”
		</h4>
		<br />
		<p>– George Bernard Shaw</p>
	</div>,
	// 27.
	<div className="splash-quote">
		<h4>
			“We grow neither better nor worse as we get old, but more like ourselves.”
		</h4>
		<br />
		<p>– May Lamberton Becker</p>
	</div>,
	// 28.
	<div className="splash-quote">
		<h4>“Grow old along with me! The best is yet to be.”</h4>
		<br />
		<p>– Robert Browning</p>
	</div>,
	// 29.
	<div className="splash-quote">
		<h4>“How old would you be if you didn’t know how old you are?” </h4>
		<br />
		<p>– Satchel Paige</p>
	</div>,
	// 30.
	<div className="splash-quote">
		<h4>“Do not regret growing older. It is a privilege denied to many.”</h4>
		<br />
		<p>– Unknown</p>
	</div>,
	// 31.
	<div className="splash-quote">
		<h4>
			“You are never too old to set another goal or to dream a new dream.”
		</h4>
		<br />
		<p>– C.S. Lewis</p>
	</div>,
	// 32.
	<div className="splash-quote">
		<h4>
			“Strength and beauty are the blessings of youth; temperance, however, is
			the flower of old age.”
		</h4>
		<br />
		<p>– Democritus</p>
	</div>,
	// 33.
	<div className="splash-quote">
		<h4>
			“To exist is to change, to change is to mature, to mature is to go on
			creating oneself endlessly.”
		</h4>
		<br />
		<p>– Henri Bergson</p>
	</div>,
	// 32.
	<div className="splash-quote">
		<h4>
			“Aging is not lost youth but a new stage of opportunity and strength.”
		</h4>
		<br />
		<p>– Betty Friedan</p>
	</div>,
	// 35.
	<div className="splash-quote">
		<h4>
			“Some day you will be old enough to start reading fairy tales again.”
		</h4>
		<br />
		<p>– C.S. Lewis</p>
	</div>,
	// 37.
	<div className="splash-quote">
		<h4>
			“As you grow older, you will discover that you have two hands, one for
			helping yourself, the other for helping others.”
		</h4>
		<br />
		<p>– Audrey Hepburn</p>
	</div>,
	// 38.
	<div className="splash-quote">
		<h4>“The trick to aging gracefully is to enjoy it.”</h4>
		<br />
		<p>– Unknown</p>
	</div>,
	// 39.
	<div className="splash-quote">
		<h4>
			“Nobody grows old merely by living a number of years. We grow old by
			deserting our ideas. Years may wrinkle the skin, but to give up enthusiasm
			wrinkles the soul.”
		</h4>
		<br />
		<p>– Samuel Ullman</p>
	</div>,
	// 40.
	<div className="splash-quote">
		<h4>
			“The turning point in the process of growing up is when you discover the
			core of strength within you that survives all hurt.”
		</h4>
		<br />
		<p>– Max Lerner</p>
	</div>,
];
const quote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
export default () => (
	<div id="splash">
		{quote} {globeIcon}
	</div>
);
