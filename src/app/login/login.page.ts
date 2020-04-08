import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { AuthenticateService } from '../services/authenticate.service'
import { NavController } from '@ionic/angular'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage {
	loginForm: FormGroup
	errorMessage: string = ''
	validations_message = {
		email: [
			{
				type: 'required',
				message: 'El email es requerido',
			},
			{
				type: 'pattern',
				message: 'ojo! este no es un email valido',
			},
		],
		password: [
			{
				type: 'required',
				message: 'El password es requerido',
			},
			{
				type: 'minlength',
				message: 'Minimo 5 letras para el password',
			},
		],
	}
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthenticateService,
		private navCtrl: NavController,
		private storage: Storage,
	) {
		this.loginForm = this.formBuilder.group({
			email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
			password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
		})
	}

	loginUser(credentials) {
		console.log(credentials)
		this.authService
			.loginUser(credentials)
			.then((resp) => {
				this.storage.set('isUserLoggedIn', true)
				this.errorMessage = ''
				this.navCtrl.navigateForward('/menu/home')
			})
			.catch((err) => {
				this.storage.set('isUserLoggedIn', false)
				this.errorMessage = err
			})
	}

	goToRegister() {
		this.navCtrl.navigateForward('/register')
	}
}
