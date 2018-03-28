<template>
	<main id="main-content" ref="main">			
		<!--header navigation -->
		<navigation-basic v-if="listSections" :sections="listSections" ref="mainNav"/>
		<!--header navigation --> 			
		<!-- header section -->
		<section class="banner d-flex align-items-center" role="banner"> 

			<!-- banner text -->
			<div class="container">
				<div class="row justify-content-md-center">
					<div class="col-md-10 banner-text text-center">
						<h1>Flosix<span>Design Studio from Australia</span></h1>
						<nav role="navigation"> 
							<a href="#services" class="banner-btn" v-on:click="gotoSection(0, $event)" >
								<img src="../assets/images/down-arrow.png" alt="">
							</a>
						</nav>
					</div>
				</div>
			</div>
			<!-- banner text --> 
		</section>
		<!-- header section --> 

		<!-- intro section -->
		<section id="intro" class="section intro">		
			<div class="container-fluid no-padding">	
					<!-- swiper -->
					<swiper :options="swiperOption">
						<swiper-slide>							
							<div class="row no-gutters">
								<div class="col-md-6">
									<img src="../assets/images/intro-img1.jpg" alt="" class="img-fluid">
								</div>
								<div class="col-md-6 d-flex align-items-center intro-text-content">
									<div class="padding-5">
										<h2>We create Awesome Branding</h2>
										<p>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. 
											Interaction Designer at XYZCras mattis consectetur purus sit amet fermentum.</p>
										<p>Susan Sims, Interaction Designer at XYZCras mattis consectetur purus sit amet fermentum.</p>
									</div>	
								</div>
							</div>							
						</swiper-slide>
						<swiper-slide>
							<div class="row no-gutters">
								<div class="col-md-6 d-flex flex align-items-center intro-text-content">
									<div class="padding-5">
										<h2>We create Digital Experience </h2>
										<p>Cras mattis consectetur purus sit amet fermentum.Interaction Designer at XYZCras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.</p>
										<p>Susan Sims, Interaction Designer at XYZCras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.</p>
									</div>
								</div>
								<div class="col-md-6">
									<img src="../assets/images/intro-img2.jpg" alt="" class="img-fluid">
								</div>
							</div>
						</swiper-slide>
						<div class="swiper-pagination col-md-6 offset-md-6" slot="pagination"></div>
					</swiper>
				
			</div>
		</section>
		<!-- intro section --> 

		<!-- services section -->
		<section id="services" class="services section">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-6"> <span class="fas fa-chess"></span>
						<div class="services-content">
							<h5>Strategy & Consulting</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Cras sit amet lacus lobortis nisi rutrum elementum. Morbi leo quam, porta ut nulla sed, pellentesque ornare diam.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6"> <span class="fas fa-briefcase"></span>
						<div class="services-content">
							<h5>corporate identity</h5>
							<p>Vivamus eu urna elit. Vivamus non tempus tellus.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6"> <span class="fas fa-paint-brush"></span>
						<div class="services-content">
							<h5>web design and development</h5>
							<p>Quisque suscipit erat ligula, vel pellentesque nunc molestie in. 
								In efficitur, erat a rutrum molestie, massa lacus auctor enim, sit amet molestie purus lectus vitae nisi</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6"> <span class="fas fa-cogs"></span>
						<div class="services-content">
							<h5>Branding</h5>
							<p>Praesent vitae nisl ut enim gravida pharetra nec eu metus. In fringilla lobortis justo aliquam imperdiet. Vestibulum a orci non orci ultrices cursus in ut ante. 
								Duis mauris velit, pharetra et varius vitae, viverra ac lacus. Sed posuere arcu mauris, id iaculis dui euismod nec.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6"> <span class="fas fa-bullhorn"></span>
						<div class="services-content">
							<h5>Digital marketing</h5>
							<p>Maecenas suscipit elementum nunc, vitae hendrerit augue. Nullam euismod aliquam ligula in luctus. 
								Maecenas sagittis turpis et sapien vulputate, sed hendrerit quam sagittis.</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6"> <span class="fas fa-trophy"></span>
						<div class="services-content">
							<h5>Promotion material</h5>
							<p>Nulla venenatis velit eget dignissim tempus. Sed vel ex vel erat interdum porta.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- services section --> 

		<!-- work section -->
		<section id="works" class="works section">
			<div class="container-fluid no-padding">
				<div class="row no-gutters">
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-1.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-2.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-3.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-4.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-5.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-6.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
				</div>				
				<div class="row no-gutters">
					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-7.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>

					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-8.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>

					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-9.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>

					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-10.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>

					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-11.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>

					<div class="col-lg-2 col-md-4 col-sm-4 work"> 
						<a href="#" class="work-box">
							<img src="../assets/images/work-12.jpg" alt="" />
							<div class="overlay">
								<div class="overlay-caption">
									<p><span class="fas fa-search-plus"></span></p>
								</div>
							</div>
						</a> 
					</div>
				</div>
			</div>
		</section>
		<!-- work section --> 

		<!-- our team section -->
		<section id="teams" class="section teams">
			<div class="container">
				<div class="row"> 
					<!-- team member 1 -->
					<div class="col-md-4 col-sm-8">
						<div class="person"> 
							<img src="../assets/images/team-1.png" alt="" class="img-fluid">
							<div class="person-content">
								<h4>Johnathan Doe</h4>
								<h5 class="role">The Mastermind</h5>
								<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
							</div>
							<ul class="social-icons">
								<li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
								<li><a href="#"><span class="fab fa-twitter"></span></a></li>
								<li><a href="#"><span class="fab fa-linkedin"></span></a></li>
								<li><a href="#"><span class="fab fa-google-plus"></span></a></li>
								<li><a href="#"><span class="fab fa-dribbble"></span></a></li>
							</ul>
						</div>
					</div>
					<!-- team member 1 --> 
					<!-- team member 2 -->
					<div class="col-md-4 col-sm-8">
						<div class="person"> 
							<img src="../assets/images/team-2.png" alt="" class="img-fluid">
							<div class="person-content">
								<h4>Lisa Brown</h4>
								<h5 class="role">Creative head</h5>
								<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
							</div>
							<ul class="social-icons">
								<li><a href="#" class=""><span class="fab fa-facebook"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-twitter"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-linkedin"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-google-plus"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-dribbble"></span></a></li>
							</ul>
						</div>
					</div>
					<!-- team member 2 --> 
					<!-- team member 3 -->
					<div class="col-md-4 col-sm-8">
						<div class="person"> 
							<img src="../assets/images/team-3.png" alt="" class="img-fluid">
							<div class="person-content">
								<h4>Mike Collins</h4>
								<h5 class="role">Technical lead</h5>
								<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
							</div>
							<ul class="social-icons">
								<li><a href="#" class=""><span class="fab fa-facebook"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-twitter"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-linkedin"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-google-plus"></span></a></li>
								<li><a href="#" class=""><span class="fab fa-dribbble"></span></a></li>
							</ul>
						</div>
					</div>
					<!-- team member 3 --> 
				</div>
			</div>
		</section>
		<!-- our team section --> 

    	<!-- Testimonials section -->
		<section id="testimonials" class="section testimonials">
			<div class="container-fluid no-padding">
				<swiper :options="swiperOptionTestimonials">
					<swiper-slide>
						<div class="row no-gutters">
							<div class="col-md-12">
								<blockquote class="d-flex flex-column justify-content-center align-items-center">
									<h3>"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Phasellus non dolor nibh. Nullam elementum Aenean eu leo quam..." </h3>
									<p>Rene Brown, Open Window production</p>
								</blockquote>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="row no-gutters">
							<div class="col-md-12">
								<blockquote class="d-flex flex-column justify-content-center align-items-center">
									<h3>"Cras dictum tellus dui, vitae sollicitudin ipsum. Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat shasellus non dolor nibh. Nullam elementum tellus pretium feugiat." </h3>
									<p>Brain Rice, Lexix Private Limited.</p>	
								</blockquote>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="row no-gutters">						
							<div class="col-md-12">
								<blockquote class="d-flex flex-column justify-content-center align-items-center">
									<h3>"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur...." </h3>
									<p>Andi Simond, Global Corporate Inc</p>
								</blockquote>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="row no-gutters">							
							<div class="col-md-12">
								<blockquote class="d-flex flex-column justify-content-center align-items-center">
									<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elitPhasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui sollcitudin." </h3>
									<p>Kristy Gabbor, Martix Media</p>
								</blockquote>
							</div>
						</div>
					</swiper-slide>
					<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
					<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
					<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				</swiper>
			</div>
		</section>
    	<!-- Testimonials section --> 

		<!-- Get a quote section -->
		<section id="contact">
			<div class="container section d-flex justify-content-center align-items-center">
				<div class="row justify-content-md-center">
					<div class="col-md-10 content">
						<h3>Looking for a new brand? Let's work together!</h3>
						<button type="button" class="btn btn-success">Get Quotation !</button>
					</div>
				</div>
			</div>
		</section>
		<!-- Get a quote section --> 

    	<!-- Footer section -->
		<footer class="footer">
			<div class="footer-top d-flex justify-content-center align-items-center">
				<div class="container">
					<div class="row">
						<div class="footer-col col-md-6">
							<h5>Our Office Location</h5>
							<p>Collins Street West Victoria 8007 Australia.<br>
							1800 1234 56789 / 98532100987<br>
							support@flosix.com</p>
						</div>
						<div class="footer-col col-md-3">
							<h5>Services We Offer</h5>
							<p>
								<ul>
									<li><a href="#">Digital Strategy</a></li>
									<li><a href="#">Websites</a></li>
									<li><a href="#">Videography</a></li>
									<li><a href="#">Social Media</a></li>
									<li><a href="#">User Experience</a></li>
								</ul>
							</p>
						</div>
						<div class="footer-col col-md-3">
							<h5>Share with Love</h5>
							<ul class="footer-share">
								<li><a href="#"><i class="fab fa-facebook"></i></a></li>
								<li><a href="#"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#"><i class="fab fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fab fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
      	<!-- footer top -->     
	</main>
</template>

<script>

	import { EventBus } from '../event-bus.js'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import NavigationBasic from './NavigationBasic'
	import 'swiper/dist/css/swiper.css'

	export default {

		name: 'OnePage',

		data() {
			return {
				ticking: false,
				swiperOption: {
					spaceBetween: 30,
					effect: 'fade',
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				swiperOptionTestimonials: {
					spaceBetween: 30,
					effect: 'fade',
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				},
				listElementsScrollable: null
			}
		},

		components: {
			swiper,
			swiperSlide,
			NavigationBasic
		},

        computed: {
            listSections() {
				if (this.listElementsScrollable){
					return this.listElementsScrollable
				}else{
					return null
				}
            }
		},
		
		mounted() {			
			this.init()	
			this.addListeners()
		},

		methods: {   

			init(){
				// simule le preload des élements (images,...)
				// mettre un vrai preloader
				setTimeout(() => {
					this.resize()
				}, 100)		
			},

			addListeners() {
				EventBus.$on('RESIZE', this.resize)
			},

            resize() {

				// nbr d'elements 'section'
                const listElementsScrollableLength = this.$el.querySelectorAll('.section').length
				
				// création taleau sections
				this.listElementsScrollable = []
                for(let i = 0 ; i < listElementsScrollableLength; i++){                    
					const el = this.$el.querySelectorAll('.section')[i]
					
                    // le top est egal au decalage de l'element + le scroll de la fenetre
                    const top = el.getBoundingClientRect().top + window.scrollY
					const bottom = top + el.getBoundingClientRect().height
					
                    //console.log(el, top, bottom, 'h', el.getBoundingClientRect().height)
                    this.listElementsScrollable.push({el, top, bottom}) 
                }
			},

			gotoSection(refIndex, e) {
				e.preventDefault()
				this.$refs.mainNav.scrollToSection(refIndex)
			}
		}
	}

</script>
