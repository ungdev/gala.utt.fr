import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import partners from '../../variables/partners'

import posterImage from '../../assets/poster.png';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './home.css';

window.jQuery = $;
require('owl.carousel2');

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = { carousel: null };
		this.carouselInterval = null;
		this.partners = [];

		partners.forEach((partner, i) => {
			const img = require(`../../assets/partners/${partner.image}`);

			this.partners.push(<a href={partner.url} key={i}><img src={img} alt={partner.name} /></a>);
		});
	}

	componentDidMount() {
		const carousel = $('.owl-carousel');

		carousel.owlCarousel({
			responsive: {
        0:    { items: 2 },
        400:  { items: 3 },
				550:  { items: 4 },
				800:  { items: 5 },
        1000: { items: 6 }
    	},
			loop: true,
			margin: 10,
			smartSpeed: 500,
			onDrag: this.clearCarouselInterval,
			onDragged: this.setCarouselInterval
		});

		this.setState({
			carousel
		});

		this.setCarouselInterval();
	}

	componentWillUnmount() {
		this.clearCarouselInterval();
	}

	clearCarouselInterval = () => {
		if(this.carouselInterval) {
			window.clearInterval(this.carouselInterval);
		}
	}

	setCarouselInterval = () => {
		this.carouselInterval = window.setInterval(this.playCarousel, 2000);
	}

	playCarousel = () => {
		if(this.state.carousel) {
			this.state.carousel.trigger('next.owl.carousel', [1200]);
		}
	}

  render() {
		return (
			<div id="home">
				<h1>Bienvenue sur le site officiel du Gala UTT !</h1>
				<hr />

				<p className="justified">
					Le Gala de l’UTT est un soirée de prestige unique en son genre accueillant 3500 participants
					et dont les bénéfices sont reversés à des associations de charité.
					Nous revenons en 2019 pour une 23ème édition.
					Les locaux de l’UTT seront de nouveau transformés afin de vous faire vivre une nuit magique.
				</p>

				<div className="centered">
					<div className="poster-container">
						<img src={posterImage} alt="" />
					</div>

					<hr />

					<h2>Aftermovie Gala UTT 2018</h2>
					<iframe
						title="Aftermovie Gala UTT 2018"
						src="https://www.youtube.com/embed/EO_rrd8FfSM?autoplay=0"
						width="720"
						height="405"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>

					<div className="partners">
						<div className="partners-background"></div>

						<h2>Partenaires</h2>

						<div className="partners-carousel-container">
							<i className="partners-carousel-arrow-left fas fa-chevron-left"></i>

							<div className="owl-carousel partners-carousel">
								{ this.partners }
							</div>

							<i className="partners-carousel-arrow-right fas fa-chevron-right"></i>
						</div>

						<Link to="/partenaires" className="button">Tous les partenaires</Link>
					</div>
				</div>
			</div>
		);
  }
};

export default Home;