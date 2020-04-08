import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-intro',
	templateUrl: './intro.page.html',
	styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
	slideOpt = {
		initialSlide: 0,
		slidesPerView: 1,
		centeredSlides: true,
		speed: 400,
	}

	slides = [
		{
			imageSrc: 'assets/img/',
			imageAlt: '',
			title: 'Este es el titulo 1',
			subTitle: 'Este es el sub-titulo',
			description: 'Esta es la descripcion',
			icon: 'play',
		},
		{
			imageSrc: 'assets/img/',
			imageAlt: '',
			title: 'Este es el titulo 2',
			subTitle: 'Este es el sub-titulo',
			description: 'Esta es la descripcion',
			icon: 'play',
		},
		{
			imageSrc: 'assets/img/',
			imageAlt: '',
			title: 'Este es el titulo 3',
			subTitle: 'Este es el sub-titulo',
			description: 'Esta es la descripcion',
			icon: 'play',
		},
		{
			imageSrc: 'assets/img/',
			imageAlt: '',
			title: 'Este es el titulo 4',
			subTitle: 'Este es el sub-titulo',
			description: 'Esta es la descripcion',
			icon: 'play',
		},
	]

	constructor(private router: Router, private storage: Storage) {}

	finish() {
		this.storage.set('isIntroShowed', true)
		this.router.navigateByUrl('/login')
	}

	ngOnInit() {}
}
