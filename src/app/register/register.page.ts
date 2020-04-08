import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { NavController } from '@ionic/angular'
import { Storage } from '@ionic/storage'
import { AuthenticateService } from '../services/authenticate.service'
import { log } from 'util'

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
	registerForm: FormGroup
	errorMessage: string = ''
	validations_message = {
		nombre: [
			{
				type: 'required',
				message: 'El nombre es requerido',
			},
			{
				type: 'minlength',
				message: 'Minimo 10 letras para el nombre',
			},
		],
		apellido: [
			{
				type: 'required',
				message: 'El apellido es requerido',
			},
			{
				type: 'minlength',
				message: 'Minimo 10 letras para el apellido',
			},
		],
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
		private navCtrl: NavController,
		private storage: Storage,
		private athService: AuthenticateService,
	) {
		this.registerForm = this.formBuilder.group({
			nombre: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
			apellido: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
			email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
			password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
		})
	}

	register(registerUserData) {
		registerUserData.password = btoa(registerUserData.password)
		this.athService
			.registerUser(registerUserData)
			.then((resp) => {
				this.navCtrl.navigateBack('/login')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	goToLogin() {
		this.navCtrl.navigateBack('/login')
	}
}
